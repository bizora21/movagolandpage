import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contacto | Fale com a MOVAGO',
  description:
    'Fale com a equipa MOVAGO: dúvidas sobre transporte urbano, motoristas parceiros ou pedido de demonstração do sistema de logística e rastreio de encomendas.',
  alternates: { canonical: `${SITE_URL}/contacto/` },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
