import { Pool, PoolConfig } from "pg";

const config: PoolConfig = process.env.DATABASE_URL
  ? {
    connectionString: process.env.DATABASE_URL,
  }
  : {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  };

export const pool = new Pool(config);

export const initDb = () => pool.connect();
