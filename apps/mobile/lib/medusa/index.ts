import Medusa from "@medusajs/js-sdk";
import { collection } from "./collection";
import { category } from "./category";
import { product } from "./product";
import { search } from "./search";

export const medusaSdk = new Medusa({
  baseUrl: process.env.EXPO_PUBLIC_API_URL,
  debug: process.env.NODE_ENV === "development",
  publishableKey: process.env.EXPO_PUBLIC_API_KEY,
});

export const sdk = {
  collection,
  category,
  product,
  search,
} as const;
