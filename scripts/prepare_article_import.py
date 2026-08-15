from pathlib import Path
from docx import Document


SOURCE_DIR = Path(
    "/Users/udmission/Documents/@전자책출판_최용진/"
    "*하나님의 영광을 바라보는 선교사 책"
)
OUTPUT = Path("database/article-import-2026-07-21.sql")
AUTHOR = "thaigodpleasing@naver.com"

ARTICLES = [
    (
        "article-what-is-the-gospel",
        "1_ข่าวประเสริฐคืออะไร_ฉบับภาษาไทยสำหรับคนไทย.docx",
        "1_복음이란_무엇인가_한국어_.docx",
    ),
    (
        "article-justification-and-regeneration",
        "3_การทรงนับว่าเป็นผู้ชอบธรรมและการบังเกิดใหม่.docx",
        "3_칭의와_거듭남_한국어.docx",
    ),
    (
        "article-what-is-reformed-faith",
        "5_ความเชื่อปฏิรูปคืออะไร.docx",
        "5_개혁신앙이란_무엇인가_한국어.docx",
    ),
    (
        "article-sanctification-and-mortification",
        "6_การชำระให้บริสุทธิ์และการประหารบาป.docx",
        "6_성화와_죄죽임_한국어_개정본.docx",
    ),
    (
        "article-mission-and-missionary",
        "7_พันธกิจและมิชชันนารี_ฉบับภาษาไทย.docx",
        "7_선교와_선교사_한국어_개정증보판.docx",
    ),
]

OVERRIDES = {
    "3_การทรงนับว่าเป็นผู้ชอบธรรมและการบังเกิดใหม่.docx": (
        "การทรงนับว่าเป็นผู้ชอบธรรมและการบังเกิดใหม่",
        "เข้าใจข่าวประเสริฐแห่งพระคุณ และถวายพระสิริทั้งสิ้นแด่พระเจ้า",
        4,
    ),
    "7_พันธกิจและมิชชันนารี_ฉบับภาษาไทย.docx": (
        "พันธกิจและมิชชันนารี",
        "ภารกิจข่าวประเสริฐที่คริสตจักรและผู้เชื่อทุกคนมีส่วนร่วม",
        3,
    ),
}


def sql(value: str) -> str:
    return "'" + value.replace("'", "''") + "'"


def read_doc(name: str) -> tuple[str, str, str]:
    paragraphs = [p.text.strip() for p in Document(SOURCE_DIR / name).paragraphs if p.text.strip()]
    if len(paragraphs) < 3:
        raise ValueError(f"Not enough text in {name}")
    if name in OVERRIDES:
        title, summary, body_start = OVERRIDES[name]
        return title, summary, "\n\n".join(paragraphs[body_start:])
    return paragraphs[0], paragraphs[1], "\n\n".join(paragraphs[2:])


statements = [
    "PRAGMA foreign_keys = ON;",
    "UPDATE users SET display_name = '최용진 (아짠 댄)', updated_at = CURRENT_TIMESTAMP "
    f"WHERE email = {sql(AUTHOR)};",
]

for slug, th_name, ko_name in ARTICLES:
    th_title, th_summary, th_body = read_doc(th_name)
    ko_title, ko_summary, ko_body = read_doc(ko_name)
    statements.extend(
        [
            "INSERT INTO resources (type, slug, status, audience, difficulty, author_email, published_at, created_at, updated_at) "
            f"VALUES ('article', {sql(slug)}, 'published', 'all', 'beginner', {sql(AUTHOR)}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) "
            "ON CONFLICT(slug) DO UPDATE SET status = 'published', author_email = excluded.author_email, "
            "published_at = COALESCE(resources.published_at, CURRENT_TIMESTAMP), updated_at = CURRENT_TIMESTAMP;",
            "INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at) "
            f"SELECT id, 'th', {sql(th_title)}, {sql(th_summary)}, {sql(th_body)}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP "
            f"FROM resources WHERE slug = {sql(slug)} "
            "ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, "
            "body = excluded.body, updated_at = CURRENT_TIMESTAMP;",
            "INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at) "
            f"SELECT id, 'ko', {sql(ko_title)}, {sql(ko_summary)}, {sql(ko_body)}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP "
            f"FROM resources WHERE slug = {sql(slug)} "
            "ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, "
            "body = excluded.body, updated_at = CURRENT_TIMESTAMP;",
        ]
    )

OUTPUT.write_text("\n\n".join(statements) + "\n", encoding="utf-8")
print(f"Prepared {len(ARTICLES)} paired articles in {OUTPUT}")
