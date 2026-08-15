from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image, ImageFilter
from pypdf import PdfReader, PdfWriter


def optimize(input_path: Path, output_path: Path) -> None:
    reader = PdfReader(input_path)
    writer = PdfWriter()
    writer.clone_document_from_reader(reader)

    total_images = 0
    for page_number, page in enumerate(writer.pages, start=1):
        for image_file in page.images:
            source = image_file.image
            width, height = source.size
            scale = 0.65 if page_number == 1 else 0.55
            resized = source.resize(
                (max(1, round(width * scale)), max(1, round(height * scale))),
                Image.Resampling.LANCZOS,
            )
            if page_number > 1:
                resized = resized.convert("L").filter(
                    ImageFilter.UnsharpMask(radius=0.6, percent=75, threshold=3)
                )
            if resized.mode not in ("RGB", "L"):
                resized = resized.convert("RGB")
            image_file.replace(
                resized,
                quality=80,
                optimize=True,
                resolution=140,
            )
            total_images += 1
        print(f"Optimized page {page_number}/{len(writer.pages)}", flush=True)

    writer.add_metadata(
        {
            "/Title": "From Buddha to Jesus - Thai Edition",
            "/Author": "Steve Cioccolanti",
            "/Subject": "Optimized web edition; source: REFORMATION / ThaiReformed",
            "/Creator": "Truth for Life and Mission",
        }
    )
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with output_path.open("wb") as output_file:
        writer.write(output_file)
    print(f"Wrote {output_path} with {total_images} optimized images", flush=True)


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("Usage: optimize_scanned_pdf.py INPUT.pdf OUTPUT.pdf")
    optimize(Path(sys.argv[1]), Path(sys.argv[2]))
