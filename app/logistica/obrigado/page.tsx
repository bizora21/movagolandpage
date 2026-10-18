import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { SITE_URL, RASTREIO_URL } from '@/lib/constants';
import { DEMO_URL, whatsappHref } from '@/lib/logistica';
import { LeadEvent } from '@/components/logistica/LeadEvent';

export const metadata: Metadata = {
  title: 'Pedido recebido | Logística MOVAGO',
  description: 'Recebemos o seu pedido de demonstração da logística MOVAGO. A nossa equipa vai contactá-lo.',
  // Página de agradecimento: não deve aparecer no Google
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/logistica/obrigado/` },
};

const NEXT_STEPS = [
  ['Analisamos o seu pedido', 'A equipa MOVAGO vê o tipo de operação e as rotas que indicou.'],
  ['Contactamos o seu telemóvel', 'Ligamos ou escrevemos por WhatsApp para combinar a demonstração.'],
  ['Demonstração à medida', 'Mostramos o sistema a trabalhar com a sua realidade.'],
] as const;

export default function ObrigadoPage() {
  return (
    <div className="bg-[#0A0F1E] pt-28 sm:pt-32 pb-20">
      <LeadEvent />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <CheckCircle2 className="mx-auto mb-6 text-green-400" size={64} aria-hidden="true" />
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">Pedido recebido!</h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-10">
            Obrigado pelo seu interesse na logística MOVAGO. Vamos contactá-lo em breve.
          </p>

          <div className="rounded-2xl border border-slate-700/50 bg-[rgb(var(--color-surface))] p-6 sm:p-8 text-left mb-10">
            <h2 className="text-lg font-semibold text-white mb-5">O que acontece a seguir</h2>
            <ol className="space-y-5">
              {NEXT_STEPS.map(([title, text], i) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-primary))] font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{title}</p>
                    <p className="text-sm text-slate-400">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mb-8 flex flex-col items-center gap-2 rounded-2xl border border-[rgb(var(--color-primary))]/40 bg-[rgb(var(--color-primary))]/10 p-6">
            <p className="font-semibold text-white">Enquanto aguarda, veja o sistema a funcionar</p>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-location="obrigado-demo"
              className="inline-flex min-h-[56px] w-full items-center justify-center rounded-xl bg-[#2563EB] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#1D4ED8] sm:w-auto"
            >
              Ver a demonstração agora →
            </a>
            <p className="text-sm text-slate-400">Abre a demonstração interativa noutro separador.</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a
              href={whatsappHref('Olá! Acabei de pedir uma demonstração da logística MOVAGO no site.')}
              target="_blank"
              rel="noopener noreferrer"
              data-track="whatsapp"
              data-location="obrigado"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#15803D] px-8 py-4 text-lg font-semibold text-white hover:bg-[#166534] transition-colors"
            >
              <MessageCircle size={22} aria-hidden="true" />
              Falar já por WhatsApp
            </a>
            <p className="text-sm text-slate-400">Abre o WhatsApp com uma mensagem inicial, para adiantarmos a conversa.</p>
          </div>

          <p className="mt-10 text-sm text-slate-400">
            Tem uma encomenda para rastrear?{' '}
            <a href={RASTREIO_URL} className="font-semibold text-[rgb(var(--color-accent))] hover:underline">
              Abra o portal de rastreio
            </a>
            {' '}ou{' '}
            <Link href="/logistica" className="font-semibold text-[rgb(var(--color-accent))] hover:underline">
              volte à página de logística
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
