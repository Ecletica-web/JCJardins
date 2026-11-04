#!/usr/bin/env python3
"""Generate the prototype's concept images with Google's Imagen API.

Usage
-----
    export GEMINI_API_KEY=...            # or GOOGLE_API_KEY
    python3 scripts/generate_images.py                 # all images
    python3 scripts/generate_images.py heroHands dunes # only these keys
    python3 scripts/generate_images.py --list          # show keys and prompts
    python3 scripts/generate_images.py --force         # overwrite existing files

Images are written to public/images/generated/<key>.png. Each key matches an
entry in src/content/images.js. The people in these images are generated, not
Tomás or real clients, so keep them labelled as concept/reference imagery.

Optional: IMAGEN_MODEL (default imagen-4.0-generate-001).
Standard library only; honours HTTPS_PROXY and the system CA store.
"""

import base64
import json
import os
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public" / "images" / "generated"
MODEL = os.environ.get("IMAGEN_MODEL", "imagen-4.0-generate-001")
ENDPOINT = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:predict"

STYLE = (
    "Cinematic documentary photography, shot on 35mm film, natural light only, "
    "muted cool-leaning colour, soft sage and pine tones, deep shadows that keep detail, "
    "believable skin texture, fine film grain, restrained saturation, quiet private atmosphere, "
    "editorial. Never orange or golden, never glossy or HDR. Ordinary athletic build, not a bodybuilder. "
    "No text, no logos, no gym branding, no watermark."
)

# Whenever a prompt shows the coach, describe him close to Tomás's real look
# (or keep him faceless) so concepts don't set the wrong expectation.
COACH = (
    "The coach is a lean man in his mid-twenties with short dark hair and no beard, "
    "wearing a plain black t-shirt and dark shorts, barefoot. Prefer framing that shows "
    "his hands, back or profile rather than a clear face."
)

# Imagen supports 1:1, 3:4, 4:3, 9:16 and 16:9. The site crops with CSS
# object-fit, so 4:5 → 3:4, 3:2 → 4:3 and 21:9 → 16:9.
PROMPTS = {
    # ---- Coaching shots (replace the "Photo to shoot" placeholders) ------
    "tomasPadsBeginner": ("3:4",
        "Medium-wide shot on a timber deck under Mediterranean stone pines at late afternoon. "
        "A focused adult beginner throws a jab into focus mitts held by a calm male kickboxing coach "
        "in a plain dark t-shirt, who is watching the client's feet. Low sun filters through the pine "
        "canopy, faint motion blur on the glove, dark leather mitts."),
    "tomasCorrecting": ("3:4",
        "Medium shot in a calm, minimal room with linen curtains and pale limewashed walls. A male coach "
        "in three-quarter profile gently adjusts a client's elbow to correct their boxing guard. The client "
        "is in sharp focus, concentrating. Soft window light from the left, deep shadow behind."),
    "tomasPortrait": ("3:4",
        "Medium close-up portrait of a male kickboxing coach resting between rounds at dusk, seated on a "
        "low stone wall, black hand wraps on, a towel over one shoulder, looking off-camera with an easy "
        "half-smile. Fading side light, sweat on skin, a little mystery in the shadows."),
    "firstConversation": ("16:9",
        "Wide-medium shot of a coach and an adult client seated on a terrace step, talking before training. "
        "Boxing gloves and a small notebook lie beside them. Linen cushions, timber and pale stone, soft "
        "evening light. Unposed, attentive body language."),
    "portableKit": ("3:4",
        "Overhead still life on a teak deck: dark leather focus mitts, boxing gloves, rolled black hand "
        "wraps, a matte black kettlebell and resistance bands, neatly placed. Raking low sunlight, long "
        "shadows, pine needles at the edge of the frame."),
    "tomasShadow": ("3:4",
        "Vertical full-figure shot of a male fighter shadowboxing at blue hour among stone pines. Slow "
        "shutter: the hands are blurred with motion, the head and feet are sharp. Cool dim light, a dark "
        "limewashed wall behind."),
    "duoSession": ("4:3",
        "Wide shot of two adult friends alternating on focus mitts with a coach on a lawn under stone pines. "
        "One waits on the side, laughing and catching their breath. Late afternoon, long shadows across the "
        "grass, relaxed and private."),
    "afterSession": ("3:4",
        "Medium shot of a coach and an adult client after training by a garden gate. Gloves off, both "
        "laughing and sharing a water bottle. Sweat visible, shoulders relaxed, open shade with soft "
        "neutral light."),
    "tomasTechnique": ("3:4",
        "Low-angle full-figure shot of a male kickboxer throwing a roundhouse kick on a sand dune path, "
        "caught at the chamber point with the supporting foot pivoted. Overcast Atlantic sky and sea mist "
        "behind, dune grass in the foreground."),
    # ---- Detail and client shots (replace the Pexels references) -------
    "heroHands": ("3:4",
        "Close-up of hands wrapping black boxing hand wraps, the person seated on a weathered wooden bench "
        "outdoors, knees in frame, face not visible. Soft side light, pine shade."),
    "padworkClose": ("3:4",
        "Over-the-shoulder shot of an adult client punching focus mitts held by a smiling coach, on a quiet "
        "beach at dusk, the sea out of focus behind them."),
    "kettlebellLight": ("3:4",
        "A matte black kettlebell on a pale stone floor, cut by a sharp shaft of window light, deep shadow "
        "around it, minimal interior."),
    "towelRest": ("3:4",
        "An adult man catching his breath after a round, pressing a white towel to his face, sweat on his "
        "arms, sitting on a timber deck in shade."),
    "wrappingClient": ("1:1",
        "Close-up of a coach's hands wrapping a client's hand with black wraps before training, natural "
        "window light, quiet and careful."),
    "adultPractice": ("4:3",
        "A grey-haired man in his fifties in a boxing guard with dark leather gloves, practising beside a "
        "large window in a calm, linen-toned living room."),
    "coachGloves": ("3:4",
        "A coach fastening a client's boxing gloves, a close crop of hands and forearms against a "
        "limewashed wall, soft side light."),
    "wrapsWindow": ("4:3",
        "A man by a window in a minimal room, looking down as he wraps his hands, soft daylight falling "
        "across one side."),
    "shadowboxing": ("9:16",
        "A man shadowboxing in a dim, minimal room with a single shaft of side light, slight motion blur on "
        "the hands, the upper third of the frame calm and empty."),
    # ---- Location mood (no people) ---------------------------------------
    "pinesMist": ("16:9",
        "Mediterranean stone pines in morning mist, tall dark trunks, layered fog, a quiet and mysterious "
        "coastal forest. No people."),
    "boardwalk": ("3:4",
        "A weathered timber boardwalk crossing Atlantic sand dunes towards the sea, dune grass, overcast "
        "soft sky. No people."),
    "dunes": ("4:3",
        "Sand dunes with sparse dune grass under a heavy grey sky, wind-shaped texture, minimal and calm. "
        "No people."),
}


def generate(key, api_key):
    aspect, prompt = PROMPTS[key]
    body = {
        "instances": [{"prompt": f"{prompt} {COACH if 'coach' in prompt.lower() else ''} {STYLE}"}],
        "parameters": {"sampleCount": 1, "aspectRatio": aspect, "personGeneration": "allow_adult"},
    }
    req = urllib.request.Request(
        ENDPOINT,
        data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json", "x-goog-api-key": api_key},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=180) as resp:
        data = json.load(resp)
    preds = data.get("predictions") or []
    if not preds or "bytesBase64Encoded" not in preds[0]:
        reason = preds[0].get("raiFilteredReason") if preds else data
        raise RuntimeError(f"no image returned ({reason})")
    return base64.b64decode(preds[0]["bytesBase64Encoded"])


def main(argv):
    if "--list" in argv:
        for k, (ar, p) in PROMPTS.items():
            print(f"{k} [{ar}]\n  {p}\n")
        return 0

    api_key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("Set GEMINI_API_KEY (or GOOGLE_API_KEY) first.", file=sys.stderr)
        return 1

    force = "--force" in argv
    keys = [a for a in argv if not a.startswith("--")] or list(PROMPTS)
    unknown = [k for k in keys if k not in PROMPTS]
    if unknown:
        print(f"Unknown keys: {', '.join(unknown)}", file=sys.stderr)
        return 1

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    failed = []
    for i, key in enumerate(keys, 1):
        out = OUT_DIR / f"{key}.png"
        if out.exists() and not force:
            print(f"[{i}/{len(keys)}] {key}: exists, skipped (use --force)")
            continue
        for attempt in range(3):
            try:
                out.write_bytes(generate(key, api_key))
                print(f"[{i}/{len(keys)}] {key}: saved {out.relative_to(ROOT)}")
                break
            except urllib.error.HTTPError as e:
                msg = e.read().decode(errors="replace")[:300]
                if e.code in (429, 500, 503) and attempt < 2:
                    time.sleep(8 * (attempt + 1))
                    continue
                print(f"[{i}/{len(keys)}] {key}: HTTP {e.code} {msg}", file=sys.stderr)
                failed.append(key)
                break
            except Exception as e:  # noqa: BLE001
                print(f"[{i}/{len(keys)}] {key}: {e}", file=sys.stderr)
                failed.append(key)
                break
    if failed:
        print(f"\nFailed: {' '.join(failed)}", file=sys.stderr)
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
