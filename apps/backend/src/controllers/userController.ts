import { pool } from "../lib/db.js";

import { NotFoundError, BadRequestError } from "../utils/errors.js";

interface UserProfile {
  id: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
}
interface UserListItem extends UserProfile { }
interface UserUpdateDTO {
  email?: string;
  isAdmin?: boolean;
}

/**
 * Returns the profile of the currently uthenticated user.
 */
export async function getCurrentUser(userId: string): Promise<UserProfile> {
  const { rows } = await pool.query(
    `SELECT id, email, is_admin AS "isAdmin", created_at AS "createdAt" FROM users WHERE id = $1`,
    [userId],
  );

  if (rows.length === 0) {
    throw new NotFoundError("User not found");
  }

  return rows[0];
}

/**
 * Lists all users (admin only).
 */
export async function listUsers(): Promise<UserListItem[]> {
  const { rows } = await pool.query(
    `SELECT id, email, is_admin AS "isAdmin", created_at AS "createdAt"
     FROM users ORDER BY created_at DESC`,
  );
  return rows;
}

/**
 * Updates a user’s email or admin flag (admin only).
 */
export async function updateUser(
  id: string,
  dto: UserUpdateDTO,
): Promise<UserProfile> {
  const fields: string[] = [];
  const values: any[] = [];
  let idx = 1;

  // TODO: check if this should be done this way
  if (dto.email !== undefined) {
    fields.push(`email = $${idx++}`);
    values.push(dto.email);
  }
  if (dto.isAdmin !== undefined) {
    fields.push(`is_admin = $${idx++}`);
    values.push(dto.isAdmin);
  }
  if (fields.length === 0) {
    throw new BadRequestError("No valid fields to update");
  }

  values.push(id);
  const query = `
    UPDATE users SET ${fields.join(", ")}
    WHERE id = $${idx}
    RETURNING id, email, is_admin AS "isAdmin", created_at AS "createdAt"`;

  const { rows } = await pool.query(query, values);
  if (rows.length === 0) {
    throw new NotFoundError("User not found");
  }
  return rows[0];
}

/**
 * Deletes a user (admin only).
 */
export async function deleteUser(id: string): Promise<void> {
  const { rowCount } = await pool.query("DELETE FROM users WHERE id = $1", [
    id,
  ]);
  if (rowCount === 0) {
    throw new NotFoundError("User not found");
  }
}
