export const SITE_URL = 'https://movago.co.mz';
export const SITE_NAME = 'MOVAGO';
export const SITE_TAGLINE = 'Sistema Inteligente de Mobilidade';

export const NAVIGATION = [
  { name: 'Sobre', href: '/sobre' },
  { name: 'Como Funciona', href: '#how-it-works' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/contacto' },
] as const;

export const FOOTER_LINKS = {
  produto: [
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Baixar App', href: '#download' },
  ],
  empresa: [
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Privacidade', href: '/privacidade' },
    { name: 'Termos de Uso', href: '/termos' },
    { name: 'FAQ', href: '/faq' },
  ],
  suporte: [
    { name: 'Contacto', href: '/contacto' },
    { name: 'Ajuda', href: '/faq' },
  ],
} as const;

export const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://instagram.com/movago.mz', icon: 'instagram' },
  { name: 'Facebook', href: 'https://facebook.com/movago.mz', icon: 'facebook' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/movago', icon: 'linkedin' },
  { name: 'WhatsApp', href: 'https://wa.me/258841234567', icon: 'message-circle' },
] as const;

export const STATS = [
  { value: '50000+', label: 'Viagens Realizadas' },
  { value: '500+', label: 'Motoristas Activos' },
  { value: '3', label: 'Cidades' },
  { value: '4.8', label: 'Avaliação Média' },
] as const;

export const FEATURES = [
  {
    icon: 'map-pin',
    title: 'Rotas em Tempo Real',
    description: 'Veja rotas de transporte público disponíveis em tempo real e encontre opções próximas de si.',
  },
  {
    icon: 'navigation',
    title: 'Escolha de Rotas',
    description: 'Selecione a sua rota e veja todos os transportes públicos disponíveis nesse trajeto.',
  },
  {
    icon: 'clock',
    title: 'Previsões de Chegada',
    description: 'Saiba quando o próximo transporte público chegará ao seu ponto de embarque.',
  },
  {
    icon: 'location-crosshairs',
    title: 'Rastreamento ao Vivo',
    description: 'Acompanhe a localização do transporte em tempo real durante toda a viagem.',
  },
  {
    icon: 'users',
    title: 'Encontre Passageiros',
    description: 'Motoristas encontram passageiros com muita facilidade e optimizam as suas rotas.',
  },
  {
    icon: 'message-circle',
    title: 'Comunicação Direta',
    description: 'Comunique-se com os seus passageiros de forma rápida e ganhe tempo em cada viagem.',
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'Como faço para usar a MOVAGO?',
    answer: 'Basta baixar a app, selecionar a sua rota de destino e ver todos os transportes públicos disponíveis. Escolha o carro e acompanhe em tempo real.',
    category: 'general' as const,
  },
  {
    question: 'Como funciona a escolha de rotas?',
    answer: 'Selecione o seu ponto de partida e destino. A app mostrará todas as rotas disponíveis e os transportes públicos nessas rotas.',
    category: 'general' as const,
  },
  {
    question: 'Posso ver a localização do transporte em tempo real?',
    answer: 'Sim! Acompanhe a localização exata do transporte público em tempo real durante toda a viagem.',
    category: 'safety' as const,
  },
  {
    question: 'A MOVAGO funciona em qualquer cidade?',
    answer: 'Sim, a MOVAGO é um sistema inteligente de mobilidade que funciona em qualquer cidade com transporte público.',
    category: 'general' as const,
  },
  {
    question: 'Como funciona o botão de emergência?',
    answer: 'Em caso de emergência, pode usar o botão SOS que partilha a sua localização com os seus contactos de emergência.',
    category: 'safety' as const,
  },
  {
    question: 'Preciso de conta para usar a app?',
    answer: 'Sim, precisa de criar uma conta gratuita para aceder a todas as funcionalidades da MOVAGO.',
    category: 'general' as const,
  },
  {
    question: 'Posso salvar rotas favoritas?',
    answer: 'Sim! Pode salvar as suas rotas mais usadas para acesso rápido e fácil.',
    category: 'general' as const,
  },
  {
    question: 'A app funciona offline?',
    answer: 'Precisa de conexão com internet para ver as rotas e localização em tempo real, mas pode visualizar rotas salvas offline.',
    category: 'general' as const,
  },
];
