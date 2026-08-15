#!/usr/bin/env python3
"""Extract the July Thai Gospel devotionals and prepare an idempotent D1 import."""

from __future__ import annotations

import re
import sqlite3
import sys
from pathlib import Path

import pdfplumber


PROJECT_DIR = Path(__file__).resolve().parents[1]
OUTPUT_SQL = PROJECT_DIR / "database" / "july-devotionals-2026.sql"


def join_visual_lines(lines: list[str]) -> str:
    # Thai layout engines may wrap at any character. Joining without adding a
    # space preserves genuine PDF spaces while avoiding false mid-word spaces.
    return "".join(line.strip() for line in lines).strip()


def page_content(page: pdfplumber.page.Page, expected_day: int) -> tuple[str, str]:
    lines = page.extract_text_lines(
        x_tolerance=10,
        y_tolerance=3,
        strip=True,
        return_chars=False,
    )
    if len(lines) < 5:
        raise ValueError(f"July {expected_day}: too few extracted lines")

    header = lines[0]["text"].strip()
    expected_header = f"บทใคร่ครวญพระกิตติคุณ {expected_day} กรกฎาคม"
    if header != expected_header:
        raise ValueError(f"July {expected_day}: unexpected header: {header!r}")

    title = lines[1]["text"].strip()
    content_lines = lines[2:]
    paragraphs: list[list[str]] = []
    current: list[str] = []
    previous_top: float | None = None

    for line in content_lines:
        top = float(line["top"])
        text = line["text"].strip()
        if not text:
            continue
        if text == "คำอธิษฐาน" or text.startswith("อธิษฐานในพระนามพระเยซูคริสต์"):
            if current:
                paragraphs.append(current)
                current = []
            paragraphs.append([text])
            previous_top = None
            continue
        if previous_top is not None and top - previous_top > 28 and current:
            paragraphs.append(current)
            current = []
        current.append(text)
        previous_top = top
    if current:
        paragraphs.append(current)

    body_paragraphs = [join_visual_lines(paragraph) for paragraph in paragraphs]
    body = "\n\n".join(body_paragraphs)
    return title, body


def validate(day: int, title: str, body: str) -> None:
    if not title or len(title) < 4:
        raise ValueError(f"July {day}: missing title")
    if len(body) < 900:
        raise ValueError(f"July {day}: body suspiciously short ({len(body)} chars)")
    if "คำอธิษฐาน" not in body or not body.endswith("อาเมน"):
        raise ValueError(f"July {day}: prayer section is incomplete")
    forbidden = ("\ufffd", "\x00", "(cid:", "พระอง ค์", "โปรดอ ภัย", "ขอใ ห้", "เ มื่อ")
    found = [value for value in forbidden if value in body or value in title]
    if found:
        raise ValueError(f"July {day}: broken text found: {found}")
    if re.search(r"[ก-๙]\s+[่้๊๋์็ัิีึืุู]\b", body):
        raise ValueError(f"July {day}: Thai combining mark separated by whitespace")


def quote(value: str) -> str:
    return "'" + value.replace("'", "''") + "'"


def build_sql(entries: list[tuple[int, str, str]]) -> str:
    statements = [
        "-- Generated from the reviewed Thai July devotional PDF.",
        "PRAGMA foreign_keys = ON;",
    ]
    for day, title, body in entries:
        date = f"2026-07-{day:02d}"
        slug = f"gospel-devotional-{date}"
        statements.extend(
            [
                "INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)",
                f"VALUES ('devotional', {quote(slug)}, 'published', {quote(date)}, 1, 'thaigodpleasing@naver.com', {quote(date + 'T00:00:00.000Z')}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)",
                "ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;",
                "INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)",
                f"SELECT id, 'th', {quote(title)}, '', {quote(body)}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = {quote(slug)}",
                "ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;",
            ]
        )
    return "\n".join(statements) + "\n"


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: prepare_july_devotionals.py INPUT.pdf", file=sys.stderr)
        return 2
    pdf_path = Path(sys.argv[1])
    entries: list[tuple[int, str, str]] = []
    with pdfplumber.open(pdf_path) as pdf:
        if len(pdf.pages) != 32:
            raise ValueError(f"Expected 32 pages, found {len(pdf.pages)}")
        for day, page in enumerate(pdf.pages[1:], start=1):
            title, body = page_content(page, day)
            validate(day, title, body)
            entries.append((day, title, body))

    OUTPUT_SQL.write_text(build_sql(entries), encoding="utf-8")
    print(f"Prepared {len(entries)} devotionals: {OUTPUT_SQL}")
    for day, title, body in entries:
        print(f"{day:02d}\t{title}\t{len(body)} chars\t{body.count(chr(10) + chr(10)) + 1} paragraphs")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
