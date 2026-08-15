CREATE TABLE IF NOT EXISTS external_devotional_cache (
  source TEXT NOT NULL,
  content_date TEXT NOT NULL,
  source_url TEXT NOT NULL,
  title_en TEXT NOT NULL,
  excerpt_en TEXT NOT NULL DEFAULT '',
  summary_en TEXT NOT NULL,
  title_th TEXT NOT NULL,
  summary_th TEXT NOT NULL,
  title_ko TEXT NOT NULL,
  summary_ko TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (source, content_date)
);

CREATE INDEX IF NOT EXISTS external_devotional_cache_date_idx
  ON external_devotional_cache(content_date);
