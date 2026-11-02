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
         'placeholder' – a photo that must be produced (anything showing
                         Tomás himself). Rendered as an art-directed frame
                         with the brief.
         'photo'       – a real, approved photograph (none yet).
   ========================================================================== */

const base = import.meta.env.BASE_URL;
const ref = (file) => `${base}images/reference/${file}`;
const pexels = (id) => `https://www.pexels.com/photo/${id}/`;

export const images = {
  /* ---- Reference imagery (Pexels License) ------------------------------ */

  heroHands: {
    kind: 'reference',
    src: ref('ref-wraps-bench.jpg'),
    alt: 'Mãos a enrolar ligaduras de boxe, sentado num banco de madeira ao ar livre.',
    focus: '52% 60%',
    people: false,
    source: pexels(4790417),
    replaceWith: 'wrapsPrep',
    note: 'Hands only — preparation before a session. Good warmth and texture.',
  },
  wrapsWindow: {
    kind: 'reference',
    src: ref('ref-wraps-window.jpg'),
    alt: 'Homem junto a uma janela, com luz natural lateral, a colocar ligaduras nas mãos.',
    focus: '62% 45%',
    people: true,
    source: pexels(7290053),
    replaceWith: 'wrapsPrep',
    note: 'Window light and a domestic setting. Credible private-training mood.',
  },
  padworkClose: {
    kind: 'reference',
    src: ref('ref-padwork-close.jpg'),
    alt: 'Treino de pads ao ar livre: um treinador sorri enquanto segura os pads para outra pessoa.',
    focus: '55% 40%',
    people: true,
    source: pexels(5837157),
    replaceWith: 'tomasPadsBeginner',
    note: 'Warm interaction and late light. Real shoot: Tomás + an adult beginner.',
  },
  padworkWide: {
    kind: 'reference',
    src: ref('ref-padwork-wide.jpg'),
    alt: 'Plano aberto de duas pessoas a treinar pads num areal, ao fim da tarde.',
    focus: '42% 55%',
    people: true,
    source: pexels(5837153),
    replaceWith: 'outdoorWide',
    note: 'Wide outdoor scene. Real shoot: an agreed outdoor spot in Lisbon.',
  },
  kettlebellLight: {
    kind: 'reference',
    src: ref('ref-kettlebell-light.jpg'),
    alt: 'Kettlebell preto num tapete, atravessado por uma faixa de luz de janela.',
    focus: '45% 45%',
    people: false,
    source: pexels(33387759),
    replaceWith: 'portableKit',
    note: 'Hard side light, deep shadow that keeps detail.',
  },
  kettlebellPress: {
    kind: 'reference',
    src: ref('ref-kettlebell-press.jpg'),
    alt: 'Pessoa a segurar um kettlebell à frente do peito com os braços estendidos.',
    focus: '50% 35%',
    people: true,
    source: pexels(13993022),
    replaceWith: 'strengthClient',
    note: 'Strength detail. Real shoot: a client doing kettlebell work, Tomás watching.',
  },
  adultPractice: {
    kind: 'reference',
    src: ref('ref-adult-practice.jpg'),
    alt: 'Homem de cabelo grisalho em guarda, com luvas vermelhas, junto a uma janela.',
    focus: '60% 35%',
    people: true,
    source: pexels(6815662),
    replaceWith: 'tomasPadsBeginner',
    note: 'An ordinary adult practising. Real clients come in every age and level.',
  },
  coachGloves: {
    kind: 'reference',
    src: ref('ref-coach-gloves.jpg'),
    alt: 'Um treinador ajusta as luvas de outra pessoa diante de uma parede de tijolo.',
    focus: '50% 50%',
    people: true,
    source: pexels(6551187),
    replaceWith: 'tomasCorrecting',
    note: 'Attentive detail — hands helping hands.',
  },
  wrappingClient: {
    kind: 'reference',
    src: ref('ref-wrapping-client.jpg'),
    alt: 'Um treinador coloca ligaduras na mão de outra pessoa antes do treino.',
    focus: '50% 55%',
    people: true,
    source: pexels(4058317),
    replaceWith: 'firstConversation',
    note: 'A genuine moment of care before training.',
  },
  towelRest: {
    kind: 'reference',
    src: ref('ref-towel-rest.jpg'),
    alt: 'Homem a limpar o suor da cara com uma toalha, a recuperar o fôlego.',
    focus: '50% 30%',
    people: true,
    source: pexels(6455951),
    replaceWith: 'conditioningClient',
    note: 'Breath and sweat between rounds.',
  },
  shadowboxing: {
    kind: 'reference',
    src: ref('ref-shadowboxing.jpg'),
    alt: 'Homem em guarda a fazer sombra numa sala de treino com luz fria.',
    focus: '50% 40%',
    people: true,
    source: pexels(9944902),
    replaceWith: 'tomasShadow',
    note: 'Technique and concentration. Real shoot needs Tomás himself.',
  },
  wrappedFist: {
    kind: 'reference',
    src: ref('ref-wrapped-fist.jpg'),
    alt: 'Pormenor de um punho com ligadura branca, em guarda.',
    focus: '30% 50%',
    people: false,
    source: pexels(9944002),
    replaceWith: 'wrapsPrep',
    note: 'Close detail with shallow depth of field.',
  },

  /* ---- Placeholders: photographs to produce ---------------------------- */

  tomasCorrecting: {
    kind: 'placeholder',
    title: 'Tomás corrects a client’s guard',
    brief:
      'Medium shot. Tomás’s hand adjusts the client’s elbow; client sharp, Tomás in three-quarter profile. Window light from the left.',
    shot: 'Medium',
    light: 'Side window light',
    sketch: 'two',
    lightFrom: 'left',
    alt: 'Fotografia a produzir: o Tomás corrige a guarda de um cliente.',
  },
  tomasPadsBeginner: {
    kind: 'placeholder',
    title: 'Tomás holds pads for an adult beginner',
    brief:
      'Medium-wide. Beginner mid-jab, focused; Tomás holding pads, watching their feet. Late-afternoon sun, faint motion in the glove.',
    shot: 'Medium-wide',
    light: 'Late-afternoon sun',
    sketch: 'two',
    lightFrom: 'right',
    alt: 'Fotografia a produzir: o Tomás segura os pads para um principiante.',
  },
  tomasPortrait: {
    kind: 'placeholder',
    title: 'Relaxed portrait between rounds',
    brief:
      'Medium close-up. Tomás seated, wraps on, towel on shoulder, looking off-camera with an easy half-smile. Warm side light, real skin, fine grain.',
    shot: 'Medium close-up',
    light: 'Warm side light',
    sketch: 'single',
    lightFrom: 'left',
    alt: 'Fotografia a produzir: retrato descontraído do Tomás entre rondas.',
  },
  tomasShadow: {
    kind: 'placeholder',
    title: 'Tomás shadowboxing — intentional motion blur',
    brief:
      'Vertical. Slow shutter (1/15 s): hands blurred, head and feet sharp. Hard side light against a dark concrete wall.',
    shot: 'Full figure',
    light: 'Hard side light',
    sketch: 'motion',
    lightFrom: 'left',
    alt: 'Fotografia a produzir: o Tomás a fazer sombra, com desfoque de movimento.',
  },
  tomasTechnique: {
    kind: 'placeholder',
    title: 'Tomás demonstrates a kick',
    brief:
      'Full figure, low angle. Roundhouse kick at chamber point; supporting foot pivoted. Sharp, clean background, sun from behind-left.',
    shot: 'Full figure',
    light: 'Backlit late sun',
    sketch: 'motion',
    lightFrom: 'right',
    alt: 'Fotografia a produzir: o Tomás demonstra um pontapé circular.',
  },
  firstConversation: {
    kind: 'placeholder',
    title: 'First conversation before training',
    brief:
      'Wide-medium. Tomás and a client seated on the floor or a low step, talking; gloves and a notebook beside them. Soft window light, unposed.',
    shot: 'Wide-medium',
    light: 'Soft window light',
    sketch: 'seated',
    lightFrom: 'left',
    alt: 'Fotografia a produzir: conversa entre o Tomás e um cliente antes do treino.',
  },
  duoSession: {
    kind: 'placeholder',
    title: 'Duo session on a terrace',
    brief:
      'Wide. Two friends alternating on pads with Tomás; one waits, laughing, catching breath. Terrace or courtyard, late afternoon.',
    shot: 'Wide',
    light: 'Late-afternoon sun',
    sketch: 'three',
    lightFrom: 'right',
    alt: 'Fotografia a produzir: sessão em duo num terraço.',
  },
  portableKit: {
    kind: 'placeholder',
    title: 'Portable kit at the client’s location',
    brief:
      'Top-down or 45°. Oxblood pads, gloves, wraps, a kettlebell and bands on a wooden floor or terrace tiles. Strong window light, long shadows.',
    shot: 'Detail',
    light: 'Raking window light',
    sketch: 'detail',
    lightFrom: 'left',
    alt: 'Fotografia a produzir: equipamento portátil no local do cliente.',
  },
  afterSession: {
    kind: 'placeholder',
    title: 'After the session',
    brief:
      'Medium. Client and Tomás laughing, gloves off, sharing water. Sweat visible, shoulders relaxed. The quiet satisfaction of finishing.',
    shot: 'Medium',
    light: 'Open shade, warm',
    sketch: 'two',
    lightFrom: 'left',
    alt: 'Fotografia a produzir: final da sessão, cliente e Tomás descontraídos.',
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
  wrapsPrep: 'Hands being wrapped — client or Tomás — close detail, window light.',
  outdoorWide: 'Wide scene at an agreed outdoor spot in Lisbon, small figures, late sun.',
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
