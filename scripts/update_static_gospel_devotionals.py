#!/usr/bin/env python3
"""Replace one month of static gospel devotionals from reviewed HTML files.

Expected input pattern:
  - one Thai HTML file
  - one Korean HTML file
  - one English HTML file

Each file should contain per-day sections such as
<section class="day" id="day1"> or <section id='day1'>. The visible
devotional body is collected from paragraphs, subheadings, and prayer-title
blocks. Copy-helper blocks such as <div class="copytext"> are ignored.
"""

from __future__ import annotations

import argparse
import calendar
import html
import json
import re
from pathlib import Path


LANGUAGE_ORDER = ("en", "ko", "th")


def clean(value: str) -> str:
    value = re.sub(r"<br\s*/?>", "\n", value, flags=re.I)
    value = re.sub(r"<[^>]+>", "", value)
    value = html.unescape(value)
    value = re.sub(r"[ \t\r\f\v]+", " ", value)
    value = re.sub(r"\n\s+", "\n", value)
    return value.strip()


def parse_entries(input_path: Path, expected_days: int | None = None) -> list[tuple[int, str, str]]:
    text = input_path.read_text(encoding="utf-8")
    sections = re.findall(
        r"<section\b(?=[^>]*\bid\s*=\s*['\"](?:day|d)(\d{1,2})['\"])[^>]*>(.*?)</section>",
        text,
        flags=re.S | re.I,
    )
    entries: list[tuple[int, str, str]] = []
    for day_text, section in sections:
        day = int(day_text)
        title_match = re.search(r"<h3[^>]*>(.*?)</h3>", section, flags=re.S | re.I)
        if not title_match:
            title_match = re.search(r"<h2[^>]*>(.*?)</h2>", section, flags=re.S | re.I)
        if not title_match:
            raise ValueError(f"Missing day title for day {day} in {input_path}")
        title = clean(title_match.group(1))

        section = re.sub(r"<button\b.*?</button>", "", section, flags=re.S | re.I)
        section = re.sub(
            r"<div\b[^>]*(?:class\s*=\s*['\"][^'\"]*copytext[^'\"]*['\"]|id\s*=\s*['\"]copy[^'\"]*['\"])[^>]*>.*?</div>",
            "",
            section,
            flags=re.S | re.I,
        )

        blocks: list[str] = []
        for tag, attrs, block_html in re.findall(
            r"<(p|h4|div)\b([^>]*)>(.*?)</\1>", section, flags=re.S | re.I
        ):
            if tag.lower() == "div":
                class_match = re.search(r"class\s*=\s*['\"]([^'\"]*)['\"]", attrs, flags=re.I)
                classes = set(class_match.group(1).split()) if class_match else set()
                id_match = re.search(r"id\s*=\s*['\"]([^'\"]*)['\"]", attrs, flags=re.I)
                block_id = id_match.group(1) if id_match else ""
                if "date" in classes or "copytext" in classes or block_id.startswith("copy"):
                    continue
                if "prayer-title" not in classes:
                    continue
            block = clean(block_html)
            if block:
                blocks.append(block)

        body = "\n\n".join(blocks)
        if not title or len(body) < 100:
            raise ValueError(
                f"Incomplete content for day {day} in {input_path}: title={title!r}, body_len={len(body)}"
            )
        entries.append((day, title, body))

    entries.sort()
    expected = list(range(1, (expected_days or len(entries)) + 1))
    actual = [day for day, _, _ in entries]
    if actual != expected:
        raise ValueError(f"Expected days {expected}, found {actual} in {input_path}")
    return entries


def make_devotionals(
    year: int,
    month: int,
    entries_by_language: dict[str, list[tuple[int, str, str]]],
) -> list[dict[str, object]]:
    devotionals: list[dict[str, object]] = []
    day_numbers = [day for day, _, _ in entries_by_language[LANGUAGE_ORDER[0]]]
    for language in LANGUAGE_ORDER[1:]:
        language_day_numbers = [day for day, _, _ in entries_by_language[language]]
        if language_day_numbers != day_numbers:
            raise ValueError(
                f"Day list mismatch for {year:04d}-{month:02d}: "
                f"{LANGUAGE_ORDER[0]}={day_numbers}, {language}={language_day_numbers}"
            )

    for day in day_numbers:
        for language in LANGUAGE_ORDER:
            _, title, body = entries_by_language[language][day - 1]
            date = f"{year:04d}-{month:02d}-{day:02d}"
            devotionals.append(
                {
                    "slug": f"gospel-devotional-{date}",
                    "content_date": date,
                    "series_slot": 1,
                    "language": language,
                    "title": title,
                    "summary": "",
                    "body": body,
                }
            )
    return devotionals


def format_object(value: dict[str, object]) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2).replace("\n", "\n  ")


def replace_month(static_path: Path, year: int, month: int, devotionals: list[dict[str, object]]) -> int:
    text = static_path.read_text(encoding="utf-8")
    header = "export const staticGospelDevotionals = ["
    start = text.index(header)
    array_start = text.index("[", start)
    array_end = text.index("\n] as const;", array_start)
    body = text[array_start + 1 : array_end]
    month_prefix = f"{year:04d}-{month:02d}"

    object_matches = list(re.finditer(r"\n  \{.*?\n  \}(?=,?\n)", body, flags=re.S))
    kept: list[str] = []
    insert_at: int | None = None
    removed = 0

    for match in object_matches:
        object_text = match.group(0).strip().rstrip(",")
        if (
            f'"content_date": "{month_prefix}-' in object_text
            or f'"slug": "gospel-devotional-{month_prefix}-' in object_text
        ):
            if insert_at is None:
                insert_at = len(kept)
            removed += 1
            continue
        kept.append(object_text)

    if insert_at is None:
        insert_at = len(kept)
        for index, object_text in enumerate(kept):
            content_date_match = re.search(r'"content_date": "(\d{4}-\d{2})-', object_text)
            if content_date_match and content_date_match.group(1) > month_prefix:
                insert_at = index
                break

    new_objects = [format_object(item) for item in devotionals]
    combined = kept[:insert_at] + new_objects + kept[insert_at:]
    new_body = "\n  " + ",\n  ".join(combined) + "\n"
    static_path.write_text(text[: array_start + 1] + new_body + text[array_end:], encoding="utf-8")
    return removed


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--year", type=int, required=True)
    parser.add_argument("--month", type=int, required=True)
    parser.add_argument("--thai", type=Path, required=True)
    parser.add_argument("--korean", type=Path, required=True)
    parser.add_argument("--english", type=Path, required=True)
    parser.add_argument(
        "--static-file",
        type=Path,
        default=Path("src/lib/gospel-devotional-static.ts"),
    )
    args = parser.parse_args()

    entries_by_language = {
        "th": parse_entries(args.thai),
        "ko": parse_entries(args.korean),
        "en": parse_entries(args.english),
    }
    devotionals = make_devotionals(args.year, args.month, entries_by_language)
    removed = replace_month(args.static_file, args.year, args.month, devotionals)
    print(
        f"Updated {args.year:04d}-{args.month:02d}: removed {removed}, inserted {len(devotionals)} entries."
    )


if __name__ == "__main__":
    main()
