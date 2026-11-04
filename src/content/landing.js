/* ==========================================================================
   Landing page copy — European Portuguese
   Edit text here; components only handle layout.
   Rules: no prices, no invented credentials, no testimonials, no studio.
   ========================================================================== */

export const nav = [
  { href: '#sobre', label: 'O Tomás' },
  { href: '#treino', label: 'O treino' },
  { href: '#primeira-sessao', label: 'Primeira sessão' },
  { href: '#formatos', label: 'Formatos' },
  { href: '#locais', label: 'Locais' },
];

export const hero = {
  headline: ['Treino privado', 'de boxe, kickboxing', 'e força.'],
  support: 'Em Lisboa, ao teu ritmo e no local combinado.',
  primary: { label: 'Pedir uma sessão', href: '#contacto' },
  secondary: { label: 'Conhecer o treino', href: '#treino' },
  strip: ['Boxe', 'Kickboxing', 'Pads', 'Força'],
};

export const experience = {
  kicker: 'O treino',
  title: ['Técnica de competição,', 'ensinada com paciência.'],
  intro:
    'Cada sessão junta técnica de boxe e kickboxing, trabalho de pads e força e condicionamento. Escolhes o foco: só boxe, só kickboxing, ou os dois. A intensidade ajusta-se a ti. A atenção ao detalhe é sempre a mesma.',
  pillars: [
    {
      n: '01',
      title: 'Técnica',
      image: 'tomasCorrecting',
      video: 'real-bagwork',
      text: 'Guarda, postura, deslocação, socos e, no kickboxing, pontapés. O Tomás demonstra, observa e corrige um detalhe de cada vez, até o movimento fazer sentido no teu corpo.',
    },
    {
      n: '02',
      title: 'Pads',
      image: 'padsPines',
      video: 'real-padwork',
      focus: '50% 60%',
      text: 'Com o Tomás a segurar os pads, as combinações ganham tempo e precisão. Repetes, ajustas, repetes outra vez. O ritmo sobe quando estás pronto, não antes.',
    },
    {
      n: '03',
      title: 'Força',
      image: 'kettlebellLight',
      text: 'Kettlebell, elásticos e peso corporal para construir uma base sólida: pernas, tronco e ombros. Força que se nota nos golpes e no dia a dia.',
    },
    {
      n: '04',
      title: 'Condicionamento',
      image: 'towelRest',
      text: 'Rondas curtas, pausas medidas e respiração controlada. Ganhas fôlego sem perder a técnica pelo caminho.',
    },
  ],
};

export const interlude = {
  lines: ['Repetir.', 'Respirar.', 'Repetir melhor.'],
};

export const about = {
  kicker: 'Sobre o Tomás',
  title: ['Do ringue', 'para o teu treino.'],
  paragraphs: [
    'O Tomás competiu em kickboxing e hoje prepara e acompanha atletas em competição. É formado em exercício físico e em treino de boxe e de kickboxing.',
    'A competição ensinou-lhe o valor dos pormenores: a guarda que não desce, o pé que roda no momento certo, a respiração que não se prende. É esse olhar técnico que leva para cada sessão, com a calma de quem sabe que cada pessoa começa num ponto diferente.',
    'Treina adultos de vários níveis, incluindo quem nunca calçou umas luvas.',
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
    { title: 'Observar primeiro', text: 'Antes de corrigir, o Tomás vê como te mexes e o que te custa.' },
    { title: 'Explicar o porquê', text: 'Cada correção vem com uma razão simples que consegues levar contigo.' },
    { title: 'Ajustar à pessoa', text: 'O plano muda com o teu dia, a tua energia e os teus objetivos.' },
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
  caption: 'No treino e em noites de competição.',
  photos: [
    { image: 'tomasTeam', ratio: 2.13, slot: 'team' },
    { image: 'tomasRingside', ratio: 1.72, slot: 'ring' },
    { image: 'tomasTeamTrophy', ratio: 0.75, slot: 'trophy' },
    { image: 'tomasFightNight', ratio: 1.24, slot: 'night' },
  ],
};

export const firstSession = {
  kicker: 'Primeira sessão',
  title: ['O que acontece', 'na primeira sessão.'],
  intro: 'Não precisas de experiência nem de estar em forma para começar. Precisas apenas de vir com vontade de experimentar.',
  steps: [
    {
      title: 'Conversa',
      text: 'Falamos sobre os teus objetivos, a tua experiência, lesões ou limitações e o que te trouxe até aqui.',
    },
    {
      title: 'Ponto de partida',
      text: 'Alguns movimentos simples ajudam a perceber mobilidade, coordenação e condição física. Sem testes ao limite.',
    },
    {
      title: 'Prática guiada',
      text: 'Guarda, postura e primeiros golpes, depois um bloco de pads e um pouco de força. Tudo explicado passo a passo.',
    },
    {
      title: 'Recomendação',
      text: 'No fim, o Tomás sugere como continuar: frequência, formato e foco das sessões seguintes.',
    },
  ],
};

export const inSession = {
  kicker: 'Em sessão',
  title: ['Prática guiada,', '*em tempo real.*'],
  text: 'Pads ao ritmo de quem está a aprender. O Tomás ajusta a distância, dá o tempo certo e corrige entre combinações, sem pressa e com boa disposição.',
  points: ['Correções entre combinações', 'Ritmo ajustado a cada pessoa', 'Ambiente descontraído, exigência real'],
  cta: 'Marcar a primeira sessão',
};

export const formats = {
  kicker: 'Formatos',
  title: ['Sozinho', 'ou a dois.'],
  items: [
    {
      name: 'Individual',
      image: 'adultPractice',
      lead: 'Atenção total, do primeiro ao último minuto.',
      text: 'O plano acompanha os teus objetivos, o teu horário e a tua evolução. Ideal para quem quer aprender a técnica com cuidado ou voltar a treinar com segurança.',
      points: ['Correções contínuas', 'Ritmo definido por ti', 'Plano ajustado sessão a sessão'],
    },
    {
      name: 'Duo',
      image: 'duoSession',
      lead: 'Treinar com alguém que conheces.',
      text: 'Para amigos, casais ou familiares. Alternam nos pads e trabalham a pares, mantendo correções individuais para cada um.',
      points: ['Dois níveis, uma sessão', 'Trabalho a pares nos pads', 'Motivação partilhada'],
    },
  ],
  note: 'A proposta para cada formato é apresentada no primeiro contacto.',
};

export const locations = {
  kicker: 'Locais',
  title: ['No local', 'combinado.'],
  intro:
    'O treino vai até ti, com discrição. Antes da primeira sessão, combinamos o sítio que funciona melhor, em Lisboa. O Tomás leva o equipamento portátil necessário.',
  options: [
    { title: 'Em casa', text: 'Sala, terraço, jardim ou junto à piscina. Basta espaço para dar alguns passos em segurança.' },
    { title: 'Ao ar livre', text: 'Sob os pinheiros, num jardim ou perto do mar, num espaço adequado e perto de ti.' },
    { title: 'No teu condomínio ou empresa', text: 'Uma sala comum ou o ginásio do condomínio, se tiveres acesso.' },
    {
      title: 'Espaço interior',
      text: 'Se precisares de um espaço coberto, podemos discutir opções. Só ficam marcadas depois de confirmadas.',
    },
  ],
};

export const contact = {
  kicker: 'Contacto',
  title: ['Pedir', 'uma sessão.'],
  intro: 'Conta um pouco sobre ti. O Tomás responde para combinar a primeira conversa.',
  goals: ['Aprender boxe', 'Aprender kickboxing', 'Ganhar força', 'Melhorar a condição física', 'Voltar a treinar', 'Aliviar o stress'],
  availability: ['Manhã cedo', 'Manhã', 'Hora de almoço', 'Fim de tarde', 'Noite', 'Fim de semana'],
  formats: ['Individual', 'Duo', 'Ainda não sei'],
};

export const footer = {
  line: 'Treino privado de boxe, kickboxing e força em Lisboa.',
};

/* Interface strings (buttons, labels, form messages) */
export const ui = {
  descriptor: 'Boxe · Kickboxing',
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
