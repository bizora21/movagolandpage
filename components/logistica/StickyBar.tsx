import { MessageCircle } from 'lucide-react';
import { whatsappHref } from '@/lib/logistica';

/**
 * Barra fixa no fundo do ecrã (só em telemóvel) com WhatsApp e pedido de demonstração.
 * Os cliques são medidos por delegação (data-track / #pedir-demonstracao) em <Analytics />.
 */
export function StickyBar() {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-[90] border-t border-slate-700/60 bg-[#0A0F1E]/95 backdrop-blur px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-md gap-2">
        <a
          href={whatsappHref('Olá! Gostaria de conhecer o sistema de logística e rastreio de encomendas da MOVAGO.')}
          target="_blank"
          rel="noopener noreferrer"
          data-track="whatsapp"
          data-location="sticky-bar"
          className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-xl bg-[#15803D] px-3 py-3 text-base font-semibold text-white hover:bg-[#166534] transition-colors"
        >
          <MessageCircle size={20} aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href="#pedir-demonstracao"
          data-location="sticky-bar"
          className="flex min-h-[48px] flex-1 items-center justify-center rounded-xl bg-[#2563EB] px-3 py-3 text-base font-semibold text-white hover:bg-[#1D4ED8] transition-colors"
        >
          Pedir demonstração
        </a>
      </div>
    </div>
  );
}
