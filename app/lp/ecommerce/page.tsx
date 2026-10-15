import type { Metadata } from 'next';
import { LandingTemplate, type LandingContent } from '@/components/lp/LandingTemplate';
import { LOGISTICS_FAQ } from '@/lib/logistica';

// Página de destino para anúncios: não deve aparecer no Google
export const metadata: Metadata = {
  title: 'Rastreio de Encomendas para Lojas Online',
  description: 'Dê a cada pedido um código de rastreio e prove cada entrega. Peça a sua demonstração.',
  robots: { index: false, follow: false },
};

const content: LandingContent = {
  source: 'lp-ecommerce',
  headline: (
    <>
      Cada pedido da sua loja com{' '}
      <span className="gradient-text">código de rastreio.</span>
    </>
  ),
  subheadline:
    'Dê ao seu cliente um código para acompanhar a encomenda, avise-o por WhatsApp e SMS quando ela chegar e registe a prova de entrega, para menos dúvidas e menos reclamações.',
  bullets: [
    'Código de rastreio por pedido, sem o cliente criar conta',
    'Aviso "pode levantar" quando a encomenda chega',
    'Prova de entrega com foto e assinatura',
    'Avisos aos clientes por WhatsApp e SMS',
    'Funciona sem internet e sincroniza depois',
  ],
  // A oferta do piloto foi definida para transportadoras; aqui não a mostramos.
  showOffer: false,
  defaultType: 'E-commerce e lojas online',
  featureIcons: ['qr', 'bell', 'camera', 'message', 'alert', 'shield'],
  steps: [
    { title: 'Registe o pedido', description: 'A encomenda recebe um código de rastreio, que o cliente guarda.' },
    { title: 'Acompanhe o envio', description: 'Cada passo fica registado e o cliente consulta o estado sozinho.' },
    { title: 'Confirme a entrega', description: 'Foto e/ou assinatura de quem recebe, como prova de entrega.' },
  ],
  faq: [
    LOGISTICS_FAQ.find((f) => f.question.startsWith('Serve para lojas online')) ?? LOGISTICS_FAQ[0],
    LOGISTICS_FAQ[2],
    LOGISTICS_FAQ[3],
    LOGISTICS_FAQ.find((f) => f.question.startsWith('Como pedir')) ?? LOGISTICS_FAQ[LOGISTICS_FAQ.length - 1],
  ],
  formTitle: 'Peça a sua demonstração',
  formDescription: 'Preencha em menos de 1 minuto. A equipa MOVAGO contacta-o para mostrar o sistema com a sua loja.',
};

export default function LpEcommercePage() {
  return <LandingTemplate content={content} />;
}
