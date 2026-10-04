import Link from 'next/link';
import { RASTREIO_URL } from '@/lib/constants';
import { DEMO_MAILTO } from '@/lib/logistica';

const HIGHLIGHTS = [
  'Código de rastreio único para cada encomenda',
  'Percurso com várias paragens e responsável por cada troço',
  'Localização GPS opcional no registo da encomenda',
  'Prova de entrega com foto e assinatura',
  'Avisos aos clientes por WhatsApp e SMS',
  'Funciona mesmo sem internet',
];

export function LogisticsSection() {
  return (
    <section id="logistica" className="py-20 lg:py-28 bg-[rgb(var(--color-secondary))]/40" aria-labelledby="logistica-titulo">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[rgb(var(--color-accent))] mb-3">
            Novo · Logística de encomendas
          </p>
          <h2 id="logistica-titulo" className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Rastreio de encomendas para transportadoras e empresas de logística
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Além do transporte urbano, a MOVAGO oferece um sistema SaaS que acompanha cada encomenda desde a
            receção até à entrega, para transportadoras, carga rodoviária, ferroviária, marítima e aérea,
            e-commerce, courier e distribuição.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          <ul className="space-y-3">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-700/50 bg-[rgb(var(--color-surface))] p-4 text-slate-300"
              >
                <span aria-hidden="true" className="mt-0.5 text-green-400">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-6">
            <div>
              <Link
                href="/logistica"
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#2563EB] px-6 py-4 text-lg font-semibold text-white hover:bg-[#1D4ED8] transition-colors min-h-[48px]"
              >
                Conhecer a logística MOVAGO
              </Link>
              <p className="text-sm text-slate-400 mt-2">
                Veja as funcionalidades, como funciona e para quem é o sistema.
              </p>
            </div>
            <div>
              <a
                href={DEMO_MAILTO}
                className="inline-flex w-full items-center justify-center rounded-xl border-2 border-[#2563EB] px-6 py-4 text-lg font-semibold text-[#60A5FA] hover:bg-[#2563EB] hover:text-white transition-colors min-h-[48px]"
              >
                Pedir demonstração
              </a>
              <p className="text-sm text-slate-400 mt-2">
                Abre o seu email com a mensagem pronta para a equipa MOVAGO.
              </p>
            </div>
            <div>
              <a
                href={RASTREIO_URL}
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-600 px-6 py-4 text-base font-semibold text-slate-200 hover:bg-white/5 transition-colors min-h-[48px]"
              >
                Já tem um código? Rastreie aqui
              </a>
              <p className="text-sm text-slate-400 mt-2">
                Vai para o portal de rastreio, onde só precisa do código do talão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
