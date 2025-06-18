-- Clear previous data
DELETE FROM product_filaments;
DELETE FROM filaments;
DELETE FROM order_items;
DELETE FROM orders;
DELETE FROM product_media;
DELETE FROM products;
DELETE FROM users;

-- USERS
INSERT INTO users (id, email, password_hash, is_admin)
VALUES
  ('11111111-1111-1111-1111-111111111111', 'admin@printaid.com', '$2b$10$exampleadminhash', true),
  ('22222222-2222-2222-2222-222222222222', 'user@printaid.com', '$2b$10$exampleuserhash', false);

-- PRODUCTS
INSERT INTO products (
  id, title, description, category, material, license_type, license_url,
  creator_name, creator_profile_url, source_platform, source_url,
  commercial_use_allowed, remix_allowed, attribution_required, created_by
)
VALUES
  (
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    '3D Phone Stand',
    'A sturdy phone stand for any desk.',
    'Gadget',
    'PLA',
    'CC-BY',
    'https://creativecommons.org/licenses/by/4.0/',
    'Jane Doe',
    'https://printables.com/@janedoe',
    'Printables',
    'https://printables.com/model/12345',
    true, true, true,
    '11111111-1111-1111-1111-111111111111'
  ),
  (
    'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
    'Cable Organizer',
    'Organize your cables under the desk.',
    'Office',
    'PETG',
    'CC0',
    NULL,
    'John Smith',
    'https://thingiverse.com/@johnsmith',
    'Thingiverse',
    'https://thingiverse.com/thing:67890',
    true, false, false,
    '11111111-1111-1111-1111-111111111111'
  );

-- MEDIA
INSERT INTO product_media (id, product_id, media_type, file_path, thumbnail_path, created_by)
VALUES
  ('aaaaaaaa-1111-aaaa-1111-aaaaaaaaaaaa', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'image', 'uploads/phone-stand.jpg', 'uploads/thumbs/phone-stand-thumb.jpg', '11111111-1111-1111-1111-111111111111'),
  ('bbbbbbbb-2222-bbbb-2222-bbbbbbbbbbbb', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'image', 'uploads/cable-organizer.jpg', 'uploads/thumbs/cable-organizer-thumb.jpg', '11111111-1111-1111-1111-111111111111');

-- FILAMENTS
INSERT INTO filaments (id, material, color_name, color_hex, notes, created_by)
VALUES
  ('f1111111-aaaa-bbbb-cccc-000000000001', 'PLA', 'Red', '#FF0000', 'Standard red PLA', '11111111-1111-1111-1111-111111111111'),
  ('f2222222-bbbb-cccc-dddd-000000000002', 'PETG', 'Black', '#000000', 'High durability PETG', '11111111-1111-1111-1111-111111111111');

-- PRODUCT–FILAMENT RELATION
INSERT INTO product_filaments (product_id, filament_id, created_by)
VALUES
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'f1111111-aaaa-bbbb-cccc-000000000001', '11111111-1111-1111-1111-111111111111'),
  ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'f2222222-bbbb-cccc-dddd-000000000002', '11111111-1111-1111-1111-111111111111');

-- ORDERS
INSERT INTO orders (id, user_id, status, notes, created_by)
VALUES
  ('dddddddd-dddd-dddd-dddd-dddddddddddd', '22222222-2222-2222-2222-222222222222', 'requested', 'Please print in red.', '22222222-2222-2222-2222-222222222222');

-- ORDER ITEMS
INSERT INTO order_items (id, order_id, product_id, scale, quantity, created_by)
VALUES
  ('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', 'dddddddd-dddd-dddd-dddd-dddddddddddd', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 100.00, 1, '22222222-2222-2222-2222-222222222222');

