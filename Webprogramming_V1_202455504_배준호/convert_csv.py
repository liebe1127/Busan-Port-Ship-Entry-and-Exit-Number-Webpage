# CSV(cp949) -> JSON converter for ship traffic data.
# Run: py convert_csv.py

import csv
import glob
import json
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(BASE_DIR, "data")
OUT_PATH = os.path.join(OUT_DIR, "ship_traffic.json")

DOMESTIC = "\uad6d\uc801"
FOREIGN = "\uc678\uad6d"
TOTAL_LABEL = "\ud569\uacc4"


def to_int(value):
    if value is None:
        return 0
    value = value.strip().replace(",", "")
    if not value or value == "-":
        return 0
    try:
        return int(float(value))
    except ValueError:
        return 0


def to_float(value):
    if value is None:
        return 0.0
    value = value.strip().replace(",", "")
    if not value or value == "-":
        return 0.0
    try:
        return round(float(value), 2)
    except ValueError:
        return 0.0


def find_csv():
    pattern = os.path.join(BASE_DIR, "*20260604213356.csv")
    matches = glob.glob(pattern)
    if not matches:
        raise FileNotFoundError("CSV file not found: " + pattern)
    return matches[0]


def main():
    csv_path = find_csv()
    with open(csv_path, encoding="cp949") as f:
        rows = list(csv.reader(f))

    body = rows[3:]
    ships = []
    current = None

    for row in body:
        if not row or all(c.strip() == "" for c in row):
            continue
        row = row + [""] * (14 - len(row))

        ship_type = row[0].strip()
        inout = row[1].strip()

        rec = {
            "count2025": to_int(row[4]),
            "count2026": to_int(row[8]),
            "tonnage2026": to_int(row[9]),
            "change": to_float(row[12]),
        }

        if ship_type:
            current = {
                "type": ship_type,
                "total": rec,
                "domestic": {},
                "foreign": {},
            }
            ships.append(current)
        elif current is not None:
            if DOMESTIC in inout:
                current["domestic"] = rec
            elif FOREIGN in inout:
                current["foreign"] = rec

    total_row = next((s for s in ships if s["type"] == TOTAL_LABEL), None)
    ship_list = [s for s in ships if s["type"] != TOTAL_LABEL]
    ship_list.sort(key=lambda s: s["total"]["count2026"], reverse=True)

    result = {
        "meta": {
            "title": "\uc120\ubc15 \uc885\ub958\ubcc4 \uc785\ucd9c\ud56d \ucd94\uc774",
            "source": "\uacf5\uacf5\ub370\uc774\ud130 - \uc120\ubc15\uc785\ucd9c\ud56d \uc804\ub144\ub300\ube44 \uc120\uc885\ubcc4 \ucd94\uc774",
            "period": "2025 vs 2026 (1~4\uc6d4 \ub204\uc801)",
            "unit": {"count": "\ucc99", "tonnage": "\ud1a4"},
            "total": total_row,
        },
        "ships": ship_list,
    }

    os.makedirs(OUT_DIR, exist_ok=True)
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    print("OK:", OUT_PATH)
    print("ships:", len(ship_list))


if __name__ == "__main__":
    main()
