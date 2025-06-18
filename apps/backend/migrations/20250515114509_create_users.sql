-- migrate:up
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE,
  --- meta
  created_by UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  material TEXT,
  default_scale NUMERIC(5,2) NOT NULL DEFAULT 100.00,
  license_type TEXT CHECK (license_type IN ('CC-BY', 'CC-BY-SA', 'CC-BY-NC', 'CC-BY-NC-SA', 'CC0', 'Proprietary', 'Other')),
  license_url TEXT,
  creator_name TEXT,
  creator_profile_url TEXT,
  source_platform TEXT, -- e.g. 'Printables', 'Thingiverse', etc.
  source_url TEXT,
  commercial_use_allowed BOOLEAN,
  remix_allowed BOOLEAN,
  attribution_required BOOLEAN,
  --- meta
  created_by UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE product_media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  media_type TEXT NOT NULL,
  file_path TEXT NOT NULL,
  thumbnail_path TEXT,
  --- meta
  created_by UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'requested',
  notes TEXT,
  --- meta
  created_by UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
  scale NUMERIC(5,2) NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  --- meta
  created_by UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP WITH TIME ZONE
);

--- Full-text search support
ALTER TABLE products ADD COLUMN tsv tsvector;
UPDATE products SET tsv = to_tsvector('english', coalesce(title,'') || ' ' || coalesce(description, ''));
CREATE INDEX idx_products_tsv ON products USING GIN(tsv);

CREATE FUNCTION products_tsv_trigger() RETURNS trigger AS $$
BEGIN
  NEW.tsv := to_tsvector('english', coalesce(NEW.title, '') || ' ' || coalesce(NEW.description, ''));
  NEW.updated_at = NOW();
  RETURN NEW;
END
$$ LANGUAGE plpgsql;

CREATE TRIGGER tsv_upate 
  BEFORE INSERT OR UPDATE ON products 
  FOR EACH ROW EXECUTE FUNCTION products_tsv_trigger();


-- migrate:down
DROP TRIGGER IF EXISTS tsv_update ON products;
DROP INDEX IF EXISTS idx_products_tsv;
ALTER TABLE products DROP COLUMN IF EXISTS tsv;
DROP FUNCTION IF EXISTS products_tsv_trigger() CASCADE;

DROP INDEX IF EXISTS idx_products_tsv;

DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS product_media;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;
