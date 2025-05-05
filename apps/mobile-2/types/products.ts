export interface Product {
  id: string;
  name: string;
  price: number;
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
  "id" | "name" | "price" | "description" | "image"
>;
