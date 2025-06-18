import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { getProductsFromMeilisearch } from "../../../admin/lib/meilisearch";

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const search = req.query["s"];

  if (Array.isArray(search) || !search) {
    res.status(400).json({ error: "Invalid search query" });
    return;
  }
  console.info("search", search);

  if (Object.keys(req.query).length > 1) {
    res.status(400).json({ error: "Invalid query parameters" });
    return;
  }

  const result = await getProductsFromMeilisearch({ query: search as string });

  res.status(200).json(result);
}
