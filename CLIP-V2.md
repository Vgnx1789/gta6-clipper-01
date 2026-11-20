# CLIP-V2 — edit decision list

The v2 clip (`../clip-v2.mp4`, 28.61 s, 1080×1920, 30 fps) for the
gta6-clipper-01 entry's second video, published on Lah Kok Bisa ID:
https://www.youtube.com/shorts/Wv7SSJDmhX0

Source: Rockstar Games' "Grand Theft Auto VI Launch Trailer"
(`../footage/gta6-launch-trailer.mp4`, 1920×1080). Every shot below is
converted to vertical with blurred-fill, so nothing important is cropped
off the sides.

## Shots (clip time ← trailer time)

| Clip | Trailer | Moment |
| --- | --- | --- |
| 0.00–1.03 | 72.10–73.13 | **Opener:** Lucia firing her rifle, a car exploding behind her |
| 1.03–3.16 | 67.87–70.00 | Helicopter smashing into a glass tower → night aerial |
| 3.16–4.16 | 52.40–53.40 | Jason on a rooftop, fireworks explosion behind him |
| 4.16–6.26 | 48.05–50.15 | Dirt bike flying: launch, airborne, landing |
| 6.26–8.11 | 54.50–56.35 | Packed beach aerial, pink-smoke stunt plane |
| 8.11–9.11 | 17.50–18.50 | Neon night-city aerial (clean stretch, no Rockstar card) |
| 9.11–10.91 | 23.90–25.70 | Vice City skyline at dusk over the water |
| 10.91–12.38 | 66.40–67.87 | Jason & Lucia on the balcony at sunset |
| 12.38–14.38 | 33.60–35.60 | Lucia silhouetted in a cargo plane's door |
| 14.38–15.78 | 27.30–28.70 | Armed patrol in the swamp at dusk |
| 15.78–16.88 | 59.90–61.00 | Road explosion seen from the air |
| 16.88–27.48 | still 72.55 | Pitch cards over the Lucia frame (see below) |
| 27.48–28.51 | 72.10–73.13 | The opener shot again, exactly — the loop point |

## Hook

Burned in over the first 2.2 s, large bold Indonesian text with a heavy
outline, inside the Shorts safe area: **"GTA 6: SEDETAIL INI?!"**.
No fade-in: frame 0 is already the explosion shot, bright and moving.

## Pitch cards (16.88–27.48 s)

Over a slow diagonal pan of the trailer's 72.55 s frame (Lucia + fireball),
the same three cards as v1, in the same style:

1. "Make clips like this with AI"
2. "and earn real money on make.fun"
3. "make.fun/bounty/gta6-clipper-01" + "$500 BOUNTY"

Trailer audio is lowered to 0.55 under the cards.

## Audio

Trailer audio cut to follow the picture, 150 ms crossfades between cuts.
Final loudness −14.83 LUFS integrated, true peak −0.84 dBTP.

## Render & QA notes

- Rendered in sections — montage, pitch, loop, audio — each kept as a
  checkpoint under `../render/`, then assembled with a stream copy.
  A single-graph render was lost to a runtime restart mid-write (a file
  with no moov atom, discarded); the sectioned build is what survived
  and shipped.
- v1's slow zoompan over the pitch still proved too slow on this
  machine (over 11 minutes without finishing, stopped); the pitch
  background instead moves with a diagonal crop pan (Ken Burns) over
  the same still, with the same card text and timing.
- One planned shot does not exist in the trailer: there is no
  street-level beach crowd. The packed beach aerial with the stunt
  plane (54.50–56.35 s) is used instead — visually the stronger shot.
- QA before upload: ffprobe confirms 28.612 s, 1080×1920, 30 fps,
  H.264 + AAC; frames at t=0, 1, 14, 19, 22.5, 26 and 28.3 s checked
  visually (hook text fully readable, pitch cards fully readable,
  loop frame identical to the opener); blackdetect finds no black
  segment of 0.3 s or longer.
