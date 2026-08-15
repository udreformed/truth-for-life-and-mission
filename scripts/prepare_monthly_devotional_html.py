#!/usr/bin/env python3
"""Prepare exact monthly devotional translations from a reviewed HTML file."""

from __future__ import annotations

import argparse
import calendar
import re
from pathlib import Path

from lxml import html


def quote(value: str) -> str:
    return "'" + value.replace("'", "''") + "'"


def clean_block(value: str) -> str:
    return re.sub(r"[ \t\r\f\v]+", " ", value).strip()


def clean_title(value: str) -> str:
    value = clean_block(value)
    value = re.sub(r"^복음묵상\s+\d{1,2}월\s+\d{1,2}일\s+", "", value)
    return value.strip()


def parse_entries(input_path: Path, expected_days: int) -> list[tuple[int, str, str]]:
    document = html.fromstring(input_path.read_text(encoding="utf-8"))
    entries: list[tuple[int, str, str]] = []
    for section in document.xpath(
        "//section[contains(concat(' ', normalize-space(@class), ' '), ' day ')]"
    ):
        match = re.fullmatch(r"(?:day|d)(\d{1,2})", section.get("id", ""))
        if not match:
            continue
        day = int(match.group(1))
        content_nodes = section.xpath(
            ".//div[contains(concat(' ', normalize-space(@class), ' '), ' copy-content ')]"
        )
        content = content_nodes[0] if content_nodes else section
        title_nodes = content.xpath("./h3 | ./h2")
        if not title_nodes:
            raise ValueError(f"Missing title for day {day}")
        title = clean_title(title_nodes[0].text_content())
        blocks: list[str] = []
        for element in content:
            if element.tag in {"h2", "h3", "hr"}:
                continue
            if element.tag == "button":
                continue
            if element.tag not in {"p", "h4", "div"}:
                continue
            classes = set((element.get("class") or "").split())
            if classes & {"quote", "spacer"}:
                continue
            if "copytext" in classes or (element.get("id") or "").startswith("copy"):
                continue
            text = clean_block(element.text_content())
            if text:
                blocks.append(text)
        body = "\n\n".join(blocks)
        if not title or len(body) < 100:
            raise ValueError(f"Incomplete content for day {day}")
        entries.append((day, title, body))
    entries.sort()
    if [day for day, _, _ in entries] != list(range(1, expected_days + 1)):
        raise ValueError(f"Expected complete entries for days 1-{expected_days}")
    return entries


def build_sql(
    entries: list[tuple[int, str, str]],
    year: int,
    month: int,
    language: str,
    create_resources: bool = False,
) -> str:
    lines = [
        "-- Generated from the reviewed monthly devotional HTML.",
        "PRAGMA foreign_keys = ON;",
    ]
    for day, title, body in entries:
        date = f"{year:04d}-{month:02d}-{day:02d}"
        slug = f"gospel-devotional-{year:04d}-{month:02d}-{day:02d}"
        if create_resources:
            lines.extend(
                [
                    "INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)",
                    f"VALUES ('devotional', {quote(slug)}, 'published', {quote(date)}, 1, "
                    f"'thaigodpleasing@naver.com', {quote(date + 'T00:00:00.000Z')}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)",
                    "ON CONFLICT(slug) DO UPDATE SET status = 'published', "
                    "content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;",
                ]
            )
        lines.extend(
            [
                "INSERT INTO resource_translations "
                "(resource_id, language, title, summary, body, created_at, updated_at)",
                f"SELECT id, {quote(language)}, {quote(title)}, '', {quote(body)}, "
                f"CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = {quote(slug)}",
                "ON CONFLICT(resource_id, language) DO UPDATE SET "
                "title = excluded.title, summary = excluded.summary, "
                "body = excluded.body, updated_at = CURRENT_TIMESTAMP;",
            ]
        )
    return "\n".join(lines) + "\n"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("input_html", type=Path)
    parser.add_argument("output_sql", type=Path)
    parser.add_argument("--year", type=int, required=True)
    parser.add_argument("--month", type=int, required=True)
    parser.add_argument("--language", choices=("th", "ko"), required=True)
    parser.add_argument(
        "--create-resources",
        action="store_true",
        help="Create or update the dated devotional resource rows before adding this translation.",
    )
    args = parser.parse_args()
    expected_days = calendar.monthrange(args.year, args.month)[1]
    entries = parse_entries(args.input_html, expected_days)
    args.output_sql.write_text(
        build_sql(
            entries,
            args.year,
            args.month,
            args.language,
            create_resources=args.create_resources,
        ),
        encoding="utf-8",
    )
    print(f"Prepared {len(entries)} exact {args.language} devotionals: {args.output_sql}")


if __name__ == "__main__":
    main()
