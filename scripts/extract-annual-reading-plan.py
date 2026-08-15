#!/usr/bin/env python3
import json
import re
import sys
import zipfile
from calendar import monthrange
from datetime import date
from pathlib import Path

from lxml import etree


def cell_text(cell, ns):
    return "".join(cell.xpath(".//w:t/text()", namespaces=ns)).replace("\u00a0", " ").strip()


def normalize_passage(raw, current_book):
    text = re.sub(r"\s+", "", raw)
    if not text:
        return "", current_book
    match = re.match(r"^([가-힣]+)(.*)$", text)
    if match:
        current_book = match.group(1)
        chapters = match.group(2)
    else:
        chapters = text
    return f"{current_book} {chapters}".strip(), current_book


def extract(docx_path):
    with zipfile.ZipFile(docx_path) as archive:
        root = etree.fromstring(archive.read("word/document.xml"))
    ns = root.nsmap
    tables = root.xpath(".//wps:txbx//w:tbl", namespaces=ns)
    records = []
    year = 2026
    for table_index, table in enumerate(tables):
        rows = table.xpath("./w:tr", namespaces=ns)
        month_names = [cell_text(cell, ns) for cell in rows[0].xpath("./w:tc", namespaces=ns) if cell_text(cell, ns)]
        data_cells = rows[2].xpath("./w:tc", namespaces=ns)
        starts = [index for index, cell in enumerate(data_cells) if cell_text(cell, ns) == "1"]
        for offset, start in enumerate(starts):
            month = table_index * 6 + offset + 1
            current_old = ""
            current_new = ""
            expected_days = monthrange(year, month)[1]
            for row in rows[2:]:
                cells = row.xpath("./w:tc", namespaces=ns)
                if start + 2 >= len(cells):
                    continue
                day_text = cell_text(cells[start], ns)
                if not day_text.isdigit():
                    continue
                day = int(day_text)
                if day > expected_days:
                    continue
                old_text, current_old = normalize_passage(cell_text(cells[start + 1], ns), current_old)
                new_text, current_new = normalize_passage(cell_text(cells[start + 2], ns), current_new)
                records.append({
                    "dayOfYear": date(year, month, day).timetuple().tm_yday,
                    "month": month,
                    "day": day,
                    "oldTestament": old_text,
                    "newTestament": new_text,
                })
    records.sort(key=lambda item: item["dayOfYear"])
    return records


if __name__ == "__main__":
    source = Path(sys.argv[1])
    target = Path(sys.argv[2])
    data = extract(source)
    target.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({"records": len(data), "first": data[:3], "last": data[-3:]}, ensure_ascii=False, indent=2))
