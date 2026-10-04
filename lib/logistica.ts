import { CONTACT_INFO } from '@/lib/constants';

// ---------------------------------------------------------------------------
// Links de contacto com mensagem pré-preenchida (email e WhatsApp existentes)
// ---------------------------------------------------------------------------

export function mailtoHref(subject: string, body: string): string {
  return `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function whatsappHref(text: string): string {
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const DEMO_MAILTO = mailtoHref(
  'Pedido de demonstração - Logística MOVAGO',
  'Olá, gostaria de conhecer o sistema de logística e rastreio de encomendas da MOVAGO.\n\nEmpresa:\nTipo de carga/transporte:\nCidades/estações onde operamos:\nContacto:'
);

export const DEMO_WHATSAPP = whatsappHref(
  'Olá! Gostaria de conhecer o sistema de logística e rastreio de encomendas da MOVAGO.'
);

export const PARTNER_MAILTO = mailtoHref(
  'Parceria / investimento - Logística MOVAGO',
  'Olá, tenho interesse em conhecer melhor o projecto de logística e rastreio de encomendas da MOVAGO (SaaS).\n\nNome:\nOrganização:\nÁrea de interesse:'
);

// ---------------------------------------------------------------------------
// Conteúdo
// ---------------------------------------------------------------------------

export type IconName =
  | 'qr'
  | 'route'
  | 'user-check'
  | 'bell'
  | 'camera'
  | 'message'
  | 'alert'
  | 'wifi-off'
  | 'shield'
  | 'package';

export interface LogisticsFeature {
  icon: IconName;
  title: string;
  description: string;
}

export const LOGISTICS_FEATURES: LogisticsFeature[] = [
  {
    icon: 'qr',
    title: 'Código de rastreio único',
    description:
      'Cada encomenda recebe um código no momento da receção. O remetente e o destinatário guardam-no e consultam o estado quando quiserem, sem criar conta.',
  },
  {
    icon: 'route',
    title: 'Percurso completo, com várias paragens',
    description:
      'Cada estação por onde a encomenda passa regista a saída e a próxima paragem. Fica sempre claro onde está e por onde já passou.',
  },
  {
    icon: 'user-check',
    title: 'Responsável registado em cada troço',
    description:
      'O transportador que leva a encomenda fica registado em cada saída. Se algo correr mal, sabe-se quem a tinha em mãos.',
  },
  {
    icon: 'bell',
    title: 'Aviso de "pode levantar"',
    description:
      'Quando a encomenda chega ao destino, o estado muda para "Pode levantar" e o destinatário pode ser avisado antes da entrega.',
  },
  {
    icon: 'camera',
    title: 'Prova de entrega',
    description:
      'Fotografia e/ou assinatura de quem recebe. A encomenda fica como "Entregue" e o processo fecha com prova registada.',
  },
  {
    icon: 'message',
    title: 'Avisos por WhatsApp e SMS',
    description:
      'Em cada passo, uma mensagem já escrita pronta a enviar ao cliente, a partir do telemóvel de quem trabalha na estação.',
  },
  {
    icon: 'alert',
    title: 'Registo de problemas',
    description:
      'Atraso, dano, extravio ou encomenda não levantada ficam no histórico permanente, como prova em caso de reclamação.',
  },
  {
    icon: 'wifi-off',
    title: 'Funciona mesmo sem internet',
    description:
      'O registo nunca falha por falta de rede: fica guardado e sincroniza sozinho quando há ligação. Há aplicação Android para estações com rede fraca.',
  },
  {
    icon: 'shield',
    title: 'Privacidade para o cliente',
    description:
      'A página pública mostra só o essencial: estado e percurso. Nunca expõe telefones, valores ou fotografias.',
  },
];

export const LOGISTICS_STEPS = [
  {
    title: 'Receção',
    description:
      'A estação regista remetente, destinatário, destino, descrição e peso, com foto opcional do estado da encomenda. O código de rastreio é escrito no talão e entregue ao remetente.',
  },
  {
    title: 'Saída',
    description:
      'Ao despachar, a estação indica a próxima paragem e quem leva a encomenda neste troço, com notas opcionais sobre a viatura ou a embalagem.',
  },
  {
    title: 'Trânsito e paragens',
    description:
      'Se houver paragens pelo caminho, cada estação recebe e volta a despachar. O percurso e os responsáveis ficam encadeados e visíveis.',
  },
  {
    title: 'Chegada ao destino',
    description:
      'A estação final marca a chegada. O estado passa a "Pode levantar" e o destinatário pode ser avisado por WhatsApp ou SMS.',
  },
  {
    title: 'Entrega com prova',
    description:
      'No levantamento, regista-se foto e/ou assinatura de quem recebe. A encomenda fica "Entregue" e o histórico completo fica guardado.',
  },
] as const;

export const LOGISTICS_AUDIENCES = [
  {
    title: 'Empresas de logística e distribuição',
    description:
      'Controlo ponta a ponta de cada encomenda, entre estações, armazéns e pontos de entrega.',
  },
  {
    title: 'Pequenas transportadoras',
    description:
      'Uma forma simples de organizar a operação e dar ao cliente um código para acompanhar a carga, sem sistemas pesados.',
  },
  {
    title: 'Transporte rodoviário de carga',
    description:
      'Registo de cada troço, do transportador responsável e das paragens ao longo da rota.',
  },
  {
    title: 'Transporte ferroviário',
    description:
      'Acompanhamento de mercadorias e encomendas entre estações, com chegada e entrega registadas.',
  },
  {
    title: 'Transporte interurbano e interprovincial',
    description:
      'Operadores que levam encomendas entre cidades e precisam de provar receção, trânsito e entrega.',
  },
  {
    title: 'Outros operadores de carga',
    description:
      'Qualquer operação em que uma encomenda passa por várias mãos e o cliente quer saber onde ela está.',
  },
] as const;

export const SAAS_BENEFITS = [
  {
    title: 'Mais controlo da operação',
    description: 'Cada encomenda tem estado, percurso e responsável sempre visíveis.',
  },
  {
    title: 'Menos disputas e extravios por esclarecer',
    description: 'Fotos, assinaturas e registo de problemas formam um histórico que serve de prova.',
  },
  {
    title: 'Clientes mais informados',
    description:
      'O cliente consulta o estado sozinho com o código, o que alivia o atendimento no balcão e ao telefone.',
  },
  {
    title: 'Sem instalar servidores',
    description:
      'É um serviço online (SaaS): a empresa usa o sistema pelo navegador ou pela aplicação Android, e recebe as melhorias à medida que o produto evolui.',
  },
] as const;

export interface FaqEntry {
  question: string;
  answer: string;
}

export const LOGISTICS_FAQ: FaqEntry[] = [
  {
    question: 'O que é o sistema de logística e rastreio de encomendas da MOVAGO?',
    answer:
      'É um software online (SaaS) que acompanha cada encomenda desde que entra numa estação até ser entregue ao destinatário. Cada encomenda recebe um código de rastreio, e o percurso, os responsáveis e a entrega ficam registados.',
  },
  {
    question: 'Para que tipo de empresas serve?',
    answer:
      'Para empresas de logística e distribuição, pequenas transportadoras, operadores de transporte rodoviário e ferroviário de carga, transporte interurbano e outros operadores em que a encomenda passa por várias estações ou transportadores.',
  },
  {
    question: 'O cliente precisa de criar conta para rastrear a encomenda?',
    answer:
      'Não. Remetente e destinatário usam apenas o código de rastreio do talão para ver o estado e o percurso da encomenda na página pública de rastreio.',
  },
  {
    question: 'Como é que o cliente é avisado?',
    answer:
      'Em cada passo, quem trabalha na estação pode enviar uma mensagem já escrita por WhatsApp ou SMS, a partir do seu telemóvel.',
  },
  {
    question: 'E se uma estação não tiver internet?',
    answer:
      'O registo fica guardado no dispositivo e sincroniza automaticamente quando houver ligação. Em estações com rede fraca recomenda-se a aplicação Android, que também permite enviar mais tarde as fotografias tiradas sem rede.',
  },
  {
    question: 'Uma encomenda pode passar por várias estações?',
    answer:
      'Sim. Cada estação por onde passa regista a saída, indicando a próxima paragem e o transportador responsável por esse troço. Assim sabe-se sempre onde está a encomenda e quem a tem.',
  },
  {
    question: 'Como pedir uma demonstração?',
    answer:
      'Envie-nos um email ou uma mensagem de WhatsApp a partir dos botões desta página, ou use a página de contacto. Respondemos para combinar uma demonstração adaptada à sua operação.',
  },
];

export const TRACKING_FAQ: FaqEntry[] = [
  {
    question: 'Como rastrear uma encomenda em Moçambique com a MOVAGO?',
    answer:
      'Abra a página de rastreio, escreva o código que está no talão entregue pelo remetente e consulte o estado e o percurso da encomenda.',
  },
  {
    question: 'Onde encontro o código de rastreio?',
    answer:
      'O código é entregue ao remetente no talão, no momento em que a encomenda é recebida na estação. Peça-o ao remetente se for o destinatário.',
  },
  {
    question: 'Preciso de criar conta?',
    answer: 'Não. Basta o código de rastreio.',
  },
  {
    question: 'O que significa "Pode levantar"?',
    answer:
      'Significa que a encomenda já chegou à estação de destino e pode ser levantada. Depois do levantamento, a encomenda passa a "Entregue".',
  },
  {
    question: 'Que informação é mostrada na página pública?',
    answer:
      'Apenas o estado da encomenda e por onde já passou. Por privacidade, nunca são mostrados telefones, valores ou fotografias.',
  },
  {
    question: 'O que acontece se a encomenda sofrer atraso, dano ou extravio?',
    answer:
      'A estação regista o problema no histórico da encomenda. Contacte a empresa que enviou a encomenda ou a estação indicada no talão.',
  },
];

export const TRANSPORTERS_FAQ: FaqEntry[] = [
  {
    question: 'Preciso de equipamento especial para usar o sistema?',
    answer:
      'Não. O sistema funciona no navegador do computador ou do telemóvel, e há aplicação Android para estações com rede fraca.',
  },
  {
    question: 'Posso registar encomendas que passam por várias paragens?',
    answer:
      'Sim. Cada estação regista a saída com a próxima paragem e o transportador do troço, e o percurso fica encadeado.',
  },
  {
    question: 'Como fica registado quem transportou cada encomenda?',
    answer:
      'Em cada saída escreve-se o nome do transportador, que fica como responsável pela encomenda até à estação seguinte.',
  },
  {
    question: 'O sistema serve para carga ferroviária e rodoviária?',
    answer:
      'Sim. O modelo é o mesmo para qualquer operação em que a carga passa de estação em estação: receção, saída, chegada e entrega.',
  },
  {
    question: 'Como começo?',
    answer:
      'Peça uma demonstração por email ou WhatsApp. Conversamos sobre a sua operação e mostramos como o sistema se adapta.',
  },
];
