[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Vgnx1789/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Vgnx1789/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# gta6-clipper-01 — "GTA 6 Is Finally Out — Lucia's Most Explosive Moment"

An entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"**
($500 in escrow, the top 20 places get paid). The video is the entry: places
are decided by each video's YouTube views when the bounty closes
(23 Nov 2026 08:00 WIB).

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.

## The clip

- **Source:** Rockstar Games' official "Grand Theft Auto VI Launch Trailer"
  (youtube.com/watch?v=rz1B4B2yBZY — 85M views, uploaded 2026-10-15),
  downloaded with yt-dlp from the official Rockstar Games channel.
- **Moment chosen:** the trailer's closing action run, 62.5s–76.0s — a night
  car, Jason raising his gun, Lucia & Jason on the balcony at sunset, a
  building exploding, the night-city aerial, Jason's sniper shot, and Lucia
  firing her rifle as a car explodes behind her. It is the trailer's densest,
  highest-energy stretch, and it opens on a night car with red taillights,
  so the hook lands in the first 2 seconds.
- **Format:** vertical 9:16, 1080×1920, 30 fps, 30.0 s (a YouTube Short).
  16:9 footage converted with blurred-fill, so no important picture is lost
  off the sides.
- **Pitch:** on-screen text over a slow zoom of the Lucia rifle/explosion
  frame (trailer 72.3s): "Make clips like this with AI" → "and earn real
  money on make.fun" → "make.fun/bounty/gta6-clipper-01" + "$500 BOUNTY".
  Text-only pitch (no voiceover) — the bounty accepts on screen, spoken,
  or both. Trailer audio plays under the hook and fades out as the pitch
  begins.
- **Render:** one ffmpeg command, filter graph in `../render/filter.txt`;
  final file `../clip-final.mp4` (8.2 MB, H.264 + AAC).

## The video (live)

- **Short:** https://www.youtube.com/shorts/5yRR-hoMSio
- **Channel:** Beyond Universe (@BeyondUniverseID)
- **Title:** GTA 6 Is Finally Out — Lucia's Most Explosive Moment
- **Description:** see `DESCRIPTION.md` — it carries the bounty's line
  verbatim, a make.fun link, and play code `makefun-jasmine-quail-flagpole`
  (verified against the competition's play-code endpoint on 20 Nov 2026).
- **VIDEO.json:** `{"url":"https://www.youtube.com/shorts/5yRR-hoMSio"}`

## Files

| File | What it is |
| --- | --- |
| `main.ts` | The entry program: hands VIDEO.json over to the gate. |
| `VIDEO.json` | The public Short's address. |
| `DESCRIPTION.md` | The YouTube title and description, exactly as published. |
| `TRANSCRIPT.md` | Session record: the pre-opening build and the post-opening session that re-rendered the clip, verified it, and published it. |
| `LICENSE` | MIT (SPDX: MIT). |

## Run it the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=repo MAKEFUN_OUTPUT_DIR=out node main.ts

`main.ts` (Node 22, standard library only) reads `VIDEO.json` from the
repository, checks its `url` is a YouTube Shorts address, and copies the
file byte for byte into the output folder, then prints a short summary.

Check the address without copying anything:

    node main.ts --verify

Exit codes: 0 = handed over (or verified), 2 = VIDEO.json missing,
3 = its contents are not a valid Shorts address, 4 = the copy failed.

## Before submitting

From the kit's directory:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

Then submit per the kit's `RULES.txt`. See `TRANSCRIPT.md` for the full
session record.
