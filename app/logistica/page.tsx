import type { Metadata } from 'next';
import { Check, Gift, X } from 'lucide-react';
import { SITE_URL, RASTREIO_URL, CONTACT_INFO } from '@/lib/constants';
import {
  LOGISTICS_FEATURES,
  LOGISTICS_STEPS,
  LOGISTICS_AUDIENCES,
  SAAS_BENEFITS,
  LOGISTICS_FAQ,
  PILOT_OFFER,
  mailtoHref,
  whatsappHref,
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
import { DemoForm } from '@/components/logistica/DemoForm';
import { StickyBar } from '@/components/logistica/StickyBar';

const PATH = '/logistica/';

export const metadata: Metadata = {
  title: 'Logística e Rastreio de Encomendas em Moçambique',
  description:
    'Sistema SaaS de logística e rastreio de encomendas para transportadoras, courier e e-commerce em Moçambique. Código de rastreio e prova de entrega.',
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: 'Logística e Rastreio de Encomendas em Moçambique | MOVAGO',
    description:
      'Saiba onde está cada encomenda e prove cada entrega: código de rastreio, percurso completo e avisos aos clientes. Peça uma demonstração.',
    url: `${SITE_URL}${PATH}`,
    type: 'website',
    locale: 'pt_MZ',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'MOVAGO Logística - rastreio de encomendas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logística e Rastreio de Encomendas em Moçambique | MOVAGO',
    description:
      'Saiba onde está cada encomenda e prove cada entrega. Sistema SaaS de rastreio para transportadoras, courier e e-commerce.',
    images: ['/images/og-image.png'],
  },
};

const HERO_POINTS = [
  'Código de rastreio único para cada encomenda',
  'Percurso completo e responsável registado em cada troço',
  'Prova de entrega com foto e assinatura',
  'Avisos aos clientes por WhatsApp e SMS',
  'Funciona mesmo sem internet',
];

const WITHOUT_SYSTEM = [
  'Ninguém sabe ao certo onde está a encomenda',
  'Clientes a ligar a perguntar pelo estado',
  'Sem prova quando há dano, atraso ou extravio',
  'Troços sem um responsável claro',
];

const WITH_SYSTEM = [
  'Estado e percurso de cada encomenda sempre visíveis',
  'O cliente consulta sozinho, só com o código',
  'Histórico com fotos, assinaturas e problemas registados',
  'Transportador registado em cada saída',
];

export default function LogisticaPage() {
  return (
    <>
      <LogisticsServiceSchema path={PATH} />
      <LogisticsSoftwareSchema />

      <div className="bg-[#0A0F1E] pt-24 sm:pt-28 pb-24 lg:pb-0">
        {/* Hero com formulário visível (landing page para tráfego pago) */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { name: 'Início', path: '/' },
                { name: 'Logística', path: PATH },
              ]}
            />

            <div className="mt-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <p className="inline-block rounded-full border border-[rgb(var(--color-primary))]/40 bg-[rgb(var(--color-primary))]/10 px-4 py-1.5 text-sm font-medium text-[rgb(var(--color-accent))] mb-6">
                  Logística e rastreio de encomendas · SaaS
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
                  Saiba onde está cada encomenda.{' '}
                  <span className="gradient-text">Prove cada entrega.</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-6">
                  Sistema online de rastreio para transportadoras, courier, lojas online e operadores de carga
                  rodoviária, ferroviária, marítima e aérea em Moçambique.
                </p>

                <p className="mb-8 inline-flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-2.5 text-sm font-semibold text-green-300 sm:text-base">
                  <Gift size={20} className="flex-shrink-0" aria-hidden="true" />
                  {PILOT_OFFER}
                </p>

                <ul className="space-y-3 mb-8">
                  {HERO_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-slate-200">
                      <Check className="mt-0.5 flex-shrink-0 text-green-400" size={20} aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-slate-400">
                  Já tem um código de rastreio?{' '}
                  <a href={RASTREIO_URL} className="font-semibold text-[rgb(var(--color-accent))] hover:underline">
                    Rastreie a sua encomenda aqui
                  </a>
                  .
                </p>
              </div>

              <DemoForm
                id="pedir-demonstracao"
                source="logistica-hero"
                title="Peça a sua demonstração"
                description="Preencha em menos de 1 minuto. A equipa MOVAGO contacta-o para mostrar o sistema com a sua realidade."
              />
            </div>
          </div>
        </section>

        {/* Tipos de operação (faixa) */}
        <section className="border-y border-slate-800 bg-[rgb(var(--color-secondary))]/40 py-8" aria-label="Tipos de operação">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-400 mb-4">
              Para quem transporta, entrega ou vende
            </p>
            <ul className="flex flex-wrap justify-center gap-2">
              {['Transportadoras', 'Carga rodoviária', 'Ferroviário', 'Marítimo e fluvial', 'Aéreo', 'E-commerce', 'Courier', 'Armazéns e distribuição'].map(
                (type) => (
                  <li
                    key={type}
                    className="rounded-full border border-slate-700 bg-[rgb(var(--color-surface))] px-4 py-2 text-sm text-slate-200"
                  >
                    {type}
                  </li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* Problema e solução */}
        <section className="py-16 lg:py-24" aria-labelledby="problema">
          <div className="container mx-auto px-4">
            <SectionHeading
              id="problema"
              title="Onde está a minha encomenda?"
              subtitle="Quando a carga passa por várias estações e transportadores, é fácil perder o rasto. Com a logística MOVAGO, cada passo fica registado."
            />
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-white mb-4">Sem um sistema</h3>
                <ul className="space-y-3">
                  {WITHOUT_SYSTEM.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300">
                      <X className="mt-0.5 flex-shrink-0 text-red-400" size={20} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-white mb-4">Com a logística MOVAGO</h3>
                <ul className="space-y-3">
                  {WITH_SYSTEM.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-200">
                      <Check className="mt-0.5 flex-shrink-0 text-green-400" size={20} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="py-16 lg:py-24 bg-[rgb(var(--color-secondary))]/40" aria-labelledby="saas">
          <div className="container mx-auto px-4">
            <SectionHeading
              id="saas"
              eyebrow="Software como serviço"
              title="Mais controlo, clientes mais informados"
              subtitle="Sem servidores para instalar e sem grandes investimentos iniciais em tecnologia."
            />
            <CardGrid items={SAAS_BENEFITS} columns={2} />
            <div className="mt-10">
              <CtaBanner
                title="Veja o sistema a trabalhar com a sua operação"
                description="Diga-nos como opera e preparamos uma demonstração à medida."
                primary={{
                  label: 'Pedir demonstração',
                  href: '#pedir-demonstracao-final',
                  hint: 'Leva-o ao formulário. Leva menos de 1 minuto a preencher.',
                }}
              />
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="py-16 lg:py-24" aria-labelledby="como-funciona">
          <div className="container mx-auto px-4">
            <SectionHeading
              id="como-funciona"
              eyebrow="Como funciona"
              title="O percurso de uma encomenda em 5 passos"
              subtitle="O mesmo modelo serve para encomendas, mercadorias e carga que passam de ponto em ponto."
            />
            <StepList steps={LOGISTICS_STEPS} />
          </div>
        </section>

        {/* Funcionalidades */}
        <section className="py-16 lg:py-24 bg-[rgb(var(--color-secondary))]/40" aria-labelledby="funcionalidades">
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
              <a href="/logistica/transportadoras/" className="text-[rgb(var(--color-accent))] font-semibold hover:underline">
                Ver como o sistema ajuda transportadoras e operadores de carga →
              </a>
            </p>
          </div>
        </section>

        {/* Em fase de pilotos: prova/confiança sem dados inventados */}
        <section className="py-16 lg:py-20" aria-labelledby="pilotos">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-3xl border border-[rgb(var(--color-primary))]/30 bg-gradient-to-br from-[rgb(var(--color-primary))]/15 to-[rgb(var(--color-accent))]/5 p-8 text-center lg:p-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[rgb(var(--color-accent))]">
                Em fase de pilotos
              </p>
              <h2 id="pilotos" className="mb-4 text-2xl font-bold text-white lg:text-4xl">
                Seja uma das primeiras empresas a testar
              </h2>
              <p className="mb-6 leading-relaxed text-slate-300">
                A logística MOVAGO está em fase de pilotos. Estamos a abrir as primeiras vagas para empresas que
                queiram testar o sistema na sua operação, gratuitamente durante 30 dias.
              </p>
              {/*
                TODO (prova social): quando existirem pilotos e clientes reais, colocar aqui
                os logótipos das empresas e depoimentos verdadeiros (com autorização).
                Não publicar números, logótipos ou citações que não sejam reais.
              */}
              <a
                href="#pedir-demonstracao-final"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#2563EB] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
              >
                Quero testar o piloto
              </a>
              <p className="mt-3 text-sm text-slate-400">Leva-o ao formulário. Leva menos de 1 minuto a preencher.</p>
            </div>
          </div>
        </section>

        {/* Clientes com código */}
        <section className="py-12 lg:py-16 bg-[rgb(var(--color-secondary))]/40" aria-labelledby="clientes">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="clientes" className="text-2xl lg:text-3xl font-bold text-white mb-3">
                É cliente e tem um código de rastreio?
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Não precisa de conta. Escreva o código do talão no portal de rastreio e veja o estado e o
                percurso da encomenda.
              </p>
              <a
                href={RASTREIO_URL}
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#2563EB] px-8 py-3 text-lg font-semibold text-[#60A5FA] hover:bg-[#2563EB] hover:text-white transition-colors min-h-[48px]"
              >
                Rastrear a minha encomenda
              </a>
              <p className="text-sm text-slate-400 mt-3">Abre o portal oficial de rastreio da MOVAGO.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24" aria-label="Perguntas frequentes sobre logística">
          <div className="container mx-auto px-4">
            <FaqSection items={LOGISTICS_FAQ} title="Perguntas frequentes sobre a logística MOVAGO" />
          </div>
        </section>

        {/* Formulário final */}
        <section className="py-16 lg:py-24 bg-[rgb(var(--color-secondary))]/40" aria-labelledby="pedido-final">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
              <div>
                <h2 id="pedido-final" className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Leve a sua operação de encomendas para o próximo nível
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  Conte-nos como funciona a sua operação. Mostramos, numa demonstração, como o sistema se
                  adapta à sua realidade.
                </p>

                <h3 className="text-lg font-semibold text-white mb-4">O que acontece a seguir</h3>
                <ol className="space-y-4 mb-8">
                  {[
                    ['Envia o pedido', 'Preenche o formulário com os dados da sua empresa.'],
                    ['Contactamos', 'A equipa MOVAGO contacta-o por telefone, WhatsApp ou email.'],
                    ['Demonstração à medida', 'Mostramos o sistema adaptado ao seu tipo de operação.'],
                  ].map(([title, text], i) => (
                    <li key={title} className="flex gap-4">
                      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[rgb(var(--color-primary))] text-white font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-white">{title}</p>
                        <p className="text-sm text-slate-400">{text}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="rounded-2xl border border-slate-700/50 bg-[rgb(var(--color-surface))] p-5">
                  <p className="text-sm font-semibold text-white mb-3">Prefere falar diretamente?</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={whatsappHref('Olá! Gostaria de conhecer o sistema de logística e rastreio de encomendas da MOVAGO.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-track="whatsapp"
                      data-location="form-section"
                      className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-600 px-4 py-3 text-sm font-semibold text-slate-100 hover:bg-white/5 transition-colors min-h-[48px]"
                    >
                      Falar por WhatsApp
                    </a>
                    <a
                      href={mailtoHref(
                        'Logística MOVAGO',
                        'Olá, gostaria de saber mais sobre o sistema de logística e rastreio de encomendas.'
                      )}
                      className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-600 px-4 py-3 text-sm font-semibold text-slate-100 hover:bg-white/5 transition-colors min-h-[48px]"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <DemoForm id="pedir-demonstracao-final" source="logistica-final" />
            </div>
          </div>
        </section>

        {/* Links relacionados */}
        <section className="py-16 lg:py-24 bg-[rgb(var(--color-secondary))]/40">
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

      <StickyBar />
    </>
  );
}
