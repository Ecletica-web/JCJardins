/* ==========================================================================
   Landing page copy — English
   Same shape as landing.js (Portuguese). Edit text here; components only
   handle layout. Rules: no prices, no invented credentials, no
   testimonials, no studio.
   ========================================================================== */

export const nav = [
  { href: '#sobre', label: 'Origin' },
  { href: '#treino', label: 'Craft' },
  { href: '#primeira-sessao', label: 'Day one' },
  { href: '#formatos', label: 'Formats' },
  { href: '#locais', label: 'Places' },
];

export const hero = {
  headline: ['Boxing, kickboxing', 'and strength.', 'In private.'],
  support: 'Lisbon. At your pace, in a place we agree on.',
  primary: { label: 'Request a session', href: '#contacto' },
  secondary: { label: 'Look closer', href: '#treino' },
  strip: ['Boxing', 'Kickboxing', 'Pads', 'Strength'],
};

export const experience = {
  kicker: 'The craft',
  title: ['Simple strikes.', '*Years to refine them.*'],
  intro: 'The body learns slowly. Then, suddenly, it knows.',
  pillars: [
    {
      n: '01',
      title: 'Technique',
      image: 'tomasCorrecting',
      video: 'real-bagwork',
      text: 'The guard that never drops. The foot that turns before the hip. One detail at a time, until it no longer needs thinking.',
    },
    {
      n: '02',
      title: 'Pads',
      image: 'padsPines',
      video: 'real-padwork',
      focus: '50% 60%',
      text: 'A conversation without words. The hands across from you say where, when and how much. Repeat until it sounds right.',
    },
    {
      n: '03',
      title: 'Strength',
      image: 'kettlebellLight',
      text: 'Legs, core, shoulders. Strength you don’t see, but hear in the strike.',
    },
    {
      n: '04',
      title: 'Conditioning',
      image: 'towelRest',
      text: 'Short rounds. Silence between them. Learning to breathe when it’s hard.',
    },
  ],
};

export const interlude = {
  lines: ['A thousand times', 'the same strike.', 'None the same.'],
};

export const about = {
  kicker: 'Origin',
  storyTitle: 'What the ring teaches',
  methodTitle: 'Method',
  title: ['Shaped in the ring.', '*Refined in the corner.*'],
  paragraphs: [
    'He competed in kickboxing. Today he prepares and corners those who compete. Trained in exercise and fitness, boxing and kickboxing.',
    'That haste has a price. That detail decides. That everyone arrives from somewhere different, and that is where you begin.',
    'For those who compete, and for those who have never worn gloves.',
  ],
  credentials: [
    {
      group: 'Qualifications',
      items: [
        'Higher Technical Course in Exercise and Fitness',
        'Boxing Coach course',
        'Kickboxing Coach course',
      ],
    },
    {
      group: 'Competition',
      items: ['Kickboxing athlete', 'Prepares and corners athletes for competition'],
    },
  ],
  principles: [
    { title: 'Watch', text: 'First, seeing how you move. Only then, changing it.' },
    { title: 'Explain', text: 'Every correction comes with a reason you keep.' },
    { title: 'Adjust', text: 'The plan listens to your day.' },
  ],
};

export const statements = {
  intro: {
    image: 'tomasRingWide',
    lines: ['One coach.', 'One client.', '*No one else.*'],
  },
  close: {
    image: 'glovesBw',
    lines: ['A set time.', 'An agreed place.', '*The rest stays between us.*'],
  },
};

export const record = {
  caption: 'Training. Fight nights. The same eye.',
  photos: [
    { image: 'tomasTeam', ratio: 2.13, slot: 'team' },
    { image: 'tomasRingside', ratio: 1.72, slot: 'ring' },
    { image: 'tomasTeamTrophy', ratio: 0.75, slot: 'trophy' },
    { image: 'tomasFightNight', ratio: 1.24, slot: 'night' },
  ],
};

export const firstSession = {
  kicker: 'Day one',
  title: ['Nobody starts', '*ready.*'],
  intro: 'No experience needed. Only the will to step in.',
  steps: [
    { title: 'Conversation', text: 'What you’re looking for, what you’ve done, where the body asks for care.' },
    { title: 'Starting point', text: 'A few simple movements. Nothing to the limit. Just to see where we begin.' },
    { title: 'Practice', text: 'Guard, first strikes, a block of padwork. Everything explained, nothing rushed.' },
    { title: 'The way on', text: 'At the end, a proposal: rhythm, format and what to work on next.' },
  ],
};

export const inSession = {
  kicker: 'In session',
  title: ['Hear the strike', '*before you see it.*'],
  text: 'Padwork at your pace. Corrections in the space between combinations.',
  points: [],
  cta: 'Book your first session',
};

export const formats = {
  kicker: 'Formats',
  title: ['Alone, as two', '*or as a group.*'],
  items: [
    {
      name: 'Individual',
      image: 'adultPractice',
      lead: 'All of the attention. None of the noise.',
      text: 'The plan follows your goals, your schedule and the time you need to learn.',
      points: ['Constant correction', 'Your pace', 'A plan that evolves with you'],
    },
    {
      name: 'Duo',
      image: 'duoSession',
      lead: 'Train with someone you already know.',
      text: 'You take turns on the pads and work in pairs. Each with your own corrections.',
      points: ['Two levels, one session', 'Partner work', 'Shared rhythm'],
    },
    {
      name: 'Group',
      image: 'tomasTeam',
      lead: 'A few. Chosen by you.',
      text: 'Three to six people who already know each other: friends, family, a team. Rounds in pairs, corrections for each, the same care.',
      points: ['Small, closed groups', 'Pad rounds in pairs', 'One agreed place for everyone'],
    },
  ],
  note: 'The details are kept for the first conversation.',
};

export const locations = {
  kicker: 'Places',
  title: ['Wherever', '*we agree.*'],
  intro: 'Lisbon. The place is agreed; the kit comes with us.',
  strip: ['At home', 'Outdoors', 'Your building or workplace', 'Indoor space, to be confirmed'],
  options: [
    { title: 'At home', text: 'A living room, a terrace, a garden. Room for a few steps is enough.' },
    { title: 'Outdoors', text: 'Under pines, by the sea, somewhere quiet near you.' },
    { title: 'At your building or workplace', text: 'A shared room or the residents’ gym, if you have access.' },
    { title: 'Indoor space', text: 'If you need shelter, we discuss options. Nothing is booked until confirmed.' },
  ],
};

export const contact = {
  kicker: 'Contact',
  title: ['Begin', '*here.*'],
  intro: 'A few lines about you. A reply follows to arrange the first conversation.',
  goals: ['Learn boxing', 'Learn kickboxing', 'Get stronger', 'Improve fitness', 'Get back into training', 'Relieve stress'],
  availability: ['Early morning', 'Morning', 'Lunchtime', 'Late afternoon', 'Evening', 'Weekend'],
  formats: ['Individual', 'Duo', 'Group', 'Not sure yet'],
};

export const footer = {
  line: 'Boxing, kickboxing and strength. In private, in Lisbon.',
};

/* Interface strings (buttons, labels, form messages) */
export const ui = {
  descriptor: 'Boxing · Kickboxing',
  more: 'See more',
  scrollCue: 'Keep reading',
  prev: 'Previous photo',
  next: 'Next photo',
  slidesLabel: 'Training and competition photos',
  less: 'Close',
  lang: { label: 'Language', pt: 'PT', en: 'EN', ptName: 'Português', enName: 'English' },
  skip: 'Skip to content',
  home: 'Tomás Queiroz — home',
  navMain: 'Main',
  navMobile: 'Mobile menu',
  navFooter: 'Footer',
  menu: 'Menu',
  close: 'Close',
  cta: 'Request a session',
  contactLink: 'Contact',
  heroNote: ['Padwork', 'at dusk, among the pines'],
  stripLabel: 'What the training includes',
  stripPlace: 'Lisbon · at an agreed place',
  interludeLabel: 'Repetition',
  photoCredit: 'Photo: B&A Art Moments',
  video: {
    play: 'Play video',
    pause: 'Pause video',
    'real-padwork': 'Video: Tomás holds the pads while an athlete works on combinations.',
    'real-bagwork': 'Video: Tomás trains kicks and punches on the heavy bag.',
    'real-coaching': 'Video: Tomás holds the pads for a client during a session.',
  },
  form: {
    demo: 'Prototype: this form does not send any data.',
    flow: {
      progress: 'Progress',
      name: 'What’s your name?',
      contact: 'Where do we reply?',
      contactHint: 'Email or phone.',
      area: 'Which part of Lisbon?',
      areaHint: 'Neighbourhood or parish.',
      goals: 'What are you after?',
      goalsHint: 'One or more. Add a note if you like.',
      availability: 'When are you usually free?',
      availabilityHint: 'One or more.',
      format: 'Alone, as two or as a group?',
      formatHint: 'Pick one to continue.',
      review: 'Does this look right?',
      edit: 'Edit',
      continue: 'Continue',
      back: 'Back',
      enter: 'or press Enter ↵',
    },
    optional: '(optional)',
    name: 'Name',
    contact: 'Email or phone',
    area: 'Area',
    areaHint: 'The Lisbon neighbourhood or parish where you’d like to train.',
    areaPlaceholder: 'E.g. Campo de Ourique',
    goals: 'Goals',
    goalsMore: 'Tell us more about your goals',
    goalsPlaceholder: 'Tell us more if you like: past experience, injuries, what motivates you.',
    availability: 'Availability',
    availabilityMore: 'Preferred days or times',
    availabilityPlaceholder: 'Preferred days or times (optional)',
    format: 'Format',
    submit: 'Request a session',
    required: 'Fields marked * are required.',
    errors: {
      name: 'Enter your name.',
      contact: 'Enter an email or phone number so we can reply.',
      contactInvalid: 'Enter a valid email or a phone number with at least 9 digits.',
      area: 'Enter the area of Lisbon where you’d like to train.',
      goals: 'Choose at least one goal or describe it.',
      availability: 'Tell us when you’re usually available.',
    },
    confirm: {
      kicker: 'Demo',
      title: ['Request ready.', 'Nothing was sent.'],
      text: 'This form is a local demo in the prototype. Your details never left this browser and were not stored. On the final site, this request would reach Tomás.',
      edit: 'Edit request',
      restart: 'Start again',
    },
  },
};
