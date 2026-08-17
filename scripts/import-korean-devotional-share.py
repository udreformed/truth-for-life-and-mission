#!/usr/bin/env python3
"""Import the Korean devotional share text from the twelve monthly HTML files."""

from __future__ import annotations

import html
import json
import re
import sys
import unicodedata
from pathlib import Path


SECTION_RE = re.compile(r"<section\b(?=[^>]*\bid=['\"]day\d+['\"])[^>]*>(.*?)</section>", re.S | re.I)
DATE_RE = re.compile(r"<div\s+class=['\"]date['\"]>(.*?)</div>", re.S | re.I)
TITLE_RE = re.compile(r"<h2>(.*?)</h2>", re.S | re.I)
QUOTE_RE = re.compile(r"<div\s+class=['\"]quote['\"]>(.*?)</div>", re.S | re.I)
PRAYER_RE = re.compile(r"<div\s+class=['\"]prayer-title['\"]>(.*?)</div>", re.S | re.I)
PARAGRAPH_RE = re.compile(r"<p(?:\s+class=['\"][^'\"]*['\"])?>(.*?)</p>", re.S | re.I)
TAG_RE = re.compile(r"<[^>]+>")


def text(value: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(TAG_RE.sub("", value))).strip()


def parse_section(section: str) -> tuple[str, dict[str, str]]:
    date_match = DATE_RE.search(section)
    title_match = TITLE_RE.search(section)
    quote_match = QUOTE_RE.search(section)
    prayer_match = PRAYER_RE.search(section)
    alternate_format = not date_match
    if alternate_format:
        date_match = re.search(r"<h2>\s*복음묵상\s*(\d{1,2}월\s*\d{1,2}일)\s*</h2>", section, re.S | re.I)
        title_match = re.search(r"<h3>(.*?)</h3>", section, re.S | re.I)
        quote_en = re.search(r"<div\s+class=['\"]quote-en['\"]>(.*?)</div>", section, re.S | re.I)
        quote_ko = re.search(r"<div\s+class=['\"]quote-ko['\"]>(.*?)</div>", section, re.S | re.I)
        prayer_match = re.search(r"<h4>\s*기도\s*</h4>", section, re.S | re.I)
        if quote_en and quote_ko:
            quote_match = quote_en
    if not all((date_match, title_match, quote_match, prayer_match)):
        raise ValueError("section is missing date, title, quotation, or prayer")

    date_label = text(date_match.group(1))
    date_parts = re.fullmatch(r"(\d{1,2})월\s*(\d{1,2})일", date_label)
    if not date_parts:
        raise ValueError(f"invalid date: {date_label}")
    month, day = map(int, date_parts.groups())
    key = f"{month:02d}-{day:02d}"

    before_quote = section[: quote_match.start()]
    body_paragraphs = [text(value) for value in PARAGRAPH_RE.findall(before_quote)]
    if alternate_format:
        quote_paragraphs = [text(quote_en.group(1)), text(quote_ko.group(1))]
    else:
        quote_paragraphs = [text(value) for value in PARAGRAPH_RE.findall(quote_match.group(1))]
    after_prayer = section[prayer_match.end() :]
    prayer_paragraphs = [text(value) for value in PARAGRAPH_RE.findall(after_prayer)]
    if not body_paragraphs or len(quote_paragraphs) < 2 or not prayer_paragraphs:
        raise ValueError(f"incomplete content for {date_label}")

    paragraphs = [*body_paragraphs, *quote_paragraphs, "[기도]", *prayer_paragraphs]
    return key, {"title": text(title_match.group(1)), "body": "\n\n".join(paragraphs)}


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("usage: import-korean-devotional-share.py SOURCE_ROOT OUTPUT_JSON")
    source_root = Path(sys.argv[1])
    output_path = Path(sys.argv[2])
    files = sorted(source_root.rglob("*한국어_인용문포함.html"), key=lambda path: unicodedata.normalize("NFC", str(path)))
    if len(files) != 12:
        raise SystemExit(f"expected 12 monthly files, found {len(files)}")

    records: dict[str, dict[str, str]] = {}
    for source_path in files:
        source = source_path.read_text(encoding="utf-8")
        for raw_section in SECTION_RE.findall(source):
            key, record = parse_section(raw_section)
            if key in records:
                raise ValueError(f"duplicate date: {key}")
            records[key] = record

    if len(records) != 366:
        raise SystemExit(f"expected 366 calendar records including leap day, found {len(records)}")
    if "02-29" not in records:
        raise SystemExit("February 29 record is missing")

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(dict(sorted(records.items())), ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Imported {len(records)} records from {len(files)} files into {output_path}")


if __name__ == "__main__":
    main()
