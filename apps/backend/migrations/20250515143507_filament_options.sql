-- migrate:up
CREATE TABLE filaments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  material TEXT NOT NULL, -- e.g. 'PLA', 'PETG', 'ABS'
  color_name TEXT NOT NULL,
  color_hex TEXT NOT NULL,
  notes TEXT,            -- e.g. 'High strength recommended'
  --- meta
  created_by UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE product_filaments (
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  filament_id UUID NOT NULL REFERENCES filaments(id) ON DELETE CASCADE,
  --- meta
  created_by UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP WITH TIME ZONE,
  PRIMARY KEY (product_id, filament_id)
);


-- migrate:down
DROP TABLE IF EXISTS product_filaments;
DROP TABLE IF EXISTS filaments;

