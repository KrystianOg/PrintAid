#!/bin/bash
# migrate.sh - Database migration script for development/production

set -e  # Exit immediately if a command exits with non-zero status

# Load environment variables
if [ -f ".env" ]; then
  export $(grep -v '^#' .env | xargs)
else
  echo "❌ Error: .env file not found"
  exit 1
fi

# Set default values for environment variables if not set
DB_HOST=${DB_HOST:-localhost}
DB_PORT=${DB_PORT:-5432}
DB_USER=${DB_USER:-postgres}
DB_NAME=${DB_NAME:-printaid}

# Check if PGPASSWORD is set either directly or via DB_PASS
if [ -z "$PGPASSWORD" ] && [ -z "$DB_PASS" ]; then
  echo "❌ Error: Database password not set. Please set DB_PASS in .env file or PGPASSWORD environment variable"
  exit 1
fi

# Set PGPASSWORD if DB_PASS is provided
if [ -n "$DB_PASS" ]; then
  export PGPASSWORD=$DB_PASS
fi

# Database connection string for psql
DB_CONN="-h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME"

# Path to migrations
MIGRATIONS_DIR="./migrations"

# Function to run a migration file
run_migration() {
  local file=$1
  echo "📄 Running migration: $file"
  psql $DB_CONN -f "$MIGRATIONS_DIR/$file"
  
  if [ $? -ne 0 ]; then
    echo "❌ Error: Migration failed: $file"
    exit 1
  fi
}

# Function to check if migration tracking table exists
create_migration_table() {
  echo "🔧 Checking migration tracking table..."
  psql $DB_CONN -c "CREATE TABLE IF NOT EXISTS migrations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    applied_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );"
}

# Function to check if a migration has been applied
is_migration_applied() {
  local migration_name=$1
  local result=$(psql $DB_CONN -t -c "SELECT COUNT(*) FROM migrations WHERE name='$migration_name';")
  
  if [ "$result" -gt "0" ]; then
    return 0  # Migration has been applied
  else
    return 1  # Migration has not been applied
  fi
}

# Function to mark a migration as applied
mark_migration_applied() {
  local migration_name=$1
  psql $DB_CONN -c "INSERT INTO migrations (name) VALUES ('$migration_name');"
}

# Function to remove a migration from applied list
mark_migration_rolled_back() {
  local migration_name=$1
  psql $DB_CONN -c "DELETE FROM migrations WHERE name='$migration_name';"
}

# Check connection to database
echo "🔄 Checking database connection..."
if ! psql $DB_CONN -c '\q' > /dev/null 2>&1; then
  echo "❌ Error: Could not connect to database"
  exit 1
fi

# Create migration tracking table if it doesn't exist
create_migration_table

# Command line argument handling
COMMAND=${1:-"up"}  # Default to "up" if no command provided

case "$COMMAND" in
  up)
    echo "🔼 Running migrations UP..."
    
    # Get all migration files ending with .up.sql
    migration_files=$(find $MIGRATIONS_DIR -name "*.up.sql" | sort)
    
    for file in $migration_files; do
      filename=$(basename "$file")
      migration_name="${filename%.up.sql}"
      
      # Skip if already applied
      if is_migration_applied "$migration_name"; then
        echo "⏭️  Skipping already applied migration: $filename"
        continue
      fi
      
      # Run migration
      run_migration "$filename"
      
      # Mark as applied
      mark_migration_applied "$migration_name"
      
      echo "✅ Migration applied: $filename"
    done
    ;;
    
  down)
    echo "🔽 Rolling back migrations..."
    
    # Get number of migrations to roll back (default to 1)
    STEPS=${2:-1}
    
    # Get the last N applied migrations
    applied_migrations=$(psql $DB_CONN -t -c "SELECT name FROM migrations ORDER BY applied_at DESC LIMIT $STEPS;")
    
    # Check if there are migrations to roll back
    if [ -z "$applied_migrations" ]; then
      echo "ℹ️  No migrations to roll back"
      exit 0
    fi
    
    # Roll back each migration
    for migration_name in $applied_migrations; do
      # Remove leading/trailing whitespace
      migration_name=$(echo "$migration_name" | xargs)
      down_file="${migration_name}.down.sql"
      
      # Check if the down file exists
      if [ ! -f "$MIGRATIONS_DIR/$down_file" ]; then
        echo "❌ Error: Down migration file not found: $down_file"
        exit 1
      fi
      
      # Run down migration
      run_migration "$down_file"
      
      # Remove from applied list
      mark_migration_rolled_back "$migration_name"
      
      echo "✅ Migration rolled back: $down_file"
    done
    ;;
    
  reset)
    echo "🔄 Resetting database..."
    
    # Get all applied migrations in reverse order
    applied_migrations=$(psql $DB_CONN -t -c "SELECT name FROM migrations ORDER BY applied_at DESC;")
    
    # Roll back each migration
    for migration_name in $applied_migrations; do
      # Remove leading/trailing whitespace
      migration_name=$(echo "$migration_name" | xargs)
      down_file="${migration_name}.down.sql"
      
      # Check if the down file exists
      if [ ! -f "$MIGRATIONS_DIR/$down_file" ]; then
        echo "⚠️  Warning: Down migration file not found: $down_file. Skipping rollback but removing from tracking."
        mark_migration_rolled_back "$migration_name"
        continue
      fi
      
      # Run down migration
      run_migration "$down_file"
      
      # Remove from applied list
      mark_migration_rolled_back "$migration_name"
      
      echo "✅ Migration rolled back: $down_file"
    done
    
    # Now run all up migrations
    echo "🔄 Re-applying all migrations..."
    $0 up
    ;;
    
  status)
    echo "📊 Migration Status:"
    
    # Get all migration files
    all_migrations=$(find $MIGRATIONS_DIR -name "*.up.sql" | sort | xargs -n1 basename | sed 's/\.up\.sql$//')
    
    # Get all applied migrations
    applied_migrations=$(psql $DB_CONN -t -c "SELECT name FROM migrations ORDER BY applied_at;")
    
    # Check status of each migration
    for migration in $all_migrations; do
      if echo "$applied_migrations" | grep -q "$migration"; then
        applied_at=$(psql $DB_CONN -t -c "SELECT applied_at FROM migrations WHERE name='$migration';")
        echo "✅ Applied: $migration ($applied_at)"
      else
        echo "❌ Pending: $migration"
      fi
    done
    ;;
    
  create)
    # Get migration name from argument
    MIGRATION_NAME=${2}
    
    if [ -z "$MIGRATION_NAME" ]; then
      echo "❌ Error: Migration name required"
      echo "Usage: $0 create <migration_name>"
      exit 1
    fi
    
    # Format timestamp for migration filename
    TIMESTAMP=$(date +%Y%m%d%H%M%S)
    FILENAME="${TIMESTAMP}_${MIGRATION_NAME}"
    
    # Create up migration file
    cat > "$MIGRATIONS_DIR/${FILENAME}.up.sql" << EOF
-- Migration: ${MIGRATION_NAME} (up)
-- Created at: $(date -u +"%Y-%m-%d %H:%M:%S UTC")

-- Add your SQL here

EOF
    
    # Create down migration file
    cat > "$MIGRATIONS_DIR/${FILENAME}.down.sql" << EOF
-- Migration: ${MIGRATION_NAME} (down)
-- Created at: $(date -u +"%Y-%m-%d %H:%M:%S UTC")

-- Add rollback SQL here

EOF
    
    echo "✅ Created migration files:"
    echo "   - $MIGRATIONS_DIR/${FILENAME}.up.sql"
    echo "   - $MIGRATIONS_DIR/${FILENAME}.down.sql"
    ;;
    
  *)
    echo "❌ Unknown command: $COMMAND"
    echo "Usage: $0 [up|down|reset|status|create] [args]"
    echo "  up            - Apply all pending migrations"
    echo "  down [steps]  - Roll back the last migration (or specified number of migrations)"
    echo "  reset         - Roll back all migrations and reapply them"
    echo "  status        - Show status of all migrations"
    echo "  create <name> - Create a new migration with name"
    exit 1
    ;;
esac

echo "✅ Migration operation completed successfully!"
exit 0

