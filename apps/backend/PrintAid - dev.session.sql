-- SELECT id, title, description
-- FROM products
-- WHERE tsv @@ plainto_tsquery("english", "your search terms here")
-- ORDER BY ts_rank(tsv, plainto_tsquery("english", "your search terms here")) DESC;

SELECT id, title, description
FROM products
WHERE tsv @@ plainto_tsquery('english', 'grip')
ORDER BY ts_rank(tsv, plainto_tsquery('english', 'grip')) DESC;

-- SELECT id, title, description
-- FROM products
-- WHERE tsv @@ plainto_tsquery('simple', 'your search terms here')
-- ORDER BY ts_rank(tsv, plainto_tsquery('simple', 'your search terms here')) DESC;


--- 
-- SELECT cfgname FROM pg_ts_config;