export interface Product {
  id: string;
  name: string;
  prices: { amount: number; currency: string }[];
  description: string;
  category: string;
  image: string;
  stock: number;
  discount?: number;
  availability: string;
  similar: string[];
  related: string[];
  realizationTime?: string;
  tags: string[];
  meta?: unknown;
}

export type ProductListItem = Pick<
  Product,
  "id" | "name" | "prices" | "description" | "image"
>;

export type ProductCartItem = ProductListItem & {
  quantity: number;
};
