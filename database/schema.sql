PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS users (
  email TEXT PRIMARY KEY COLLATE NOCASE,
  display_name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'author' CHECK (role IN ('admin', 'author')),
  active INTEGER NOT NULL DEFAULT 1 CHECK (active IN (0, 1)),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS resources (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT NOT NULL CHECK (
    type IN ('article', 'book', 'video', 'pdf', 'course', 'devotional', 'sermon', 'sunday_school')
  ),
  slug TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  featured_image_key TEXT,
  pdf_key TEXT,
  youtube_url TEXT,
  content_date TEXT,
  series_slot INTEGER CHECK (series_slot IS NULL OR series_slot BETWEEN 1 AND 3),
  audience TEXT,
  difficulty TEXT CHECK (difficulty IS NULL OR difficulty IN ('beginner', 'intermediate', 'advanced')),
  author_email TEXT NOT NULL COLLATE NOCASE,
  published_at TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (author_email) REFERENCES users(email)
);

CREATE TABLE IF NOT EXISTS resource_translations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  resource_id INTEGER NOT NULL,
  language TEXT NOT NULL CHECK (language IN ('th', 'ko', 'en')),
  title TEXT NOT NULL,
  summary TEXT NOT NULL DEFAULT '',
  body TEXT NOT NULL DEFAULT '',
  seo_title TEXT,
  seo_description TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (resource_id, language),
  FOREIGN KEY (resource_id) REFERENCES resources(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  name_th TEXT NOT NULL,
  name_ko TEXT,
  name_en TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  active INTEGER NOT NULL DEFAULT 1 CHECK (active IN (0, 1))
);

CREATE TABLE IF NOT EXISTS resource_categories (
  resource_id INTEGER NOT NULL,
  category_id INTEGER NOT NULL,
  PRIMARY KEY (resource_id, category_id),
  FOREIGN KEY (resource_id) REFERENCES resources(id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  name_th TEXT NOT NULL,
  name_ko TEXT,
  name_en TEXT
);

CREATE TABLE IF NOT EXISTS resource_tags (
  resource_id INTEGER NOT NULL,
  tag_id INTEGER NOT NULL,
  PRIMARY KEY (resource_id, tag_id),
  FOREIGN KEY (resource_id) REFERENCES resources(id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS bible_references (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  resource_id INTEGER NOT NULL,
  book TEXT NOT NULL,
  chapter_start INTEGER NOT NULL,
  verse_start INTEGER,
  chapter_end INTEGER,
  verse_end INTEGER,
  sort_order INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (resource_id) REFERENCES resources(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS related_resources (
  resource_id INTEGER NOT NULL,
  related_resource_id INTEGER NOT NULL,
  relationship TEXT NOT NULL DEFAULT 'related',
  sort_order INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (resource_id, related_resource_id),
  CHECK (resource_id <> related_resource_id),
  FOREIGN KEY (resource_id) REFERENCES resources(id) ON DELETE CASCADE,
  FOREIGN KEY (related_resource_id) REFERENCES resources(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS ai_daily_usage (
  usage_date TEXT PRIMARY KEY,
  request_count INTEGER NOT NULL DEFAULT 0
);

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

CREATE INDEX IF NOT EXISTS resources_status_published_idx
  ON resources(status, published_at DESC);
CREATE INDEX IF NOT EXISTS resources_type_status_idx
  ON resources(type, status);
CREATE INDEX IF NOT EXISTS resources_author_idx
  ON resources(author_email);
CREATE INDEX IF NOT EXISTS resources_daily_idx
  ON resources(type, content_date, series_slot, status);
CREATE INDEX IF NOT EXISTS translations_language_title_idx
  ON resource_translations(language, title);
CREATE INDEX IF NOT EXISTS external_devotional_cache_date_idx
  ON external_devotional_cache(content_date);

INSERT OR IGNORE INTO categories (slug, name_th, name_ko, name_en, sort_order) VALUES
  ('bible', 'พระคัมภีร์', '성경', 'Bible', 10),
  ('doctrine', 'หลักคำสอน', '교리', 'Doctrine', 20),
  ('christian-living', 'ชีวิตคริสเตียน', '그리스도인의 삶', 'Christian Living', 30),
  ('mission', 'พันธกิจ', '선교', 'Mission', 40),
  ('church', 'คริสตจักร', '교회', 'Church', 50),
  ('children', 'เด็ก', '어린이', 'Children', 60),
  ('books', 'หนังสือ', '도서', 'Books', 70),
  ('videos', 'วิดีโอ', '영상', 'Videos', 80),
  ('courses', 'หลักสูตร', '강좌', 'Courses', 90),
  ('devotionals', 'เฝ้าเดี่ยว', '묵상', 'Devotionals', 100);

-- The single administrator allowed by Cloudflare Access.
INSERT OR IGNORE INTO users (email, display_name, role) VALUES
  ('thaigodpleasing@naver.com', 'Yongjin Choi', 'admin');

INSERT OR IGNORE INTO resources (
  type, slug, status, youtube_url, audience, difficulty, author_email, published_at
) VALUES
  ('article', 'what-is-the-gospel', 'published', NULL, 'all', 'beginner', 'thaigodpleasing@naver.com', CURRENT_TIMESTAMP),
  ('course', 'reading-romans', 'published', NULL, 'new believers', 'beginner', 'thaigodpleasing@naver.com', CURRENT_TIMESTAMP);

INSERT OR IGNORE INTO resource_translations (resource_id, language, title, summary, body)
SELECT id, 'th', 'ข่าวประเสริฐคืออะไร?',
  'สำรวจข่าวดีเรื่องพระเยซูคริสต์ผ่านความบริสุทธิ์ของพระเจ้า ความบาปของมนุษย์ ไม้กางเขน และชีวิตใหม่',
  'ข่าวประเสริฐคือข่าวดีที่พระเจ้าทรงช่วยคนบาปให้คืนดีกับพระองค์โดยพระคุณ ผ่านความเชื่อในพระเยซูคริสต์'
FROM resources WHERE slug = 'what-is-the-gospel';

INSERT OR IGNORE INTO resource_translations (resource_id, language, title, summary, body)
SELECT id, 'ko', '복음이란 무엇인가?',
  '하나님의 거룩하심, 인간의 죄, 십자가와 새 생명을 통해 복음의 핵심을 살펴봅니다.',
  '복음은 예수 그리스도를 믿음으로 죄인이 은혜로 하나님과 화목하게 된다는 기쁜 소식입니다.'
FROM resources WHERE slug = 'what-is-the-gospel';

INSERT OR IGNORE INTO resource_translations (resource_id, language, title, summary, body)
SELECT id, 'en', 'What is the Gospel?',
  'Explore the good news of Jesus Christ through God''s holiness, human sin, the cross, and new life.',
  'The Gospel is the good news that God reconciles sinners to himself by grace through faith in Jesus Christ.'
FROM resources WHERE slug = 'what-is-the-gospel';

INSERT OR IGNORE INTO resource_translations (resource_id, language, title, summary, body)
SELECT id, 'th', 'เริ่มต้นอ่านพระธรรมโรม',
  'เส้นทางการเรียนรู้สำหรับผู้ที่ต้องการเข้าใจความชอบธรรมโดยความเชื่ออย่างเป็นขั้นตอน',
  'หลักสูตรตัวอย่างนี้แสดงโครงสร้างสำหรับบทเรียนในอนาคต'
FROM resources WHERE slug = 'reading-romans';
