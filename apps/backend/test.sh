#!/usr/bin/env bash

set -e
set -o pipefail

export $(grep -v '^#' .env.test | xargs)


echo "🧪 Setting up test database: $DB_NAME"

# Drop and recreate test DB
psql -h "$DB_HOST" -U "$DB_USER" -p "$DB_PORT" -d postgres -c "DROP DATABASE IF EXISTS \"$DB_NAME\";"
psql -h "$DB_HOST" -U "$DB_USER" -p "$DB_PORT" -d postgres -c "CREATE DATABASE \"$DB_NAME\";"

echo "📦 Running migrations..."

for file in ./migrations/*.up.sql; do
  echo "→ Running $file"
  psql -h "$DB_HOST" -U "$DB_USER" -p "$DB_PORT" -d "$DB_NAME" -f "$file"
done

echo "✅ Migrations complete"

# Optional: seed admin user or other test data here
# psql ... -c "INSERT INTO users ..."

echo "🔬 Running tests..."
NODE_ENV=test npx vitest run

echo "🎉 Done"
