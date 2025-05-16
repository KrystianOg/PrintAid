import { pool } from "../../lib/db.js";
import type { Product } from "../../types/db.js";
import { NotFoundError } from "../../utils/errors.js";

type FullTextProduct = Pick<Product, "id" | "title" | "description">;

export async function fullTextSearch(
  search: string,
): Promise<FullTextProduct[]> {
  const { rows } = await pool.query<FullTextProduct>(
    `
SELECT id, title, description
FROM products
WHERE tsv @@ plainto_tsquery('english', $1)
ORDER BY ts_rank(tsv, plainto_tsquery('english',$1)) DESC;
`,
    [search],
  );

  return rows;
}

export async function getProduct(id: string): Promise<Product> {
  const { rows } = await pool.query<Product>(
    `
SELECT 
  p.*,
  (
    SELECT jsonb_agg(
      jsonb_build_object(
        'id', pm.id,
        'mediaType', pm.media_type,
        'filePath', pm.file_path,
        'thumbnailPath', pm.thumbnail_path,
        'createdBy', pm.created_by,
        'createdAt', pm.created_at,
        'updatedAt', pm.updated_at,
        'deletedAt', pm.deleted_at
      )
    )
    FROM product_media pm
    WHERE pm.product_id = p.id AND pm.deleted_at IS NULL
  ) AS media
FROM products p
WHERE p.id = $1
`,
    [id],
  );

  if (rows.length === 0 || !rows[0]) {
    throw new NotFoundError("Product not found ");
  }

  return rows[0];
}

export async function listProducts(): Promise<Product[]> {
  const { rows } = await pool.query<Product>(``);

  return rows;
}

interface ProductUpdateDTO { }

export async function updateProduct(
  id: string,
  dto: ProductUpdateDTO,
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
