# Tomás Queiroz: visual prototype

A responsive visual prototype for **Tomás Queiroz**, an independent private kickboxing and strength coach in Lisbon. It shows how the identity carries across a website and Instagram before photography is commissioned and the final site is built.

It has two connected views:

1. **Landing page**, customer-facing, in European Portuguese.
2. **Brand & Instagram preview**: wordmark, type, colour, photography rules, priority shot list, three post layouts, a nine-post feed and three Story / Reel covers.

To switch between them, use the dashed **Prototype** pill in the bottom-right corner. It sits outside the site content on purpose. The same panel turns the image labels on and off. You can also open the brand view directly at `/?vista=marca`.

---

## Run it

Requires Node 18+.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the build at http://localhost:4173
```

The build uses relative paths (`base: './'`), so `dist/` can be dropped onto any static host.

---

## Visual choices

**Idea:** physical, focused, warm and assured. The premium feeling comes from restraint and attention to detail, not ornament.

- **Wordmark.** `TOMÁS` is set upright and compressed, like a planted guard. `QUEIROZ` is slanted and steps forward 0.36 em, like the strike. The acute accent is drawn as a single rust stroke, cut at the same angle as the slant. It is the only colour in the mark. The name stays fully readable. A `TQ` monogram exists but is secondary (avatar and favicon only).
- **Type, two families.** *Archivo* (variable width axis) carries the name, headlines and short capitals; the compressed width gives fight-poster energy without shouting. *Inter* carries explanations, captions and form text. Headlines use deliberate line breaks. The last line is often set in italic to suggest movement.
- **Colour.** Charcoal `#191D1E` and warm chalk `#F1EBDD` alternate section by section and do almost all the work. Tobacco `#79583E` adds warmth (placeholders, fine rules). Rust `#A34F32` is the single accent: the accent stroke, primary buttons and short markers. Rust fails contrast on charcoal, so text there uses a rust tint `#D58B6C` (6.3 : 1).
- **Layout.** An editorial 12-column grid with staggered images and big numbered sections. The page alternates between scale and close reading. No rounded cards, gradients-as-decoration, glass, gold, crests or glove icons.
- **Photography treatment.** Applied in CSS to every image: −16 % saturation, slight contrast, a 6 % warm tone and a fine grain overlay. The photos stay cohesive without being forced into the palette.
- **Copy.** Concrete and calm. Claims are limited to what was given: a competitive kickboxing background and personal-training training/qualification. There are no prices, testimonials, years, awards, studio, venue partners or scarcity. Indoor spaces are mentioned only as something to discuss and confirm.
- **Motion.** Gentle fade/scale reveals on images and short rise-ins on text. All of it is disabled under `prefers-reduced-motion`.

---

## How it is organised

```
src/
  styles/tokens.css        ← all colours, type, spacing, motion (edit here first)
  styles/*.css             ← base, components, landing, social posts, brand view, prototype chrome
  content/images.js        ← central image manifest + shoot priorities
  content/landing.js       ← all landing-page copy (PT-PT)
  content/social.js        ← Instagram posts, captions and Stories (PT-PT)
  components/Wordmark.jsx  ← wordmark + monogram
  components/Photo.jsx     ← every photo goes through this (treatment, grain, labels, placeholders)
  components/social/Posts.jsx ← the three reusable post layouts (photo / idea / info)
  components/PrototypeControl.jsx ← prototype-only navigation, kept out of the site content
  views/landing/*          ← one component per landing section
  views/brand/BrandPreview.jsx
public/images/reference/   ← licensed reference photos (to be replaced)
public/images/shoot/       ← put real photographs here
```

### The enquiry form

The form validates (name, email or phone, area, goals, availability; format is optional) and then shows a confirmation that clearly says **nothing was sent**. It is not connected to any messaging, booking or payment service, and data is not stored.

### Accessibility

- Skip link and labelled landmarks.
- Visible focus states.
- Keyboard-operable mobile menu (Esc closes it) and prototype panel.
- Form errors are announced and focus moves to the first problem.
- Text contrast is AA or better.
- Reduced-motion support throughout.

---

## Assets to replace

### Reference images (Pexels License, used for tone only)

Each one is labelled in the prototype as *Reference image · not Tomás or a client*.

| Key | File | Used in | Replace with |
| --- | --- | --- | --- |
| `heroHands` | `ref-wraps-bench.jpg` | Hero, post #7 | Hands being wrapped, close detail |
| `padworkClose` | `ref-padwork-close.jpg` | Pads pillar, post #1 | Tomás holds pads for an adult beginner |
| `padworkWide` | `ref-padwork-wide.jpg` | “Repetir” interlude | Wide scene at an agreed outdoor spot in Lisbon |
| `kettlebellLight` | `ref-kettlebell-light.jpg` | Strength pillar | Portable kit / strength detail |
| `towelRest` | `ref-towel-rest.jpg` | Conditioning pillar | Client breathing between rounds |
| `wrappingClient` | `ref-wrapping-client.jpg` | About (detail) | First conversation / preparation |
| `adultPractice` | `ref-adult-practice.jpg` | Individual format, post #9 | Adult beginner on pads with Tomás |
| `coachGloves` | `ref-coach-gloves.jpg` | Post #5, layout sample | Tomás corrects a client |
| `wrapsWindow` | `ref-wraps-window.jpg` | Locations (detail) | Hands being wrapped, window light |
| `shadowboxing` | `ref-shadowboxing.jpg` | Reel cover | Tomás shadowboxing |
| `kettlebellPress`, `wrappedFist` | `ref-kettlebell-press.jpg`, `ref-wrapped-fist.jpg` | Brand view mood | Strength / hand-wrap details |

Sources: Pexels photos 4790417, 5837157, 5837153, 33387759, 6455951, 4058317, 6815662, 6551187, 7290053, 9944902, 13993022 and 9944002 (`https://www.pexels.com/photo/<id>/`). They are also linked from the brand view.

### Placeholders (photos to shoot)

Placeholders are art-directed frames with a line sketch of the composition, light direction and ratio, plus the brief. Their keys are `tomasPadsBeginner`, `tomasCorrecting`, `tomasPortrait`, `firstConversation`, `portableKit`, `tomasShadow`, `duoSession`, `afterSession` and `tomasTechnique`.

**To swap any image:**

1. Put the file in `public/images/shoot/`.
2. In `src/content/images.js`, set `kind: 'photo'`, `src` and a real Portuguese `alt`.
3. Adjust `focus` if needed.

Every page and post updates automatically.

### Other placeholders

- Instagram handle `tomas.queiroz` is a placeholder.

---

## Priority photographs for the first shoot

1. **Tomás holds pads for an adult beginner.** Medium-wide, late-afternoon sun, beginner focused mid-jab. *Hero and padwork; the image that explains the service.*
2. **Tomás corrects a client's guard.** Medium, side window light, his hand at the client's elbow. *Technique section and coaching posts.*
3. **Relaxed portrait between rounds.** Medium close-up, wraps on, towel, warm side light, easy half-smile. *About section and profile.*
4. **First conversation before training.** Seated on the floor or a step, gloves and notebook beside them, unposed. *First-session section; reassures beginners.*
5. **Portable kit at a client's location.** Oxblood pads, gloves, wraps, kettlebell and bands on wood or terrace tiles, raking light. *Locations; proves "no local combinado".*
6. **Tomás shadowboxing with intentional motion blur.** About 1/15 s, hard side light, dark concrete. *Technique posts and Reel covers.*
7. **Duo session on a terrace.** Two friends alternating on pads, one laughing while catching breath. *Duo format.*
8. **After the session.** Gloves off, water, sweat, relaxed shoulders. *Contact section and a human post.*
9. **Tomás demonstrates a kick.** Full figure, low angle, pivoted supporting foot. *Technique posts; alternative hero.*

Also needed: hand-wrap close-ups, a strength set with a client and Tomás observing, a wide outdoor scene in Lisbon, and breath and sweat between rounds.

**Across the set:** side light, window light and late sun; believable skin; fine grain; deep shadows that keep detail. Mix wide, medium and close frames, sharp coaching and some motion blur. At least half should show coaching or client practice. Clients should be ordinary adults of different ages and levels, with model releases.
