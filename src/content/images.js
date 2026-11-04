/* ==========================================================================
   Central image manifest
   --------------------------------------------------------------------------
   Every photograph in the prototype is referenced by its key below, never by
   a path inside a component. To swap in a real photo from the shoot:

     1. Put the file in /public/images/shoot/  (e.g. tomas-portrait.jpg)
     2. Change the entry's `kind` to 'photo', set `src`, write a real `alt`
     3. Optionally adjust `focus` (CSS object-position) for the crop

   kind: 'reference'   – licensed stock used only to judge tone and layout.
                         Always labelled in the prototype. The people shown
                         are NOT Tomás and NOT clients.
         'concept'     – AI-generated concept image supplied for the prototype.
                         Always labelled. The people shown are NOT Tomás
                         and NOT clients.
         'placeholder' – a photo that must be produced (anything showing
                         Tomás himself). Rendered as an art-directed frame
                         with the brief.
         'photo'       – a real, approved photograph (none yet).
   ========================================================================== */

const base = import.meta.env.BASE_URL;
const ref = (file) => `${base}images/reference/${file}`;
const concept = (file) => `${base}images/concept/${file}`;
const own = (file) => `${base}images/tomas/${file}`;
const pexels = (id) => `https://www.pexels.com/photo/${id}/`;

export const images = {
  /* ---- Reference imagery (Pexels License) ------------------------------ */

  heroHands: {
    kind: 'concept',
    src: concept('concept-wraps-bench.jpg'),
    alt: 'Mãos a enrolar ligaduras pretas, sentado num banco de madeira à sombra.',
    focus: '50% 55%',
    people: false,
    note: 'Hands only — preparation before a session. Good warmth and texture.',
  },
  wrapsWindow: {
    kind: 'concept',
    src: concept('concept-wraps-bench.jpg'),
    alt: 'Mãos a enrolar ligaduras pretas, sentado num banco de madeira à sombra.',
    focus: '50% 50%',
    people: false,
  },
  padworkClose: {
    kind: 'photo',
    src: own('tomas-still-pads.jpg'),
    alt: 'O Tomás segura os pads enquanto um atleta treina combinações.',
    focus: '50% 45%',
    note: 'Still from his own padwork video.',
  },
  kettlebellLight: {
    kind: 'concept',
    src: concept('concept-kit-terrace.jpg'),
    alt: 'Kettlebell e luvas de couro sobre um deck de madeira, com o mar ao fundo.',
    focus: '82% 22%',
    people: false,
    note: 'Kit image cropped to the kettlebell.',
  },
  adultPractice: {
    kind: 'concept',
    src: concept('concept-adult-guard.jpg'),
    alt: 'Homem de cabelo grisalho em guarda, com luvas de couro, numa sala calma junto a uma janela.',
    focus: '55% 35%',
    people: true,
    note: 'An ordinary adult practising. Real clients come in every age and level.',
  },
  towelRest: {
    kind: 'photo',
    src: own('tomas-still-between-rounds.jpg'),
    alt: 'O Tomás de luvas, parado, a recuperar o fôlego entre rondas.',
    focus: '50% 35%',
    note: 'Still from his own bag-work video.',
  },

  /* ---- Tomás's own photographs (supplied, cropped, black and white) ---- */

  tomasSplit: {
    kind: 'photo',
    src: own('tomas-split.jpg'),
    alt: 'O Tomás a fazer espargata antes de um combate, de luvas e caneleiras.',
    focus: '40% 50%',
    credit: 'B&A Art Moments',
  },
  tomasInRing: {
    kind: 'photo',
    src: own('tomas-in-ring.jpg'),
    alt: 'O Tomás em guarda dentro do ringue, com capacete e luvas.',
    focus: '45% 40%',
  },
  tomasRingWide: {
    kind: 'photo',
    src: own('tomas-ring-wide.jpg'),
    alt: 'O Tomás em guarda dentro do ringue, numa noite de combates.',
    focus: '62% 45%',
  },
  tomasTeam: {
    kind: 'photo',
    src: own('tomas-team-wide.jpg'),
    alt: 'O Tomás com um grupo de atletas depois de um treino de kickboxing.',
    focus: '45% 55%',
  },
  tomasRingside: {
    kind: 'photo',
    src: own('tomas-ringside-wide.jpg'),
    alt: 'O Tomás junto ao ringue com dois atletas depois de um combate.',
    focus: '50% 40%',
  },
  tomasTeamTrophy: {
    kind: 'photo',
    src: own('tomas-team-trophy.jpg'),
    alt: 'O Tomás com duas atletas num dia de competição.',
    focus: '50% 45%',
  },
  tomasFightNight: {
    kind: 'photo',
    src: own('tomas-fight-night-wide.jpg'),
    alt: 'O Tomás ao lado de um atleta numa noite de combates.',
    focus: '50% 35%',
  },

  /* ---- Concept images (AI-generated, supplied) ------------------------- */

  coachGloves: {
    kind: 'concept',
    src: concept('concept-gloves.jpg'),
    alt: 'Um treinador aperta as luvas de outra pessoa, junto a uma parede caiada.',
    focus: '50% 50%',
    people: true,
    note: 'Hands helping hands before training. Quiet, attentive.',
  },
  padsPines: {
    kind: 'concept',
    src: concept('concept-duo-pines.jpg'),
    alt: 'Treino de pads num relvado sob pinheiros-mansos, ao fim da tarde.',
    focus: '33% 55%',
    people: true,
    note: 'Padwork under stone pines, cropped to coach and client.',
  },
  pinesMist: {
    kind: 'concept',
    src: concept('concept-pines-mist.jpg'),
    alt: 'Pinheiros-mansos entre a neblina, numa encosta junto à costa.',
    focus: '50% 50%',
    people: false,
    note: 'Stone pines in mist: the quiet, private mood of the coast.',
  },
  boardwalk: {
    kind: 'concept',
    src: concept('concept-boardwalk.jpg'),
    alt: 'Passadiço de madeira sobre as dunas, a caminho do mar, com o céu encoberto.',
    focus: '58% 60%',
    people: false,
    note: 'Dune boardwalk to the Atlantic: an outdoor setting that feels private.',
  },

  heroPads: {
    kind: 'concept',
    src: concept('concept-hero-pads.jpg'),
    alt: 'Um lutador com luvas Tomás Queiroz dá um direto nos pads ao entardecer, junto a um muro entre pinheiros.',
    focus: '45% 38%',
    people: false,
    note: 'Hero: jab into pads at dusk, branded TQK gloves.',
  },

  glovesBw: {
    kind: 'concept',
    src: concept('concept-gloves-bw.jpg'),
    alt: 'Mãos a apertar as luvas de outra pessoa, a preto e branco.',
    focus: '55% 50%',
    people: true,
    note: 'Statement band background: fastening gloves, black and white.',
  },

  /* ---- Location mood (no people) --------------------------------------- */

  dunes: {
    kind: 'concept',
    src: concept('concept-dunes.jpg'),
    alt: 'Dunas com vegetação rasteira junto ao mar, sob um céu encoberto.',
    focus: '50% 55%',
    people: false,
    note: 'Dune grass and soft Atlantic light. Texture and calm.',
  },

  /* ---- Placeholders: photographs to produce ---------------------------- */

  tomasCorrecting: {
    kind: 'photo',
    src: own('tomas-still-correcting.jpg'),
    alt: 'O Tomás, de pads, frente a uma aluna, a corrigir a guarda dela entre combinações.',
    focus: '50% 40%',
    note: 'Still from his own coaching video.',
    title: 'Tomás corrects a client’s guard',
    brief: 'Medium shot in a calm, linen-toned room. His hand adjusts the client’s elbow; client sharp, Tomás in three-quarter profile. Soft window light from the left.',
    shot: 'Medium',
    light: 'Side window light',
  },
  tomasPadsBeginner: {
    kind: 'photo',
    src: own('tomas-still-pads-client.jpg'),
    alt: 'O Tomás segura os pads para uma aluna num ringue de treino.',
    focus: '50% 45%',
    note: 'Still from his own coaching video.',
    title: 'Tomás holds pads for an adult beginner',
    brief: 'Medium-wide on a timber deck under stone pines. Beginner mid-jab, focused; Tomás holding pads, watching their feet. Low sun through the pines.',
    shot: 'Medium-wide',
    light: 'Low sun through pines',
  },
  tomasPortrait: {
    kind: 'photo',
    src: own('tomas-in-ring.jpg'),
    alt: 'O Tomás em guarda dentro do ringue, com capacete e luvas.',
    focus: '45% 40%',
    title: 'Relaxed portrait between rounds',
    brief: 'Medium close-up at dusk. Tomás seated on a low stone wall, wraps on, towel on shoulder, looking off-camera. Fading side light.',
    shot: 'Medium close-up',
    light: 'Warm side light',
  },
  tomasShadow: {
    kind: 'concept',
    src: concept('concept-shadow-dusk.jpg'),
    focus: '45% 42%',
    people: true,
    title: 'Tomás shadowboxing — intentional motion blur',
    brief:
      'Vertical. Slow shutter (1/15 s): hands blurred, head and feet sharp. Blue-hour light among pines or against a dark limewashed wall.',
    shot: 'Full figure',
    light: 'Blue hour',
    sketch: 'motion',
    lightFrom: 'left',
    alt: 'Homem a fazer sombra ao anoitecer, junto a um muro, entre pinheiros; a respiração vê-se no ar.',
  },
  tomasTechnique: {
    kind: 'photo',
    src: own('tomas-still-kick.jpg'),
    alt: 'O Tomás a pontapear o saco pesado, com a perna alta e o pé de apoio a rodar.',
    focus: '50% 45%',
    note: 'Still from his own bag-work video.',
    title: 'Tomás demonstrates a kick',
    brief: 'Full figure, low angle, on sand or a dune path. Roundhouse kick at chamber point; supporting foot pivoted. Sea mist or overcast sky behind.',
    shot: 'Full figure',
    light: 'Overcast coast',
  },
  firstConversation: {
    kind: 'concept',
    src: concept('concept-terrace-talk.jpg'),
    alt: 'O treinador e uma cliente conversam sentados num degrau de pedra ao entardecer, com luvas e um caderno entre os dois.',
    focus: '50% 45%',
    people: true,
    title: 'First conversation before training',
    brief:
      'Wide-medium. Tomás and a client seated on a terrace step, talking; gloves and a notebook beside them. Soft evening light, linen and timber, unposed.',
    shot: 'Wide-medium',
    light: 'Soft window light',
    sketch: 'seated',
    lightFrom: 'left',
  },
  duoSession: {
    kind: 'concept',
    src: concept('concept-duo-pines.jpg'),
    focus: '55% 55%',
    people: true,
    title: 'Duo session under the pines',
    brief:
      'Wide. Two friends alternating on pads with Tomás on a lawn under stone pines; one waits, laughing, catching breath. Late afternoon, long shadows.',
    shot: 'Wide',
    light: 'Late-afternoon sun',
    sketch: 'three',
    lightFrom: 'right',
    alt: 'Sessão em duo num relvado sob pinheiros: um treinador segura os pads, outro aluno espera a rir.',
  },
  portableKit: {
    kind: 'concept',
    src: concept('concept-kit-terrace.jpg'),
    alt: 'Equipamento portátil num terraço junto ao mar: saco, luvas, ligaduras, garrafa e corda de saltar.',
    focus: '80% 65%',
    people: false,
    title: 'Portable kit at the client’s location',
    brief:
      'Top-down or 45°. Dark leather pads, gloves, wraps, a kettlebell and bands on a teak deck or pale stone terrace. Raking low light, long shadows.',
    shot: 'Detail',
    light: 'Raking window light',
    sketch: 'detail',
    lightFrom: 'left',
  },
  afterSession: {
    kind: 'concept',
    src: concept('concept-after-gate.jpg'),
    alt: 'Dois homens riem junto a um portão de jardim depois do treino, com garrafas de água.',
    focus: '50% 40%',
    people: true,
    title: 'After the session',
    brief:
      'Medium. Client and Tomás laughing, gloves off, sharing water by the deck or garden gate. Sweat visible, shoulders relaxed. The quiet satisfaction of finishing.',
    shot: 'Medium',
    light: 'Open shade, warm',
    sketch: 'two',
    lightFrom: 'left',
  },
};

/* Priority shot list for the first real shoot (most important first).
   Each entry points at the manifest key the photo will replace. */
export const shootPriorities = [
  {
    key: 'tomasPadsBeginner',
    why: 'Hero and padwork section. The single image that explains the service.',
  },
  {
    key: 'tomasCorrecting',
    why: 'Technique section and coaching posts. Shows attention, not intensity.',
  },
  {
    key: 'tomasPortrait',
    why: 'About section and profile image. People book a person.',
  },
  {
    key: 'firstConversation',
    why: 'First-session section. Makes beginners feel expected.',
  },
  {
    key: 'portableKit',
    why: 'Locations section. Proves training can happen anywhere agreed.',
  },
  {
    key: 'tomasShadow',
    why: 'Tomás’s own technique posts and Reel covers.',
  },
  {
    key: 'duoSession',
    why: 'Formats section (duo).',
  },
  {
    key: 'afterSession',
    why: 'Human moment for Instagram and the contact section.',
  },
  {
    key: 'tomasTechnique',
    why: 'Technique posts; second hero option.',
  },
];

/* Extra real shots that will replace reference images (no placeholder yet). */
export const extraShots = {
  locationPines: 'An agreed outdoor location at dusk: pines, dune path or garden, no signage or logos.',
  wrapsPrep: 'Hands being wrapped — client or Tomás — close detail, window light.',
  outdoorWide: 'Wide scene at an agreed outdoor spot, small figures, low sun or sea mist.',
  strengthClient: 'Client doing kettlebell or band work, Tomás observing in frame.',
  conditioningClient: 'Client breathing between rounds, sweat, towel, real effort.',
};

export function getImage(key) {
  const img = images[key];
  if (!img) {
    if (import.meta.env.DEV) console.warn(`[images] Unknown image key: ${key}`);
    return null;
  }
  return { key, ...img };
}
