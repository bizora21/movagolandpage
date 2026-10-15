import type { Metadata } from 'next';
import { LandingTemplate, type LandingContent } from '@/components/lp/LandingTemplate';
import { LOGISTICS_FAQ } from '@/lib/logistica';

// Página de destino para anúncios: não deve aparecer no Google
export const metadata: Metadata = {
  title: 'Rastreio de Encomendas para Transportadoras',
  description: 'Saiba onde está cada carga, quem a leva e prove cada entrega. Peça a sua demonstração.',
  robots: { index: false, follow: false },
};

const content: LandingContent = {
  source: 'lp-transportadoras',
  headline: (
    <>
      Saiba onde está cada carga.{' '}
      <span className="gradient-text">Prove cada entrega.</span>
    </>
  ),
  subheadline:
    'Sistema online de rastreio para transportadoras: código por encomenda, percurso com várias paragens, responsável em cada troço e prova de entrega, mesmo onde a internet falha.',
  bullets: [
    'Código de rastreio único para cada encomenda',
    'Transportador registado em cada saída',
    'Prova de entrega com foto e assinatura',
    'Avisos aos clientes por WhatsApp e SMS',
    'Funciona sem internet e sincroniza depois',
  ],
  showOffer: true,
  featureIcons: ['route', 'user-check', 'camera', 'message', 'alert', 'wifi-off'],
  steps: [
    { title: 'Receção', description: 'Regista a encomenda e entrega o código de rastreio ao remetente.' },
    { title: 'Trânsito', description: 'Cada saída e paragem fica registada, com o transportador responsável.' },
    { title: 'Entrega com prova', description: 'Foto e/ou assinatura de quem recebe, e histórico completo guardado.' },
  ],
  faq: [
    LOGISTICS_FAQ[1],
    LOGISTICS_FAQ[2],
    LOGISTICS_FAQ[4],
    LOGISTICS_FAQ.find((f) => f.question.startsWith('Como pedir')) ?? LOGISTICS_FAQ[LOGISTICS_FAQ.length - 1],
  ],
  formTitle: 'Peça a sua demonstração',
  formDescription: 'Preencha em menos de 1 minuto. A equipa MOVAGO contacta-o para mostrar o sistema com a sua operação.',
};

export default function LpTransportadorasPage() {
  return <LandingTemplate content={content} />;
}
