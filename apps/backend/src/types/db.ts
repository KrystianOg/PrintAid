import { LicenseType } from "../features/products/product.schemas.js";

type Custom = {
  TIMESTAMP: string;
  UUID: string;
};

type User = {
  id: Custom["UUID"];
  email: string;
  is_admin: boolean;
  // meta
  createdBy?: Custom["UUID"]; // user_id
  createdAt: Custom["TIMESTAMP"]; // ?
  updatedAt: Custom["TIMESTAMP"];
  deletedAt?: Custom["TIMESTAMP"];
};

export type Product = {
  id: Custom["UUID"];
  title: string;
  description: string;
  category: string;
  /** @deprecated */
  material?: string;
  defaultScale?: number;
  licenseType?: LicenseType;
  licenseUrl?: string;
  creatorName?: string;
  creatorProfileUrl?: string;
  sourcePlatform?: string;
  sourceUrl?: string;
  commercialUseAllowed?: boolean;
  remixAllowed?: boolean;
  attributionRequired?: boolean;
  // meta
  createdBy?: Custom["UUID"];
  createdAt: Custom["TIMESTAMP"];
  updatedAt: Custom["TIMESTAMP"];
  deletedAt?: Custom["TIMESTAMP"];
};

type ProductMedia = {
  id: Custom["UUID"];
  productId: Custom["UUID"];
  mediaType: string;
  filePath: string;
  thumbnailPath: string;
  // meta
  createdBy?: Custom["UUID"];
  createdAt: Custom["TIMESTAMP"];
  updatedAt: Custom["TIMESTAMP"];
  deletedAt?: Custom["TIMESTAMP"];
};

type OrderStatus = "requested";

type Order = {
  id: Custom["UUID"];
  userId: Custom["UUID"];
  status: OrderStatus;
  notes?: string;
  // meta
  createdBy?: Custom["UUID"];
  createdAt: Custom["TIMESTAMP"];
  updatedAt: Custom["TIMESTAMP"];
  deletedAt?: Custom["TIMESTAMP"];
};

type OrderItem = {
  id: Custom["UUID"];
  orderId: Custom["UUID"];
  productId: Custom["UUID"];
  scale: number;
  quantity: number;
  // meta
  createdBy?: Custom["UUID"];
  createdAt: Custom["TIMESTAMP"];
  updatedAt: Custom["TIMESTAMP"];
  deletedAt?: Custom["TIMESTAMP"];
};

type FilamentMaterial = "ABS" | "PLA" | "PETG";

type Filament = {
  id: Custom["UUID"];
  material: FilamentMaterial | ({} & string);
  colorName: string;
  colorHex: string;
  notes?: string;
  // meta
  createdBy?: Custom["UUID"];
  createdAt: Custom["TIMESTAMP"];
  updatedAt: Custom["TIMESTAMP"];
  deletedAt?: Custom["TIMESTAMP"];
};

type ProductFilament = {
  productId: Custom["UUID"];
  filamentId: Custom["UUID"];
  // meta
  createdBy?: Custom["UUID"];
  createdAt: Custom["TIMESTAMP"];
  updatedAt: Custom["TIMESTAMP"];
  deletedAt?: Custom["TIMESTAMP"];
};

export type DB = {
  users: User[];
  products: Product[];
  product_media: ProductMedia[];
  orders: Order[];
  order_items: OrderItem[];
  filaments: Filament[];
  product_filaments: ProductFilament[];
};
