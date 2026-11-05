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
- **Motion.** A short opening veil (the name arrives letter by letter, once per visit), a full-screen hero whose image drifts as you scroll, headlines that rise line by line, photographs that wipe open as they enter, scroll-driven parallax on the full-bleed bands, a slow marquee, a header that hides on the way down and returns on the way up, swipeable card strips on mobile, a slideshow with crossfade and swipe, and a small trailing cursor on pointer devices. All of it is in `src/styles/motion.css` and is switched off under `prefers-reduced-motion`; the page is complete without it.

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
  components/Intro.jsx, Cursor.jsx, Marquee.jsx, Slideshow.jsx ← presentation layer
  components/Disclosure.jsx, RevealCard.jsx ← expandable boxes and media cards
  styles/motion.css        ← intro, reveals, parallax, hero, galleries, cursor (reduced-motion safe)
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

### Concept images (AI-generated, supplied)

Labelled on every page as *Concept image · AI-generated · not Tomás or a client*. They live in `public/images/concept/` and set the mood and composition for the real shoot.

| File | Used as | Where |
| --- | --- | --- |
| `concept-shadow-dusk.jpg` | `tomasShadow` | Hero, post #3, Reel cover |
| `concept-duo-pines.jpg` | `duoSession`, `padsPines` | Duo format, Pads pillar |
| `concept-gloves.jpg` | `coachGloves` | About (detail), post #5, layout sample |
| `concept-pines-mist.jpg` | `pinesMist` | "Repetir" interlude |
| `concept-boardwalk.jpg` | `boardwalk` | Locations |
| `concept-terrace-talk.jpg` | `firstConversation` | First-session section |
| `concept-after-gate.jpg` | `afterSession` | Contact section |
| `concept-wraps-bench.jpg` | `heroHands` | Post #7 |
| `concept-adult-guard.jpg` | `adultPractice` | Individual format, post #9 |
| `concept-dunes.jpg` | `dunes` | Brand view mood |

### Stills from Tomás's videos

Black-and-white frames cut from his three training clips, in `public/images/tomas/`: `tomas-still-kick.jpg`, `tomas-still-between-rounds.jpg` (bag work), `tomas-still-pads.jpg` (padwork), `tomas-still-correcting.jpg` and `tomas-still-pads-client.jpg` (coaching a client). They are low resolution (under 600 px wide) and sit in small frames only.

No stock photography remains in the prototype.

### Placeholders

None left: every slot has an image. The brand view's shot list still describes the frames the real shoot should produce to replace the concept images and low-resolution stills.

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

## Hosting and the enquiry form

- Hosted on Vercel (project `tomas-queiroz`), built with `npm run build`, output `dist`.
- The form posts to `api/enquiry.js` (a Vercel function) only when the build has
  `VITE_FORM_ENDPOINT=/api/enquiry`. Without it the form stays a local prototype.
- The function forwards each request by email through Resend and stores nothing.
  It needs `RESEND_API_KEY`, `ENQUIRY_TO` and `ENQUIRY_FROM` in the Vercel project;
  until the key exists it answers "unconfigured" and the site shows the prototype note.

## Search, link previews and socials

- `index.html` holds the title, description, Open Graph / Twitter tags (link
  previews use `public/og.jpg`, 1200x630) and JSON-LD structured data.
- `public/robots.txt` and `public/sitemap.xml` point search engines at
  https://tqboxing.com/. Update `lastmod` in the sitemap after big changes.
- Footer social buttons come from `src/content/socials.js`; a button appears
  only once its url is filled in. Add the same urls to `sameAs` in the JSON-LD.

