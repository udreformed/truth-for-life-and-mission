from __future__ import annotations

import hashlib
import json
import re
import textwrap
import time
import tomllib
import urllib.error
import urllib.request
from pathlib import Path

PROJECT = Path(__file__).resolve().parents[1]
TMP = PROJECT / "tmp" / "gods-way-of-peace"
SOURCE_PDF_TEXT = PROJECT / "tmp" / "gods-way-of-peace.txt"
ACCOUNT_ID = "6165021a2bc69aff4ea9e8e83aab0170"
MODEL = "@cf/meta/llama-3.1-8b-instruct-fp8"
API_URL = f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/{MODEL}"


CHAPTER_TITLES = [
    ("I", "God's Testimony Concerning Man"),
    ("II", "Man's Own Character, No Ground of Peace"),
    ("III", "God's Character, Our Resting Place"),
    ("IV", "Righteous Grace"),
    ("V", "The Blood of Sprinkling"),
    ("VI", "The Person and Work of the Substitute"),
    ("VII", "The Word of the Truth of the Gospel"),
    ("VIII", "Believe and Be Saved"),
    ("IX", "Believe Just Now"),
    ("X", "The Want of Power to Believe"),
    ("XI", "Insensibility"),
    ("XII", "Jesus Only"),
]

TITLE_TRANSLATIONS = {
    "ko": {
        "book": "평안에 이르는 하나님의 길",
        "subtitle": "불안한 영혼을 위한 복음의 위로",
        "author": "Horatius Bonar",
        "translator": "한국어 번역: 최용진",
        "source": "원문 출처: Monergism · God's Way of Peace",
        "toc": "목차",
        "chapters": [
            "사람에 대한 하나님의 증언",
            "사람 자신의 성품은 평안의 근거가 될 수 없습니다",
            "하나님의 성품, 우리의 안식처",
            "의로운 은혜",
            "뿌려진 피",
            "대속자의 인격과 사역",
            "복음 진리의 말씀",
            "믿고 구원을 받으십시오",
            "바로 지금 믿으십시오",
            "믿을 능력이 없다는 문제",
            "무감각",
            "오직 예수님",
        ],
    },
    "th": {
        "book": "ทางของพระเจ้าสู่สันติสุข",
        "subtitle": "ข่าวประเสริฐเพื่อจิตใจที่กระวนกระวาย",
        "author": "Horatius Bonar",
        "translator": "แปลภาษาไทย: Yongjin Choi",
        "source": "แหล่งต้นฉบับ: Monergism · God's Way of Peace",
        "toc": "สารบัญ",
        "chapters": [
            "คำพยานของพระเจ้าเกี่ยวกับมนุษย์",
            "ลักษณะของมนุษย์เองไม่ใช่รากฐานของสันติสุข",
            "พระลักษณะของพระเจ้า คือที่พักพิงของเรา",
            "พระคุณที่ชอบธรรม",
            "พระโลหิตที่ประพรม",
            "พระบุคคลและพระราชกิจของผู้แทน",
            "พระวจนะแห่งความจริงของข่าวประเสริฐ",
            "จงเชื่อและรับความรอด",
            "จงเชื่อในเวลานี้",
            "ปัญหาเรื่องการไม่มีฤทธิ์กำลังที่จะเชื่อ",
            "ความเฉยชาในจิตใจ",
            "พระเยซูเท่านั้น",
        ],
    },
}


def load_token() -> str:
    cfg = Path("/Users/udmission/Library/Preferences/.wrangler/config/default.toml")
    return tomllib.loads(cfg.read_text())["oauth_token"]


def normalize_text(text: str) -> str:
    text = re.sub(r"\n===== PAGE \d+ =====\n", "\n", text)
    text = text.replace("\ufb01", "fi").replace("\ufb02", "fl")
    text = re.sub(r"([A-Za-z])-+\n([a-z])", r"\1\2", text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def extract_chapters() -> list[str]:
    raw = normalize_text(SOURCE_PDF_TEXT.read_text())
    matches = list(re.finditer(r"Chapter\s+(?:I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII)\s+-\s+", raw))
    # The first twelve are the table of contents. Use the real chapter starts.
    real = matches[12:]
    chapters: list[str] = []
    for index, match in enumerate(real):
        end = real[index + 1].start() if index + 1 < len(real) else raw.find("Copyright ©Monergism Books", match.end())
        if end == -1:
            end = len(raw)
        chapter = raw[match.start():end].strip()
        # Normalize chapter heading line.
        chapter = re.sub(r"^(Chapter\s+(?:I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII)\s+-)\s*\n\s*", r"\1 ", chapter)
        paragraphs = []
        for para in re.split(r"\n\s*\n", chapter):
            para = re.sub(r"\n+", " ", para).strip()
            if para:
                paragraphs.append(para)
        chapters.append("\n\n".join(paragraphs))
    if len(chapters) != 12:
        raise RuntimeError(f"Expected 12 chapters, got {len(chapters)}")
    return chapters


def split_chunk(text: str, max_chars: int = 2600) -> list[str]:
    paragraphs = text.split("\n\n")
    chunks: list[str] = []
    current = ""
    for paragraph in paragraphs:
        if len(paragraph) > max_chars:
            if current:
                chunks.append(current)
                current = ""
            pieces = textwrap.wrap(paragraph, width=max_chars, break_long_words=False, replace_whitespace=False)
            chunks.extend(pieces)
            continue
        candidate = f"{current}\n\n{paragraph}".strip() if current else paragraph
        if len(candidate) > max_chars and current:
            chunks.append(current)
            current = paragraph
        else:
            current = candidate
    if current:
        chunks.append(current)
    return chunks


def call_ai(token: str, target: str, text: str, chapter_title: str) -> str:
    target_name = "Thai" if target == "th" else "Korean"
    if target == "th":
        system = (
            "Translate this public-domain Protestant Christian book excerpt into natural, warm, readable Thai. "
            "Use standard Protestant/Reformed terminology. Preserve paragraph breaks, Scripture references, and theological distinctions. "
            "Do not summarize, shorten, expand, explain, add headings, or mention translation. Return only the Thai text."
        )
    else:
        system = (
            "Translate this public-domain Protestant Christian book excerpt into natural, warm, readable Korean. "
            "Use standard Protestant/Reformed terminology. Translate God as 하나님, never 하느님. "
            "Preserve paragraph breaks, Scripture references, and theological distinctions. "
            "Do not summarize, shorten, expand, explain, add headings, or mention translation. Return only the Korean text."
        )
    payload = {
        "messages": [
            {"role": "system", "content": system},
            {"role": "user", "content": f"Chapter context: {chapter_title}\nTarget language: {target_name}\n\n{text}"},
        ],
        "max_tokens": 4200,
        "temperature": 0.05,
    }
    data = json.dumps(payload).encode()
    req = urllib.request.Request(
        API_URL,
        data=data,
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
    )
    for attempt in range(6):
        try:
            with urllib.request.urlopen(req, timeout=180) as response:
                result = json.loads(response.read())
            if not result.get("success"):
                raise RuntimeError(json.dumps(result)[:500])
            translated = (result.get("result") or {}).get("response", "").strip()
            if len(translated) < max(80, len(text) * (0.25 if target == "ko" else 0.2)):
                raise RuntimeError("Suspiciously short translation")
            return translated
        except (urllib.error.URLError, urllib.error.HTTPError, RuntimeError) as exc:
            if attempt == 5:
                raise
            if isinstance(exc, urllib.error.HTTPError) and exc.code == 429:
                wait = 45 + attempt * 20
            else:
                wait = 6 + attempt * 8
            print(f"retry {attempt + 1} after {wait}s: {exc}", flush=True)
            time.sleep(wait)
    raise RuntimeError("unreachable")


def translate_all(target: str) -> list[dict[str, str]]:
    TMP.mkdir(parents=True, exist_ok=True)
    token = load_token()
    chapters = extract_chapters()
    translated_chapters: list[dict[str, str]] = []
    for chapter_index, chapter in enumerate(chapters, start=1):
        chapter_title = TITLE_TRANSLATIONS[target]["chapters"][chapter_index - 1]
        chunks = split_chunk(chapter)
        translated_chunks: list[str] = []
        print(f"{target} chapter {chapter_index}/12: {chapter_title} ({len(chunks)} chunks)", flush=True)
        for chunk_index, chunk in enumerate(chunks, start=1):
            digest = hashlib.sha256(f"{target}\n{chapter_index}\n{chunk}".encode()).hexdigest()[:16]
            cache = TMP / f"{target}-{chapter_index:02d}-{chunk_index:02d}-{digest}.txt"
            if cache.exists():
                translated = cache.read_text()
            else:
                translated = call_ai(token, target, chunk, chapter_title)
                cache.write_text(translated)
                time.sleep(4.0)
            translated_chunks.append(translated)
            print(f"  chunk {chunk_index}/{len(chunks)} ok", flush=True)
        translated_chapters.append({
            "title": chapter_title,
            "body": "\n\n".join(translated_chunks).strip(),
        })
    out = TMP / f"gods-way-of-peace-{target}.json"
    out.write_text(json.dumps(translated_chapters, ensure_ascii=False, indent=2))
    print(f"wrote {out}", flush=True)
    return translated_chapters


if __name__ == "__main__":
    for language in ("ko", "th"):
        translate_all(language)
