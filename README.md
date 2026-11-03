# Tomás Queiroz: visual prototype

A responsive visual prototype for **Tomás Queiroz**, an independent private kickboxing and strength coach in Lisbon. It shows how the identity carries across a website and Instagram before photography is commissioned and the final site is built.

It has two connected views:

1. **Landing page**, customer-facing, in European Portuguese.
2. **Brand & Instagram preview**: wordmark, type, colour, photography rules, priority shot list, three post layouts, a nine-post feed and three Story / Reel covers.

To switch between them, use the dashed **Prototype** pill in the bottom-right corner. It sits outside the site content on purpose. The same panel turns the image labels on and off. You can also open the brand view directly by adding `#marca` to the address (the older `?vista=marca` still works).

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

**Idea (v2):** quiet, private, a little mysterious. The calm of the coast west of Lisbon (stone pines, dunes, timber decks, linen, low light) frames the physical work of coaching. The premium feeling comes from space, discretion and care, not ornament.

- **Wordmark.** Wide, quiet capitals. `TOMÁS` is set in medium weight; `QUEIROZ` is lighter and steps half an em forward, like a single step in. The acute accent is one fine sage stroke, the only colour in the mark. A `TQ` monogram exists but is secondary (avatar and favicon only).
- **Type, two families.** *Archivo* at the wide end of its width axis sets the name and short tracked capitals. At normal width and light weight it sets the sentence-case headlines, usually with one italic accent line. *Inter* carries explanations, captions and form text.
- **Colour.** Pine `#121714` (near-black with a green bias) and linen `#E8E4DA` do almost all the work. Sage is the single accent, in three strengths so it stays legible on both surfaces: sage `#8F9E86` for marks, pale sage `#B3BFA8` for buttons and accent text on pine, and deep sage `#4A5845` on linen. There is no orange or gold.
- **Layout.** An editorial 12-column grid with staggered images, generous whitespace and hairline rules. No rounded cards, gradients-as-decoration, glass, gold, crests or glove icons.
- **Photography treatment.** Applied in CSS to every image: −40 % saturation, −14 % brightness, a soft sage wash, a low vignette and fine grain, so every photo sits in the same dusk. Location references (pines in mist, dunes, a dune boardwalk) set the mood without naming any venue.
- **Copy.** Concrete and calm. Claims are limited to what was given: a competitive kickboxing background and personal-training training/qualification. There are no prices, testimonials, years, awards, studio, venue partners or scarcity. Indoor spaces are mentioned only as something to discuss and confirm.
- **Motion.** Images fade in as they load and text settles slightly as it enters the screen. Nothing waits on scrolling to become visible, and motion is off under `prefers-reduced-motion`.

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
| `pinesMist` | `ref-pines-mist.jpg` | “Repetir” interlude | Agreed outdoor location at dusk |
| `boardwalk` | `ref-boardwalk.jpg` | Locations | Agreed outdoor location at dusk |
| `dunes` | `ref-dunes.jpg` | Brand view mood | Agreed outdoor location at dusk |
| `kettlebellLight` | `ref-kettlebell-light.jpg` | Strength pillar | Portable kit / strength detail |
| `towelRest` | `ref-towel-rest.jpg` | Conditioning pillar | Client breathing between rounds |
| `wrappingClient` | `ref-wrapping-client.jpg` | About (detail) | First conversation / preparation |
| `adultPractice` | `ref-adult-practice.jpg` | Individual format, post #9 | Adult beginner on pads with Tomás |
| `coachGloves` | `ref-coach-gloves.jpg` | Post #5, layout sample | Tomás corrects a client |
| `wrapsWindow` | `ref-wraps-window.jpg` | Brand view mood | Hands being wrapped, window light |
| `shadowboxing` | `ref-shadowboxing.jpg` | Reel cover | Tomás shadowboxing |

Sources: Pexels photos 4790417, 5837157, 31708346, 20370118, 6728972, 33387759, 6455951, 4058317, 6815662, 6551187, 7290053 and 9944902 (`https://www.pexels.com/photo/<id>/`). They are also linked from the brand view.

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

1. **Tomás holds pads for an adult beginner.** Medium-wide on a timber deck under stone pines, low sun filtered through the trees, beginner focused mid-jab. *Hero and padwork; the image that explains the service.*
2. **Tomás corrects a client's guard.** Medium, a calm linen-toned room, soft window light, his hand at the client's elbow. *Technique section and coaching posts.*
3. **Relaxed portrait between rounds.** Medium close-up at dusk on a stone wall or deck edge, wraps on, towel, a little mystery in the shadow. *About section and profile.*
4. **First conversation before training.** Seated on a terrace step, gloves and notebook beside them, soft evening light, unposed. *First-session section; reassures beginners.*
5. **Portable kit at a client's location.** Dark leather pads, gloves, wraps, kettlebell and bands on a teak deck or pale stone, raking low light. *Locations; proves "no local combinado".*
6. **Tomás shadowboxing with intentional motion blur.** About 1/15 s, blue hour among pines or against a dark limewashed wall. *Technique posts and Reel covers.*
7. **Duo session under the pines.** Two friends alternating on pads on a lawn, one laughing while catching breath, long shadows. *Duo format.*
8. **After the session.** Gloves off, water, sweat, relaxed shoulders by the deck or garden gate. *Contact section and a human post.*
9. **Tomás demonstrates a kick.** Full figure, low angle on sand or a dune path, sea mist or overcast sky. *Technique posts; alternative hero.*

Also needed: hand-wrap close-ups, a strength set with a client and Tomás observing, a wide outdoor scene at dusk (pines, dune path or garden), and breath and sweat between rounds.

**Across the set:** low sun through pines, soft window light and blue hour; believable skin; muted, cool-leaning colour (never orange or glossy); fine grain; deep shadows that keep detail. Private settings only: no signage, logos or recognisable venues. Mix wide, medium and close frames, sharp coaching and some motion blur. At least half should show coaching or client practice. Clients should be ordinary adults of different ages and levels, with model releases.
