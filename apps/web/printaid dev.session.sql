SELECT 
  p.*,
  (
    SELECT jsonb_agg(
      jsonb_build_object(
        'id', pm.id,
        'media_type', pm.media_type,
        'file_path', pm.file_path,
        'thumbnail_path', pm.thumbnail_path,
        'created_by', pm.created_by,
        'created_at', pm.created_at,
        'updated_at', pm.updated_at,
        'deleted_at', pm.deleted_at
      )
    )
    FROM product_media pm
    WHERE pm.product_id = p.id AND pm.deleted_at IS NULL
  ) AS media
FROM products p
WHERE p.deleted_at IS NULL;