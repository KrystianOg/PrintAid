import { pool } from "../../lib/db.js";
import type { Product } from "../../types/db.js";
import { NotFoundError } from "../../utils/errors.js";

export async function getProduct(id: string): Promise<Product> {
  const { rows } = await pool.query<Product>(``, [id]);

  if (rows.length === 0 || !rows[0]) {
    throw new NotFoundError("Product not found ");
  }

  return rows[0];
}

export async function listProducts(): Promise<Product[]> {
  const { rows } = await pool.query<Product>(``);

  return rows;
}

interface ProductUpdateDTO {}

export async function updateProduct(
  id: string,
  dto: ProductUpdateDTO
): Promise<Product> {
  const { rows } = await pool.query<Product>(``, [id]);

  if (rows.length === 0 || !rows[0]) {
    throw new NotFoundError("Product not found ");
  }

  return rows[0];
}

export async function deleteProduct(id: string): Promise<void> {
  await pool.query(``, [id]);
}
