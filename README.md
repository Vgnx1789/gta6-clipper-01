[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Vgnx1789/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Vgnx1789/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# gta6-clipper-01 — "GTA 6 SEDETAIL INI?! Grafis Vice City Bikin Melongo 🔥"

An entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"**
($500 in escrow, the top 20 places get paid). The video is the entry: places
are decided by each video's YouTube views when the bounty closes
(23 Nov 2026 08:00 WIB).

On make.fun, people team up with their AI agents to make things and enter
them in paid bounty competitions; the entries that place take home real
prize money.

This is the entry's **second video**. The bounty rules say each submission
may name a new video and the final entry is the last submission before the
deadline, so on 20 Nov 2026 the entry moved from the first clip (a single
closing-run cut on the Beyond Universe channel) to this new montage on the
Lah Kok Bisa ID channel, whose Shorts regularly reach hundreds to thousands
of views.

## The clip

- **Source:** Rockstar Games' official "Grand Theft Auto VI Launch Trailer"
  (youtube.com/watch?v=rz1B4B2yBZY — 85M views, uploaded 2026-10-15),
  downloaded with yt-dlp from the official Rockstar Games channel.
- **What it is:** a fast montage of eleven moments from across the whole
  trailer — not just the closing run the first version used — cut for
  Shorts retention, in this order: Lucia firing her rifle as a car explodes
  behind her (72.1s) → a helicopter smashing into a glass tower and the
  night aerial (67.9–70.0s) → Jason on a rooftop with a fireworks explosion
  behind him (52.4s) → a dirt bike flying (48.1–50.2s) → a packed beach
  aerial with a pink-smoke stunt plane (54.5–56.4s) → the neon night-city
  aerial (17.5s) → the Vice City skyline at dusk over the water (23.9–25.7s)
  → Jason & Lucia on the balcony at sunset (66.4–67.9s) → Lucia silhouetted
  in a cargo plane's door (33.6–35.6s) → an armed patrol in the swamp at
  dusk (27.3–28.7s) → a road explosion seen from the air (59.9–61.0s).
- **Hook:** the clip opens at second 0 on the Lucia explosion shot — no
  fade-in — with the Indonesian hook text "GTA 6: SEDETAIL INI?!" burned in
  large over the first two seconds.
- **Pitch:** on-screen text over a slow pan of the Lucia rifle/explosion
  frame (trailer 72.55s): "Make clips like this with AI" → "and earn real
  money on make.fun" → "make.fun/bounty/gta6-clipper-01" + "$500 BOUNTY".
  Text-only pitch (no voiceover) — the bounty accepts on screen, spoken,
  or both. Trailer audio runs under the montage and is lowered under the
  pitch cards.
- **Loop ending:** the final second repeats the opening shot exactly, so
  the Short loops back into its own first frame.
- **Format:** vertical 9:16, 1080×1920, 30 fps, 28.6 s (a YouTube Short).
  16:9 footage converted with blurred-fill, so no important picture is lost
  off the sides.
- **Render:** built with ffmpeg in sections (montage, pitch, loop, audio)
  and assembled stream-copy; final file `../clip-v2.mp4` (14.7 MB,
  H.264 + AAC, −14.8 LUFS, no black frames).

## The video (live)

- **Short:** https://www.youtube.com/shorts/Wv7SSJDmhX0
- **Channel:** Lah Kok Bisa ID (@LahKokBisaID)
- **Title:** GTA 6 SEDETAIL INI?! Grafis Vice City Bikin Melongo 🔥
- **Published:** 20 Nov 2026, 16:29 WIB, Public.
- **Description:** see `DESCRIPTION.md` — it carries the bounty's line
  verbatim, a make.fun link, and play code `makefun-jasmine-quail-flagpole`
  (verified against the competition's play-code endpoint on 20 Nov 2026).
- **VIDEO.json:** `{"url":"https://www.youtube.com/shorts/Wv7SSJDmhX0"}`
- **Replaces:** the first submission's video,
  https://www.youtube.com/shorts/5yRR-hoMSio on Beyond Universe
  (@BeyondUniverseID), which stays public but is no longer the entry.

## Files

| File | What it is |
| --- | --- |
| `main.ts` | The entry program: hands VIDEO.json over to the gate. |
| `VIDEO.json` | The public Short's address. |
| `DESCRIPTION.md` | The YouTube title and description, exactly as published. |
| `CLIP-V2.md` | The v2 clip's edit decision list: every shot with its trailer timecode, the hook, the pitch cards, and the render/QA notes. |
| `TRANSCRIPT.md` | Session record: the pre-opening build and the post-opening session that rendered the first clip, verified it, and published it. |
| `LICENSE` | MIT (SPDX: MIT). |

## Run it the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=repo MAKEFUN_OUTPUT_DIR=out node main.ts

`main.ts` runs on Node 22 with the standard library alone. It loads
`VIDEO.json` from the repository, validates that the `url` inside is a
YouTube Shorts address, copies the file into the output folder without
changing a byte, and finishes with a brief summary of what it handed over.

To validate the address without copying anything:

    node main.ts --verify

Exit codes: 0 = handed over (or verified), 2 = VIDEO.json missing,
3 = its contents are not a valid Shorts address, 4 = the copy failed.

## Before submitting

From the kit's directory:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

Then submit per the kit's `RULES.txt`. See `TRANSCRIPT.md` for the full
session record.
