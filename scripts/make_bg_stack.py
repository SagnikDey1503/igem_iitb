#!/usr/bin/env python3
"""
Stack multiple RGBA PNGs vertically into one PNG (no external deps).

This is used to create a single repeat-y background image that cycles
bg1 -> bg3 -> bg4 (then repeats) when used as CSS background.
"""

from __future__ import annotations

import binascii
import struct
import sys
import zlib
from dataclasses import dataclass
from pathlib import Path


PNG_SIG = b"\x89PNG\r\n\x1a\n"


@dataclass(frozen=True)
class PngImage:
    width: int
    height: int
    rows: list[bytes]  # raw RGBA rows (unfiltered), len == height


def _read_chunks(data: bytes):
    if not data.startswith(PNG_SIG):
        raise ValueError("Not a PNG file (bad signature).")
    pos = len(PNG_SIG)
    while pos + 8 <= len(data):
        (length,) = struct.unpack(">I", data[pos : pos + 4])
        ctype = data[pos + 4 : pos + 8]
        pos += 8
        chunk_data = data[pos : pos + length]
        pos += length
        crc = data[pos : pos + 4]
        pos += 4
        yield ctype, chunk_data, crc


def _paeth(a: int, b: int, c: int) -> int:
    p = a + b - c
    pa = abs(p - a)
    pb = abs(p - b)
    pc = abs(p - c)
    if pa <= pb and pa <= pc:
        return a
    if pb <= pc:
        return b
    return c


def _unfilter_rows(width: int, height: int, raw: bytes, bpp: int) -> list[bytes]:
    rowlen = width * bpp
    expected = height * (1 + rowlen)
    if len(raw) != expected:
        raise ValueError(f"Unexpected decompressed size: got {len(raw)} bytes, expected {expected}.")

    out: list[bytes] = []
    prev = bytearray(rowlen)
    i = 0
    for _ in range(height):
        f = raw[i]
        i += 1
        filt = raw[i : i + rowlen]
        i += rowlen

        cur = bytearray(rowlen)
        if f == 0:  # None
            cur[:] = filt
        elif f == 1:  # Sub
            for x in range(rowlen):
                left = cur[x - bpp] if x >= bpp else 0
                cur[x] = (filt[x] + left) & 0xFF
        elif f == 2:  # Up
            for x in range(rowlen):
                cur[x] = (filt[x] + prev[x]) & 0xFF
        elif f == 3:  # Average
            for x in range(rowlen):
                left = cur[x - bpp] if x >= bpp else 0
                up = prev[x]
                cur[x] = (filt[x] + ((left + up) // 2)) & 0xFF
        elif f == 4:  # Paeth
            for x in range(rowlen):
                left = cur[x - bpp] if x >= bpp else 0
                up = prev[x]
                up_left = prev[x - bpp] if x >= bpp else 0
                cur[x] = (filt[x] + _paeth(left, up, up_left)) & 0xFF
        else:
            raise ValueError(f"Unsupported PNG filter type: {f}")

        out.append(bytes(cur))
        prev = cur

    return out


def load_png(path: Path) -> PngImage:
    data = path.read_bytes()
    width = height = None
    bit_depth = color_type = None
    idat = bytearray()
    for ctype, cdata, _crc in _read_chunks(data):
        if ctype == b"IHDR":
            width, height, bit_depth, color_type, comp, filt, inter = struct.unpack(">IIBBBBB", cdata)
            if bit_depth != 8 or color_type != 6:
                raise ValueError(
                    f"{path.name}: only RGBA 8-bit PNGs supported (got bit_depth={bit_depth}, color_type={color_type})."
                )
            if comp != 0 or filt != 0 or inter != 0:
                raise ValueError(f"{path.name}: unsupported PNG format settings (comp/filt/inter).")
        elif ctype == b"IDAT":
            idat.extend(cdata)
        elif ctype == b"IEND":
            break

    if width is None or height is None:
        raise ValueError(f"{path.name}: missing IHDR.")
    if not idat:
        raise ValueError(f"{path.name}: missing IDAT.")

    decompressed = zlib.decompress(bytes(idat))
    rows = _unfilter_rows(width, height, decompressed, bpp=4)
    return PngImage(width=width, height=height, rows=rows)


def _chunk(ctype: bytes, payload: bytes) -> bytes:
    length = struct.pack(">I", len(payload))
    crc = binascii.crc32(ctype + payload) & 0xFFFFFFFF
    return length + ctype + payload + struct.pack(">I", crc)


def write_png(path: Path, width: int, height: int, rows: list[bytes]) -> None:
    # Encode with filter type 0 (None) for simplicity.
    bpp = 4
    rowlen = width * bpp
    raw = bytearray()
    for r in rows:
        if len(r) != rowlen:
            raise ValueError("Row width mismatch while writing PNG.")
        raw.append(0)  # filter byte
        raw.extend(r)

    comp = zlib.compress(bytes(raw), level=9)
    ihdr = struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0)
    out = bytearray(PNG_SIG)
    out.extend(_chunk(b"IHDR", ihdr))
    out.extend(_chunk(b"IDAT", comp))
    out.extend(_chunk(b"IEND", b""))
    path.write_bytes(bytes(out))


def main(argv: list[str]) -> int:
    if len(argv) < 5:
        print("Usage: make_bg_stack.py <bg1.png> <bg3.png> <bg4.png> <out.png>")
        return 2

    in_paths = [Path(argv[1]), Path(argv[2]), Path(argv[3])]
    out_path = Path(argv[4])

    images = [load_png(p) for p in in_paths]
    out_w = max(img.width for img in images)
    out_h = sum(img.height for img in images)

    out_rows: list[bytes] = []
    for img in images:
        pad_total = out_w - img.width
        pad_left = pad_total // 2
        pad_right = pad_total - pad_left
        left_bytes = b"\x00" * (pad_left * 4)
        right_bytes = b"\x00" * (pad_right * 4)
        for r in img.rows:
            out_rows.append(left_bytes + r + right_bytes)

    write_png(out_path, width=out_w, height=out_h, rows=out_rows)
    print(f"Wrote {out_path} ({out_w}x{out_h})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))

