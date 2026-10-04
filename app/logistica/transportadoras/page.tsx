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
  CtaBanner,
  RelatedLinks,
} from '@/components/logistica/blocks';

const PATH = '/logistica/transportadoras/';

export const metadata: Metadata = {
  title: 'Software para Transportadoras e Empresas de Carga',
  description:
    'Software de gestão e rastreio de encomendas para transportadoras, courier, e-commerce e operadores rodoviários, ferroviários, marítimos e aéreos em Moçambique. Controlo por troço e prova de entrega.',
  keywords: [
    'software para transportadoras',
    'sistema de gestão de transportadoras',
    'software de logística Moçambique',
    'gestão de carga',
    'transporte rodoviário de carga',
    'transporte ferroviário carga',
    'logística marítima',
    'software para courier e entregas',
    'rastreio de encomendas e-commerce',
    'rastreio de carga',
    'localização GPS de encomendas',
    'sistema para pequenas transportadoras',
    'prova de entrega digital',
    'MOVAGO Logística',
  ],
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
              <CtaBanner
                title="Quer ver como se adapta à sua transportadora?"
                description="Diga-nos o tipo de carga e as rotas que opera. Preparamos uma demonstração à medida."
                primary={{
                  label: 'Pedir demonstração por email',
                  href: DEMO_MAILTO,
                  hint: 'Abre o seu email com a mensagem pronta para a equipa MOVAGO.',
                }}
                secondary={{
                  label: 'Falar por WhatsApp',
                  href: DEMO_WHATSAPP,
                  hint: 'Abre o WhatsApp com uma mensagem inicial.',
                  external: true,
                }}
              />
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
            <CtaBanner
              title="Dê ao seu cliente um código e uma prova de entrega"
              description="Comece por uma conversa: contamos como funciona e vemos juntos se faz sentido para a sua operação."
              primary={{
                label: 'Pedir demonstração por email',
                href: DEMO_MAILTO,
                hint: 'Abre o seu email com a mensagem pronta.',
              }}
              secondary={{
                label: 'Abrir página de contacto',
                href: '/contacto?assunto=Logística',
                hint: 'Preencha o formulário de contacto com o assunto já indicado.',
              }}
            />
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
    </>
  );
}
