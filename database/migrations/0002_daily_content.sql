ALTER TABLE resources ADD COLUMN content_date TEXT;
ALTER TABLE resources ADD COLUMN series_slot INTEGER CHECK (series_slot IS NULL OR series_slot BETWEEN 1 AND 3);
CREATE INDEX IF NOT EXISTS resources_daily_idx ON resources(type, content_date, series_slot, status);
