import type { Metadata } from 'next';
import { SITE_URL, RASTREIO_URL } from '@/lib/constants';
import {
  LOGISTICS_FEATURES,
  LOGISTICS_STEPS,
  LOGISTICS_AUDIENCES,
  SAAS_BENEFITS,
  LOGISTICS_FAQ,
  DEMO_MAILTO,
  DEMO_WHATSAPP,
  PARTNER_MAILTO,
} from '@/lib/logistica';
import { LogisticsServiceSchema, LogisticsSoftwareSchema } from '@/components/seo/JsonLd';
import {
  Breadcrumbs,
  SectionHeading,
  FeatureGrid,
  StepList,
  CardGrid,
  FaqSection,
  CtaBanner,
  RelatedLinks,
} from '@/components/logistica/blocks';

const PATH = '/logistica/';

export const metadata: Metadata = {
  title: 'Logística e Rastreio de Encomendas em Moçambique',
  description:
    'Sistema SaaS de logística e rastreio de encomendas para transportadoras, courier, e-commerce e carga rodoviária, ferroviária, marítima e aérea em Moçambique: código de rastreio, percurso e prova de entrega.',
  keywords: [
    'logística Moçambique',
    'rastreio de encomendas Moçambique',
    'software de logística',
    'software para transportadoras',
    'sistema de gestão de encomendas',
    'rastreamento de carga',
    'SaaS logística',
    'prova de entrega digital',
    'transporte de carga Moçambique',
    'logística Maputo',
    'software para e-commerce Moçambique',
    'rastreio de entregas courier',
    'logística ferroviária',
    'logística marítima Moçambique',
    'transporte rodoviário de carga',
    'MOVAGO Logística',
  ],
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: 'Logística de Encomendas e Rastreio em Moçambique | MOVAGO',
    description:
      'Acompanhe cada encomenda da receção à entrega: código de rastreio, percurso com várias paragens, prova de entrega e avisos aos clientes.',
    url: `${SITE_URL}${PATH}`,
    type: 'website',
    locale: 'pt_MZ',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'MOVAGO Logística - rastreio de encomendas' }],
  },
};

export default function LogisticaPage() {
  return (
    <>
      <LogisticsServiceSchema path={PATH} />
      <LogisticsSoftwareSchema />

      <div className="bg-[#0A0F1E] pt-28 sm:pt-32">
        {/* Hero */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { name: 'Início', path: '/' },
                { name: 'Logística', path: PATH },
              ]}
            />
            <div className="max-w-4xl mx-auto text-center mt-10">
              <p className="inline-block rounded-full border border-[rgb(var(--color-primary))]/40 bg-[rgb(var(--color-primary))]/10 px-4 py-1.5 text-sm font-medium text-[rgb(var(--color-accent))] mb-6">
                Novo · Logística de encomendas
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
                Rastreio de encomendas para{' '}
                <span className="gradient-text">transportadoras e empresas de logística</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10">
                Um sistema SaaS que acompanha cada encomenda desde que entra num ponto de receção até ser entregue,
                com código de rastreio, percurso completo, responsável por cada troço e prova de entrega.
                Para transporte rodoviário, ferroviário, marítimo e aéreo, e-commerce e courier, inclusive onde a internet falha.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-start">
                <div className="flex flex-col items-center gap-2 sm:max-w-xs mx-auto sm:mx-0">
                  <a
                    href={DEMO_MAILTO}
                    className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-8 py-4 text-lg font-semibold text-white hover:bg-[#1D4ED8] transition-colors min-h-[48px]"
                  >
                    Pedir demonstração
                  </a>
                  <p className="text-sm text-slate-400">
                    Abre o seu email com a mensagem pronta. Responderemos para combinar uma demonstração.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 sm:max-w-xs mx-auto sm:mx-0">
                  <a
                    href={RASTREIO_URL}
                    className="inline-flex items-center justify-center rounded-xl border-2 border-[#2563EB] px-8 py-4 text-lg font-semibold text-[#60A5FA] hover:bg-[#2563EB] hover:text-white transition-colors min-h-[48px]"
                  >
                    Já tem um código? Rastreie aqui
                  </a>
                  <p className="text-sm text-slate-400">
                    Vai para o portal de rastreio, onde só precisa do código do talão.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problema e solução */}
        <section className="py-16 lg:py-20 bg-[rgb(var(--color-secondary))]/40" aria-labelledby="problema">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="problema" className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Onde está a minha encomenda?
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-4">
                Quando uma encomenda passa por várias estações e transportadores, é fácil perder o rasto:
                ninguém sabe ao certo onde está, quem a tem, nem se já chegou. O cliente liga, a equipa procura,
                e em caso de dano ou extravio não há prova.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Com a <strong>logística MOVAGO</strong>, cada encomenda tem um código, um percurso registado,
                um responsável em cada troço e uma prova de entrega. O cliente acompanha sozinho, e a empresa
                ganha controlo e confiança.
              </p>
            </div>
          </div>
        </section>

        {/* Funcionalidades */}
        <section className="py-16 lg:py-24" aria-labelledby="funcionalidades">
          <div className="container mx-auto px-4">
            <SectionHeading
              id="funcionalidades"
              eyebrow="Funcionalidades"
              title="Tudo o que precisa para rastrear encomendas"
              subtitle="Da receção ao levantamento, cada passo fica registado e visível."
            />
            <FeatureGrid features={LOGISTICS_FEATURES} />
          </div>
        </section>

        {/* Como funciona */}
        <section className="py-16 lg:py-24 bg-[rgb(var(--color-secondary))]/40" aria-labelledby="como-funciona">
          <div className="container mx-auto px-4">
            <SectionHeading
              id="como-funciona"
              eyebrow="Como funciona"
              title="O percurso de uma encomenda em 5 passos"
              subtitle="O mesmo modelo serve para encomendas, mercadorias e carga que passam de estação em estação."
            />
            <StepList steps={LOGISTICS_STEPS} />
          </div>
        </section>

        {/* Para quem */}
        <section className="py-16 lg:py-24" aria-labelledby="para-quem">
          <div className="container mx-auto px-4">
            <SectionHeading
              id="para-quem"
              eyebrow="Para quem"
              title="Tipos de logística que o sistema acompanha"
              subtitle="Rodoviário, ferroviário, marítimo, aéreo, e-commerce, courier e mais: qualquer operação em que a carga passa de ponto em ponto."
            />
            <CardGrid items={LOGISTICS_AUDIENCES} />
            <p className="text-center mt-8">
              <a href="/logistica/transportadoras" className="text-[rgb(var(--color-accent))] font-semibold hover:underline">
                Ver como o sistema ajuda transportadoras e operadores de carga →
              </a>
            </p>
          </div>
        </section>

        {/* SaaS e desempenho */}
        <section className="py-16 lg:py-24 bg-[rgb(var(--color-secondary))]/40" aria-labelledby="saas">
          <div className="container mx-auto px-4">
            <SectionHeading
              id="saas"
              eyebrow="Software como serviço"
              title="Um SaaS que melhora o desempenho da sua operação"
              subtitle="Sem servidores para instalar e sem grandes investimentos iniciais em tecnologia."
            />
            <CardGrid items={SAAS_BENEFITS} columns={2} />
          </div>
        </section>

        {/* Rastreio para clientes */}
        <section className="py-16 lg:py-24" aria-labelledby="clientes">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center rounded-3xl border border-slate-700/50 bg-[rgb(var(--color-surface))] p-8 lg:p-12">
              <h2 id="clientes" className="text-2xl lg:text-3xl font-bold text-white mb-4">
                É cliente e tem um código de rastreio?
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Não precisa de conta. Escreva o código que está no talão no portal de rastreio e veja o estado
                da encomenda e por onde já passou.
              </p>
              <a
                href={RASTREIO_URL}
                className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-8 py-4 text-lg font-semibold text-white hover:bg-[#1D4ED8] transition-colors min-h-[48px]"
              >
                Rastrear a minha encomenda
              </a>
              <p className="text-sm text-slate-400 mt-3">
                Abre o portal oficial de rastreio da MOVAGO.{' '}
                <a href="/logistica/rastreio-de-encomendas" className="text-[rgb(var(--color-accent))] hover:underline">
                  Saiba como funciona
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Investidores e parceiros */}
        <section className="py-16 lg:py-24 bg-[rgb(var(--color-secondary))]/40" aria-labelledby="parceiros">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="parceiros" className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Investidores e parceiros
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                A MOVAGO está a construir uma plataforma SaaS de logística e transporte para Moçambique. Se tem
                interesse em soluções de software que tornam a logística mais eficiente e transparente, ou se quer
                integrar este sistema na sua operação, vamos conversar.
              </p>
              <a
                href={PARTNER_MAILTO}
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#2563EB] px-8 py-4 text-lg font-semibold text-[#60A5FA] hover:bg-[#2563EB] hover:text-white transition-colors min-h-[48px]"
              >
                Falar sobre parceria ou investimento
              </a>
              <p className="text-sm text-slate-400 mt-3">
                Abre o seu email, dirigido à equipa MOVAGO, com o assunto já preenchido.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24" aria-label="Perguntas frequentes sobre logística">
          <div className="container mx-auto px-4">
            <FaqSection items={LOGISTICS_FAQ} title="Perguntas frequentes sobre a logística MOVAGO" />
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 lg:py-24 bg-[rgb(var(--color-secondary))]/40">
          <div className="container mx-auto px-4">
            <CtaBanner
              title="Leve a sua operação de encomendas para o próximo nível"
              description="Conte-nos como funciona a sua operação e mostramos, numa demonstração, como o sistema se adapta à sua realidade."
              primary={{
                label: 'Pedir demonstração por email',
                href: DEMO_MAILTO,
                hint: 'Abre o seu email com a mensagem pronta para a equipa MOVAGO.',
              }}
              secondary={{
                label: 'Falar por WhatsApp',
                href: DEMO_WHATSAPP,
                hint: 'Abre o WhatsApp com uma mensagem inicial, para conversarmos de imediato.',
                external: true,
              }}
            />
            <p className="text-center text-sm text-slate-400 mt-6">
              Prefere o formulário?{' '}
              <a href="/contacto?assunto=Logística" className="text-[rgb(var(--color-accent))] hover:underline">
                Abra a página de contacto
              </a>
              .
            </p>
          </div>
        </section>

        {/* Links relacionados */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <RelatedLinks
              links={[
                {
                  name: 'Software para transportadoras',
                  href: '/logistica/transportadoras',
                  description: 'Como o sistema ajuda transportadoras e operadores de carga a ganhar controlo.',
                },
                {
                  name: 'Rastreio de encomendas',
                  href: '/logistica/rastreio-de-encomendas',
                  description: 'Como o cliente acompanha a encomenda com o código do talão.',
                },
                {
                  name: 'Transporte urbano MOVAGO',
                  href: '/transporte',
                  description: 'A app de transporte com chapas, táxi e moto-táxi em Maputo, Matola e Beira.',
                },
              ]}
            />
          </div>
        </section>
      </div>
    </>
  );
}
