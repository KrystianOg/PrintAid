import { Pool } from "pg";

// const isTest = process.env.NODE_ENV === "test"

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

export const initDb = () => pool.connect();
