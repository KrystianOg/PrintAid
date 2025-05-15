import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../lib/db.js";
import crypto from "node:crypto";
import { BadRequestError, UnauthorizedError } from "../utils/errors.js";

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET;

interface RegisterDTO {
  email: string;
  password: string;
}

interface LoginDTO {
  email: string;
  password: string;
}

interface RegisterResult {
  userId: string;
}
interface LoginResult {
  token: string;
}

/**
 * Registers a new user: hashes password, inserts into DB, returns new user ID.
 */
export async function registerUser(dto: RegisterDTO): Promise<RegisterResult> {
  const { email, password } = dto;

  const { rowCount } = await pool.query(
    "SELECT 1 FROM users WHERE email = $1",
    [email],
  );

  if (rowCount !== null && rowCount > 0) {
    throw new BadRequestError("Email already in use");
  }

  const passwordHash = await hash(password, SALT_ROUNDS);
  const userId = crypto.randomUUID();

  await pool.query(
    `INSERT INTO users (id, email, password_hash, is_admin, created_at) 
      VALUES ($1, $2, $3, FALSE, NOW())`,
    [userId, email, passwordHash],
  );

  return { userId };
}

/**
 * Logs in a user: verifies credentials and returns a signed JWT.
 */
export async function loginUser(dto: LoginDTO): Promise<LoginResult> {
  const { email, password } = dto;

  const { rows } = await pool.query(
    `SELECT id, password_hash, is_admin FROM users WHERE email = $1`,
    [email],
  );

  if (rows.length === 0) {
    throw new UnauthorizedError("Invalid email or password");
  }

  const { id, password_hash, is_admin } = rows[0];

  const match = await compare(password, password_hash);
  if (!match) {
    throw new UnauthorizedError("Invalid email or password");
  }

  const token = jwt.sign(
    {
      userId: id,
      isAdmin: is_admin,
    },
    JWT_SECRET,
    { expiresIn: "6h" },
  );

  return { token };
}
