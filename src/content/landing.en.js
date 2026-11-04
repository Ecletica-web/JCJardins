/* ==========================================================================
   Landing page copy — English
   Same shape as landing.js (Portuguese). Edit text here; components only
   handle layout. Rules: no prices, no invented credentials, no
   testimonials, no studio.
   ========================================================================== */

export const nav = [
  { href: '#sobre', label: 'Tomás' },
  { href: '#treino', label: 'Training' },
  { href: '#primeira-sessao', label: 'First session' },
  { href: '#formatos', label: 'Formats' },
  { href: '#locais', label: 'Locations' },
];

export const hero = {
  headline: ['Private boxing,', 'kickboxing and', 'strength training.'],
  support: 'In Lisbon, at your pace and at a place we agree on.',
  primary: { label: 'Request a session', href: '#contacto' },
  secondary: { label: 'See how it works', href: '#treino' },
  strip: ['Boxing', 'Kickboxing', 'Pads', 'Strength'],
};

export const experience = {
  kicker: 'The training',
  title: ['Competition technique,', 'taught with patience.'],
  intro: 'Boxing, kickboxing, pads and strength. You choose the focus; the attention to detail stays the same.',
  pillars: [
    {
      n: '01',
      title: 'Technique',
      image: 'tomasCorrecting',
      video: 'real-bagwork',
      text: 'Guard, stance, footwork, punches and, in kickboxing, kicks. Tomás demonstrates, watches and corrects one detail at a time, until the movement makes sense in your body.',
    },
    {
      n: '02',
      title: 'Pads',
      image: 'padsPines',
      video: 'real-padwork',
      focus: '50% 60%',
      text: 'With Tomás holding the pads, combinations gain timing and precision. You repeat, adjust, repeat again. The pace rises when you are ready, not before.',
    },
    {
      n: '03',
      title: 'Strength',
      image: 'kettlebellLight',
      text: 'Kettlebells, bands and bodyweight to build a solid base: legs, core and shoulders. Strength you feel in your strikes and in everyday life.',
    },
    {
      n: '04',
      title: 'Conditioning',
      image: 'towelRest',
      text: 'Short rounds, measured rests and controlled breathing. You build stamina without losing your technique along the way.',
    },
  ],
};

export const interlude = {
  lines: ['Repeat.', 'Breathe.', 'Repeat better.'],
};

export const about = {
  kicker: 'About Tomás',
  storyTitle: 'His path',
  methodTitle: 'How he coaches',
  title: ['From the ring', 'to your training.'],
  paragraphs: [
    'Tomás competed in kickboxing and today prepares and corners athletes for competition. He is qualified in exercise and fitness, and as a boxing and kickboxing coach.',
    'Competition taught him the value of small details: the guard that stays up, the foot that pivots at the right moment, the breath that never gets held. He brings that technical eye to every session, with the patience of someone who knows every person starts from a different place.',
    'He trains adults of all levels, including people who have never put on a pair of gloves.',
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
    { title: 'Watch first', text: 'Before correcting anything, Tomás sees how you move and what you find hard.' },
    { title: 'Explain why', text: 'Every correction comes with a simple reason you can take with you.' },
    { title: 'Fit the person', text: 'The plan changes with your day, your energy and your goals.' },
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
  caption: 'In training and on fight nights.',
  photos: [
    { image: 'tomasTeam', ratio: 2.13, slot: 'team' },
    { image: 'tomasRingside', ratio: 1.72, slot: 'ring' },
    { image: 'tomasTeamTrophy', ratio: 0.75, slot: 'trophy' },
    { image: 'tomasFightNight', ratio: 1.24, slot: 'night' },
  ],
};

export const firstSession = {
  kicker: 'First session',
  title: ['What happens', 'in your first session.'],
  intro: 'You don’t need experience or to be in shape to start. You just need to come willing to try.',
  steps: [
    {
      title: 'Conversation',
      text: 'We talk about your goals, your experience, any injuries or limitations, and what brought you here.',
    },
    {
      title: 'Starting point',
      text: 'A few simple movements show your mobility, coordination and fitness. No tests to the limit.',
    },
    {
      title: 'Guided practice',
      text: 'Guard, stance and first strikes, then a block of padwork and some strength work. Everything explained step by step.',
    },
    {
      title: 'Recommendation',
      text: 'At the end, Tomás suggests how to continue: how often, which format and what to focus on next.',
    },
  ],
};

export const inSession = {
  kicker: 'In session',
  title: ['Guided practice,', '*in real time.*'],
  text: 'Padwork at your pace, with corrections between combinations.',
  points: ['Corrections between combinations', 'Pace adjusted to each person', 'Relaxed atmosphere, real standards'],
  cta: 'Book your first session',
};

export const formats = {
  kicker: 'Formats',
  title: ['On your own', 'or as a pair.'],
  items: [
    {
      name: 'Individual',
      image: 'adultPractice',
      lead: 'Full attention, from the first minute to the last.',
      text: 'The plan follows your goals, your schedule and your progress. Ideal if you want to learn technique carefully or return to training safely.',
      points: ['Continuous corrections', 'Pace set by you', 'Plan adjusted session by session'],
    },
    {
      name: 'Duo',
      image: 'duoSession',
      lead: 'Train with someone you know.',
      text: 'For friends, couples or family. You take turns on the pads and work in pairs, with individual corrections for each of you.',
      points: ['Two levels, one session', 'Partner work on the pads', 'Shared motivation'],
    },
  ],
  note: 'Details for each format are shared at first contact.',
};

export const locations = {
  kicker: 'Locations',
  title: ['At a place', 'we agree on.'],
  intro: 'The training comes to you, in Lisbon. We agree on the place; Tomás brings the kit.',
  options: [
    { title: 'At home', text: 'Living room, terrace, garden or by the pool. You only need room to take a few steps safely.' },
    { title: 'Outdoors', text: 'Under the pines, in a garden or near the sea, in a suitable spot close to you.' },
    { title: 'At your building or workplace', text: 'A shared room or the residents’ gym, if you have access.' },
    {
      title: 'Indoor space',
      text: 'If you need a covered space, we can discuss options. Nothing is booked until it is confirmed.',
    },
  ],
};

export const contact = {
  kicker: 'Contact',
  title: ['Request', 'a session.'],
  intro: 'Tell us a little about yourself. Tomás will reply to arrange a first conversation.',
  goals: ['Learn boxing', 'Learn kickboxing', 'Get stronger', 'Improve fitness', 'Get back into training', 'Relieve stress'],
  availability: ['Early morning', 'Morning', 'Lunchtime', 'Late afternoon', 'Evening', 'Weekend'],
  formats: ['Individual', 'Duo', 'Not sure yet'],
};

export const footer = {
  line: 'Private boxing, kickboxing and strength training in Lisbon.',
};

/* Interface strings (buttons, labels, form messages) */
export const ui = {
  descriptor: 'Boxing · Kickboxing',
  more: 'See more',
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
      contact: 'Enter an email or phone number so Tomás can reply.',
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
