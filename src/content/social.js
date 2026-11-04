/* ==========================================================================
   Instagram content — European Portuguese
   Nine posts in feed order (newest first) plus three Story / Reel covers.
   `category` drives the subject-balance check shown in the brand view.
   ========================================================================== */

export const categories = {
  coaching: 'Coaching / client practice',
  tomas: 'Tomás training / technique',
  portrait: 'Portrait / human moment',
  equipment: 'Equipment / preparation',
  explainer: 'Useful training explanation',
  service: 'Service / booking',
};

export const profile = {
  handle: 'tomas.queiroz',
  name: 'Tomás Queiroz',
  bio: ['Treino privado de kickboxing e força', 'Lisboa · no local combinado', 'Individual ou duo · todos os níveis'],
  link: 'Pedir uma sessão',
};

export const posts = [
  {
    id: 'p1',
    category: 'coaching',
    layout: 'photo',
    image: 'padworkClose',
    headline: ['Pads', '*ao teu ritmo.*'],
    caption_pt:
      'Combinações curtas, repetidas com atenção. O ritmo sobe quando estás pronto, não antes. Pede uma sessão pelo link na bio.',
  },
  {
    id: 'p2',
    category: 'explainer',
    layout: 'idea',
    tone: 'dark',
    kicker: 'Técnica · Respiração',
    idea: ['Expira', 'em cada', '*golpe.*'],
    detail: 'Soltar o ar mantém o tronco firme e o ritmo constante. Prender a respiração cansa mais depressa.',
    caption_pt:
      'Um dos primeiros hábitos que trabalhamos: expirar a cada golpe. Experimenta na próxima sessão de sombra e repara na diferença.',
  },
  {
    id: 'p3',
    category: 'tomas',
    layout: 'photo',
    image: 'tomasShadow',
    headline: ['Repetir', 'até ficar', '*simples.*'],
    caption_pt: 'Sombra antes do treino. A mesma combinação, cem vezes, até não ser preciso pensar nela.',
  },
  {
    id: 'p4',
    category: 'portrait',
    layout: 'photo',
    image: 'tomasPortrait',
    place: 'bottom',
    caption: 'Entre rondas.',
    caption_pt: 'Um minuto para respirar, beber água e falar sobre a ronda seguinte.',
  },
  {
    id: 'p5',
    category: 'coaching',
    layout: 'photo',
    image: 'coachGloves',
    headline: ['Primeiro,', '*a guarda.*'],
    caption_pt:
      'Antes de qualquer golpe, aprendemos onde ficam as mãos e porquê. Uma boa guarda protege-te e prepara o movimento seguinte.',
  },
  {
    id: 'p6',
    category: 'service',
    layout: 'info',
    tone: 'light',
    kicker: 'Treino privado',
    title: ['Kickboxing', 'e força,', '*em Lisboa.*'],
    items: [
      { k: 'Formato', v: 'Individual ou duo' },
      { k: 'Local', v: 'Combinado contigo' },
      { k: 'Nível', v: 'Do primeiro treino em diante' },
    ],
    cta: 'Pedir uma sessão · link na bio',
    caption_pt:
      'Treino privado de kickboxing e força em Lisboa, no local combinado. Conta-nos os teus objetivos pelo link na bio.',
  },
  {
    id: 'p7',
    category: 'equipment',
    layout: 'photo',
    image: 'heroHands',
    place: 'top',
    headline: ['Antes da', '*primeira ronda.*'],
    caption_pt: 'Ligaduras bem colocadas protegem pulsos e nós dos dedos. Mostramos como na primeira sessão.',
  },
  {
    id: 'p8',
    category: 'tomas',
    layout: 'photo',
    image: 'tomasTechnique',
    headline: ['Roda o pé', '*de apoio.*'],
    caption_pt: 'No pontapé circular, o pé de apoio roda primeiro. É daí que vem o alcance e a proteção do joelho.',
  },
  {
    id: 'p9',
    category: 'coaching',
    layout: 'photo',
    image: 'adultPractice',
    headline: ['Começar', '*do zero.*'],
    caption_pt: 'Nunca calçaste umas luvas? Ótimo. Começamos pela postura e vamos ao teu ritmo.',
  },
];

export const stories = [
  {
    id: 's1',
    label: 'Reel cover · technique',
    layout: 'photo',
    image: 'tomasShadow',
    kicker: 'Reel · Técnica',
    headline: ['3 erros', 'na *guarda.*'],
  },
  {
    id: 's2',
    label: 'Story · one useful idea',
    layout: 'idea',
    tone: 'light',
    kicker: 'Primeira sessão',
    idea: ['Não precisas', 'de *experiência.*'],
    detail: 'Começamos com uma conversa, encontramos o teu ponto de partida e treinamos ao teu ritmo.',
  },
  {
    id: 's3',
    label: 'Story · practical next step',
    layout: 'info',
    tone: 'dark',
    kicker: 'Locais',
    title: ['Onde', '*treinamos?*'],
    items: [
      { k: 'A', v: 'Em casa' },
      { k: 'B', v: 'Ao ar livre' },
      { k: 'C', v: 'No teu prédio ou empresa' },
      { k: 'D', v: 'Espaço interior, a confirmar' },
    ],
    cta: 'Envia mensagem',
  },
];
