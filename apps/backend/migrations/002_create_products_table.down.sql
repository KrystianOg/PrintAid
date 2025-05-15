-- Migration: create_products_table (down)
-- Created at: 2025-05-15 12:00:00 UTC

-- Drop trigger first
DROP TRIGGER IF EXISTS update_products_modtime ON products;

-- Drop the products table
DROP TABLE IF EXISTS products;

-- Only drop the function if no other tables are using it
-- Check if any other triggers use this function before dropping it
DO $$
DECLARE
  trigger_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO trigger_count
  FROM pg_trigger
  WHERE tgname != 'update_products_modtime' 
    AND tgfoid = (SELECT oid FROM pg_proc WHERE proname = 'update_modified_column');
  
  IF trigger_count = 0 THEN
    DROP FUNCTION IF EXISTS update_modified_column();
  END IF;
END $$;

