import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import {
  LOGISTICS_FEATURES,
  LOGISTICS_AUDIENCES,
  SAAS_BENEFITS,
  TRANSPORTERS_FAQ,
  DEMO_MAILTO,
  DEMO_WHATSAPP,
} from '@/lib/logistica';
import { LogisticsServiceSchema } from '@/components/seo/JsonLd';
import {
  Breadcrumbs,
  SectionHeading,
  FeatureGrid,
  CardGrid,
  FaqSection,
  RelatedLinks,
} from '@/components/logistica/blocks';
import { DemoForm } from '@/components/logistica/DemoForm';
import { StickyCta } from '@/components/logistica/StickyCta';

const PATH = '/logistica/transportadoras/';

export const metadata: Metadata = {
  title: 'Software para Transportadoras e Empresas de Carga',
  description:
    'Software de rastreio de encomendas para transportadoras e operadores de carga rodoviária, ferroviária, marítima e aérea em Moçambique.',
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: 'Software para Transportadoras e Empresas de Carga | MOVAGO',
    description:
      'Controlo de encomendas e carga por troço, com responsável registado, prova de entrega e funcionamento sem internet.',
    url: `${SITE_URL}${PATH}`,
    type: 'website',
    locale: 'pt_MZ',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'MOVAGO Logística para transportadoras' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software para Transportadoras e Empresas de Carga | MOVAGO',
    description: 'Controlo de encomendas e carga por troço, com responsável registado e prova de entrega.',
    images: ['/images/og-image.png'],
  },
};

const OPERATIONAL_POINTS = LOGISTICS_FEATURES.filter((f) =>
  ['route', 'map-pin', 'user-check', 'camera', 'alert', 'wifi-off'].includes(f.icon)
);

export default function TransportadorasPage() {
  return (
    <>
      <LogisticsServiceSchema
        path={PATH}
        name="Software para Transportadoras - MOVAGO Logística"
        description="Sistema SaaS para transportadoras e operadores de carga registarem receção, saída, trânsito, chegada e entrega de encomendas, com responsável por troço e prova de entrega."
      />

      <div className="bg-[#0A0F1E] pt-28 sm:pt-32">
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { name: 'Início', path: '/' },
                { name: 'Logística', path: '/logistica' },
                { name: 'Transportadoras', path: PATH },
              ]}
            />
            <div className="max-w-4xl mx-auto text-center mt-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
                Software para{' '}
                <span className="gradient-text">transportadoras e operadores de carga</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10">
                Saiba sempre onde está cada encomenda e quem a tem. Registe receção, saída, paragens, chegada e
                entrega, com prova, mesmo em estações com internet fraca.
              </p>
              <div className="flex flex-col items-center gap-2 max-w-md mx-auto">
                <a
                  href="#pedir-demonstracao"
                  className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-8 py-4 text-lg font-semibold text-white hover:bg-[#1D4ED8] transition-colors min-h-[52px]"
                >
                  Pedir demonstração
                </a>
                <p className="text-sm text-slate-400">
                  Leva-o ao formulário no fim da página. Diga-nos o tipo de carga e as rotas que opera.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[rgb(var(--color-secondary))]/40" aria-labelledby="desempenho">
          <div className="container mx-auto px-4">
            <SectionHeading
              id="desempenho"
              eyebrow="Desempenho"
              title="Mais controlo, menos incerteza"
              subtitle="O que muda quando cada encomenda tem código, percurso e responsável."
            />
            <CardGrid items={SAAS_BENEFITS} columns={2} />
          </div>
        </section>

        <section className="py-16 lg:py-24" aria-labelledby="operacao">
          <div className="container mx-auto px-4">
            <SectionHeading
              id="operacao"
              eyebrow="Na operação do dia a dia"
              title="Funcionalidades pensadas para a estrada e para a estação"
            />
            <FeatureGrid features={OPERATIONAL_POINTS} />
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[rgb(var(--color-secondary))]/40" aria-labelledby="tipos">
          <div className="container mx-auto px-4">
            <SectionHeading
              id="tipos"
              eyebrow="Tipos de operação"
              title="Rodoviário, ferroviário, marítimo, aéreo, e-commerce e courier"
              subtitle="Qualquer operação em que a carga passa de ponto em ponto pode usar o mesmo modelo."
            />
            <CardGrid items={LOGISTICS_AUDIENCES} />
          </div>
        </section>

        <section className="py-16 lg:py-24" aria-label="Perguntas frequentes para transportadoras">
          <div className="container mx-auto px-4">
            <FaqSection items={TRANSPORTERS_FAQ} title="Perguntas frequentes de transportadoras" />
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[rgb(var(--color-secondary))]/40">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Dê ao seu cliente um código e uma prova de entrega
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  Comece por uma conversa: contamos como funciona e vemos juntos se faz sentido para a sua
                  operação.
                </p>
                <div className="rounded-2xl border border-slate-700/50 bg-[rgb(var(--color-surface))] p-5">
                  <p className="text-sm font-semibold text-white mb-3">Prefere falar diretamente?</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={DEMO_WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-track="whatsapp"
                      data-location="transportadoras"
                      className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-600 px-4 py-3 text-sm font-semibold text-slate-100 hover:bg-white/5 transition-colors min-h-[48px]"
                    >
                      Falar por WhatsApp
                    </a>
                    <a
                      href={DEMO_MAILTO}
                      className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-600 px-4 py-3 text-sm font-semibold text-slate-100 hover:bg-white/5 transition-colors min-h-[48px]"
                    >
                      Enviar email
                    </a>
                  </div>
                </div>
              </div>
              <DemoForm id="pedir-demonstracao" source="logistica-transportadoras" />
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <RelatedLinks
              links={[
                {
                  name: 'Logística de encomendas',
                  href: '/logistica',
                  description: 'Visão geral do sistema, funcionalidades e como funciona.',
                },
                {
                  name: 'Rastreio de encomendas',
                  href: '/logistica/rastreio-de-encomendas',
                  description: 'Como os seus clientes acompanham a encomenda com o código.',
                },
                {
                  name: 'Motoristas parceiros',
                  href: '/motoristas',
                  description: 'Tem veículo próprio? Conheça o programa de motoristas parceiros.',
                },
              ]}
            />
          </div>
        </section>
      </div>

      <StickyCta targetId="pedir-demonstracao" watchIds={['pedir-demonstracao']} />
    </>
  );
}
