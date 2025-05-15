// scripts/prepare-test-db.js
import { promises as fs } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import pg from "pg";
import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);
const __dirname = dirname(fileURLToPath(import.meta.url));

// Test database config - append '_test' to DB name for isolation
const TEST_DB_CONFIG = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  database: `${process.env.DB_NAME}_test`,
};

async function prepareTestDatabase() {
  console.log("🔄 Preparing test database environment...");

  // Connect to postgres to manage databases
  const adminClient = new pg.Client({
    ...TEST_DB_CONFIG,
    database: "postgres", // Connect to default postgres database
  });

  try {
    await adminClient.connect();

    // Drop test database if it exists
    try {
      console.log(
        `⚠️ Dropping existing test database: ${TEST_DB_CONFIG.database}`,
      );
      await adminClient.query(
        `DROP DATABASE IF EXISTS ${TEST_DB_CONFIG.database}`,
      );
    } catch (err) {
      console.error("Error dropping database:", err.message);
    }

    // Create fresh test database
    try {
      console.log(
        `🔨 Creating fresh test database: ${TEST_DB_CONFIG.database}`,
      );
      await adminClient.query(`CREATE DATABASE ${TEST_DB_CONFIG.database}`);
    } catch (err) {
      console.error("Error creating database:", err.message);
      process.exit(1);
    }
  } finally {
    await adminClient.end();
  }

  // Connect to the new test database
  const testClient = new pg.Client(TEST_DB_CONFIG);
  try {
    await testClient.connect();

    // Run migrations
    console.log("📄 Running migrations on test database...");
    const migrationsDir = join(__dirname, "../migrations");

    try {
      // Get all up migration files and sort them
      const files = await fs.readdir(migrationsDir);
      const upMigrations = files
        .filter((file) => file.endsWith(".up.sql"))
        .sort();

      // Apply each migration
      for (const migrationFile of upMigrations) {
        console.log(`  ↪ Applying migration: ${migrationFile}`);
        const sql = await fs.readFile(
          join(migrationsDir, migrationFile),
          "utf8",
        );
        await testClient.query(sql);
      }
    } catch (err) {
      console.error("Error running migrations:", err.message);
      process.exit(1);
    }

    // Optionally seed test data
    console.log("🌱 Seeding test data...");
    try {
      // Add your test data seeding here
      await testClient.query(`
        INSERT INTO users (email, password, is_admin) 
        VALUES 
          ('admin@test.com', '$2b$10$rPiEAgQNIT1TCoQB.PjvvOBUBqIGlwG/7Zv/U0DvG.YU.d2PgBuFK', true),
          ('user@test.com', '$2b$10$rPiEAgQNIT1TCoQB.PjvvOBUBqIGlwG/7Zv/U0DvG.YU.d2PgBuFK', false);
        -- password is 'Password123!' for both users
      `);

      // Add more seed data as needed
    } catch (err) {
      console.error("Error seeding test data:", err.message);
      // Continue even if seeding fails
    }

    console.log("✅ Test database prepared successfully!");
  } finally {
    await testClient.end();
  }
}

// Execute immediately if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  prepareTestDatabase().catch((err) => {
    console.error("Database preparation failed:", err);
    process.exit(1);
  });
}

export { prepareTestDatabase, TEST_DB_CONFIG };
