#!/usr/bin/env python3
"""Build one idempotent monthly devotional import from reviewed Thai and Korean HTML files."""

from __future__ import annotations

import argparse
import calendar
from pathlib import Path

from prepare_monthly_devotional_html import build_sql, parse_entries


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("thai_html", type=Path)
    parser.add_argument("korean_html", type=Path)
    parser.add_argument("output_sql", type=Path)
    parser.add_argument("--year", type=int, required=True)
    parser.add_argument("--month", type=int, required=True)
    args = parser.parse_args()

    expected_days = calendar.monthrange(args.year, args.month)[1]
    thai_entries = parse_entries(args.thai_html, expected_days)
    korean_entries = parse_entries(args.korean_html, expected_days)
    thai_days = [entry[0] for entry in thai_entries]
    korean_days = [entry[0] for entry in korean_entries]
    if thai_days != korean_days:
        raise ValueError("Thai and Korean files do not contain the same dates")

    sql = build_sql(
        thai_entries,
        args.year,
        args.month,
        "th",
        create_resources=True,
    )
    sql += "\n" + build_sql(
        korean_entries,
        args.year,
        args.month,
        "ko",
    )
    args.output_sql.write_text(sql, encoding="utf-8")
    print(
        f"Prepared {len(thai_entries)} Thai and {len(korean_entries)} Korean devotionals: "
        f"{args.output_sql}"
    )


if __name__ == "__main__":
    main()
