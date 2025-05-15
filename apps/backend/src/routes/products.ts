import {
  getProduct,
  listProducts,
  updateProduct,
} from "../features/products/product.controller.js";
import { updateProductSchema } from "../features/products/product.schemas.js";
import { validate } from "../middlewares/validation.js";
import { Router } from "express";
import multer from "multer";
import path from "path";
import sharp from "sharp";
import fs from "fs";
import { pool } from "../lib/db.js";

const upload = multer({ dest: "temp_uploads/" });

const router = Router();

router.get("/", async (_req, res) => {
  const products = await listProducts();

  res.status(200).json(products);
});

router.get<{ id: string }>("/:id", async (req, res) => {
  const id = req.params.id;

  if (id === undefined) {
    throw new Error();
  }

  const product = await getProduct(id);

  res.status(200).json(product);
});

router.patch<{ id: string }>(
  "/:id",
  validate(updateProductSchema),
  async (req, res) => {
    const id = req.params.id;

    if (id === undefined) {
      throw new Error();
    }

    const updated = await updateProduct(id, req.body);

    res.status(200).json(updated);
  }
);

// TODO: split this into smaller parts
router.post<{ productId: string }>(
  "/:productId/media",
  upload.array("files", 10),
  async (req, res) => {
    const productId = req.params.productId;
    const files = req.files as Express.Multer.File[];

    const uploaded = [];

    for (const file of files) {
      const ext = path.extname(file.originalname);
      const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}${ext}`;
      const outputPath = path.join("public/uploads", fileName);

      if (file.mimetype.startsWith("image/")) {
        await sharp(file.path).resize(800).toFile(outputPath);
      } else {
        fs.renameSync(file.path, outputPath);
      }

      await pool.query(
        `INSERT INTO product_media (product_id, media_type, file_path) VALUES ($1, $2)`,
        [productId, file.mimetype, outputPath]
      );

      uploaded.push(`/public/uploads/${fileName}`);
    }

    res.json({ success: true, files: uploaded });
  }
);

export default router;
