/* ==========================================================================
   Landing page copy — European Portuguese
   Edit text here; components only handle layout.
   Rules: no prices, no invented credentials, no testimonials, no studio.
   ========================================================================== */

export const nav = [
  { href: '#sobre', label: 'Origem' },
  { href: '#treino', label: 'Ofício' },
  { href: '#primeira-sessao', label: 'Primeiro dia' },
  { href: '#formatos', label: 'Formatos' },
  { href: '#locais', label: 'Lugares' },
];

export const hero = {
  headline: ['Boxe, kickboxing', 'e força.', 'Em privado.'],
  support: 'Lisboa. Ao teu ritmo, num lugar combinado.',
  primary: { label: 'Pedir uma sessão', href: '#contacto' },
  secondary: { label: 'Ver mais de perto', href: '#treino' },
  strip: ['Boxe', 'Kickboxing', 'Pads', 'Força'],
};

export const experience = {
  kicker: 'O ofício',
  title: ['Golpes simples.', '*Anos a afiná-los.*'],
  intro: 'O corpo aprende devagar. Depois, de repente, sabe.',
  pillars: [
    {
      n: '01',
      title: 'Técnica',
      image: 'tomasCorrecting',
      video: 'real-bagwork',
      text: 'A guarda que não cai. O pé que roda antes da anca. Um detalhe de cada vez, até deixar de ser pensado.',
    },
    {
      n: '02',
      title: 'Pads',
      image: 'padsPines',
      video: 'real-padwork',
      focus: '50% 60%',
      text: 'Um diálogo sem palavras. As mãos do outro lado dizem onde, quando e quanto. Repetir até soar certo.',
    },
    {
      n: '03',
      title: 'Força',
      image: 'kettlebellLight',
      text: 'Pernas, tronco, ombros. A força que não se vê, mas se ouve no golpe.',
    },
    {
      n: '04',
      title: 'Condicionamento',
      image: 'towelRest',
      text: 'Rondas curtas. Silêncio entre elas. Aprender a respirar quando custa.',
    },
  ],
};

export const interlude = {
  lines: ['Repetir.', 'Respirar.', 'Repetir melhor.'],
};

export const about = {
  kicker: 'Origem',
  storyTitle: 'O que o ringue ensina',
  methodTitle: 'Método',
  title: ['Formado no ringue.', '*Afinado no canto.*'],
  paragraphs: [
    'Competiu em kickboxing. Hoje prepara e acompanha quem compete. Formação em exercício físico, boxe e kickboxing.',
    'Que a pressa se paga. Que o pormenor decide. Que cada pessoa chega de um lugar diferente, e é daí que se parte.',
    'Para quem compete, e para quem nunca calçou umas luvas.',
  ],
  credentials: [
    {
      group: 'Formação',
      items: [
        'Curso Técnico Especialista em Exercício Físico',
        'Curso de Treinador de Boxe',
        'Curso de Treinador de Kickboxing',
      ],
    },
    {
      group: 'Competição',
      items: ['Atleta de kickboxing', 'Prepara e acompanha atletas em competição'],
    },
  ],
  principles: [
    { title: 'Observar', text: 'Primeiro, ver como te moves. Só depois, mudar.' },
    { title: 'Explicar', text: 'Cada correção traz uma razão que levas contigo.' },
    { title: 'Ajustar', text: 'O plano escuta o teu dia.' },
  ],
};

export const statements = {
  intro: {
    image: 'tomasRingWide',
    lines: ['Um treinador.', 'Um aluno.', '*Mais ninguém.*'],
  },
  close: {
    image: 'glovesBw',
    lines: ['Hora marcada.', 'Local combinado.', '*O resto fica entre nós.*'],
  },
};

export const record = {
  caption: 'Treino. Noites de combate. O mesmo olhar.',
  photos: [
    { image: 'tomasTeam', ratio: 2.13, slot: 'team' },
    { image: 'tomasRingside', ratio: 1.72, slot: 'ring' },
    { image: 'tomasTeamTrophy', ratio: 0.75, slot: 'trophy' },
    { image: 'tomasFightNight', ratio: 1.24, slot: 'night' },
  ],
};

export const firstSession = {
  kicker: 'Primeiro dia',
  title: ['Ninguém começa', '*pronto.*'],
  intro: 'Não é preciso experiência. Só vontade de entrar.',
  steps: [
    { title: 'Conversa', text: 'O que procuras, o que já fizeste, onde o corpo pede cuidado.' },
    { title: 'Ponto de partida', text: 'Alguns movimentos simples. Nada ao limite. Só para perceber de onde partimos.' },
    { title: 'Prática', text: 'Guarda, primeiros golpes, um bloco de pads. Tudo explicado, nada apressado.' },
    { title: 'Caminho', text: 'No fim, uma proposta: ritmo, formato e o que trabalhar a seguir.' },
  ],
};

export const inSession = {
  kicker: 'Em sessão',
  title: ['Ouvir o golpe', '*antes de o ver.*'],
  text: 'Pads ao teu ritmo. Correções no intervalo entre combinações.',
  points: [],
  cta: 'Marcar a primeira sessão',
};

export const formats = {
  kicker: 'Formatos',
  title: ['A sós, a dois', '*ou em grupo.*'],
  items: [
    {
      name: 'Individual',
      image: 'adultPractice',
      lead: 'Toda a atenção. Nenhum ruído.',
      text: 'O plano segue os teus objetivos, o teu horário e o tempo que precisas para aprender.',
      points: ['Correção contínua', 'O teu ritmo', 'Um plano que evolui contigo'],
    },
    {
      name: 'Duo',
      image: 'duoSession',
      lead: 'Treinar com quem já conheces.',
      text: 'Alternam nos pads, trabalham a pares. Cada um com as suas correções.',
      points: ['Dois níveis, uma sessão', 'Trabalho a pares', 'Ritmo partilhado'],
    },
    {
      name: 'Grupo',
      image: 'tomasTeam',
      lead: 'Poucos. Escolhidos por ti.',
      text: 'Três a seis pessoas que já se conhecem: amigos, família, uma equipa. Rondas a pares, correções a cada um, o mesmo cuidado.',
      points: ['Grupos pequenos, fechados', 'Rondas a pares nos pads', 'Local combinado para todos'],
    },
  ],
  note: 'Os detalhes ficam para a primeira conversa.',
};

export const locations = {
  kicker: 'Lugares',
  title: ['Onde for', '*combinado.*'],
  intro: 'Lisboa. O lugar combina-se; o equipamento vem connosco.',
  strip: ['Em casa', 'Ao ar livre', 'No teu prédio ou empresa', 'Espaço interior, a confirmar'],
  options: [
    { title: 'Em casa', text: 'Uma sala, um terraço, um jardim. Basta espaço para alguns passos.' },
    { title: 'Ao ar livre', text: 'Sob pinheiros, junto ao mar, num lugar tranquilo perto de ti.' },
    { title: 'No teu prédio ou empresa', text: 'Uma sala comum ou o ginásio do condomínio, se tiveres acesso.' },
    { title: 'Espaço interior', text: 'Se precisares de abrigo, falamos de opções. Nada fica marcado sem confirmação.' },
  ],
};

export const contact = {
  kicker: 'Contacto',
  title: ['Começa', '*por aqui.*'],
  intro: 'Algumas linhas sobre ti. A resposta chega para combinar a primeira conversa.',
  goals: ['Aprender boxe', 'Aprender kickboxing', 'Ganhar força', 'Melhorar a condição física', 'Voltar a treinar', 'Aliviar o stress'],
  availability: ['Manhã cedo', 'Manhã', 'Hora de almoço', 'Fim de tarde', 'Noite', 'Fim de semana'],
  formats: ['Individual', 'Duo', 'Grupo', 'Ainda não sei'],
};

export const footer = {
  line: 'Boxe, kickboxing e força. Em privado, em Lisboa.',
};

/* Interface strings (buttons, labels, form messages) */
export const ui = {
  descriptor: 'Boxe · Kickboxing',
  more: 'Ver mais',
  scrollCue: 'Continuar a ler',
  prev: 'Fotografia anterior',
  next: 'Fotografia seguinte',
  slidesLabel: 'Fotografias de treino e competição',
  less: 'Fechar',
  lang: { label: 'Idioma', pt: 'PT', en: 'EN', ptName: 'Português', enName: 'English' },
  skip: 'Saltar para o conteúdo',
  home: 'Tomás Queiroz — início',
  navMain: 'Principal',
  navMobile: 'Menu móvel',
  navFooter: 'Rodapé',
  menu: 'Menu',
  close: 'Fechar',
  cta: 'Pedir uma sessão',
  contactLink: 'Contacto',
  heroNote: ['Pads', 'ao fim do dia, entre pinheiros'],
  stripLabel: 'O que inclui o treino',
  stripPlace: 'Lisboa · no local combinado',
  interludeLabel: 'Repetição',
  photoCredit: 'Fotografia: B&A Art Moments',
  video: {
    play: 'Reproduzir vídeo',
    pause: 'Pausar vídeo',
    'real-padwork': 'Vídeo: o Tomás segura os pads enquanto um atleta treina combinações.',
    'real-bagwork': 'Vídeo: o Tomás treina pontapés e socos no saco pesado.',
    'real-coaching': 'Vídeo: o Tomás segura os pads para uma aluna durante uma sessão.',
  },
  form: {
    demo: 'Protótipo: este formulário não envia dados.',
    optional: '(opcional)',
    name: 'Nome',
    contact: 'Email ou telemóvel',
    area: 'Zona',
    areaHint: 'Bairro ou freguesia de Lisboa onde preferes treinar.',
    areaPlaceholder: 'Ex.: Campo de Ourique',
    goals: 'Objetivos',
    goalsMore: 'Conta mais sobre os teus objetivos',
    goalsPlaceholder: 'Conta mais, se quiseres: experiência anterior, lesões, o que te motiva.',
    availability: 'Disponibilidade',
    availabilityMore: 'Dias ou horas preferidos',
    availabilityPlaceholder: 'Dias ou horas preferidos (opcional)',
    format: 'Formato',
    submit: 'Pedir uma sessão',
    required: 'Campos com * são necessários.',
    errors: {
      name: 'Indica o teu nome.',
      contact: 'Indica um email ou telemóvel para resposta.',
      contactInvalid: 'Escreve um email válido ou um telemóvel com 9 dígitos.',
      area: 'Indica a zona de Lisboa onde preferes treinar.',
      goals: 'Escolhe pelo menos um objetivo ou descreve-o.',
      availability: 'Diz-nos quando costumas ter disponibilidade.',
    },
    confirm: {
      kicker: 'Demonstração',
      title: ['Pedido pronto.', 'Nada foi enviado.'],
      text: 'Este formulário é uma demonstração local do protótipo. Os dados não saíram deste navegador e não foram guardados. No site final, este pedido chegaria ao Tomás.',
      edit: 'Editar pedido',
      restart: 'Começar de novo',
    },
  },
};
