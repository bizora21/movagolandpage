import type { Metadata } from 'next';
import { SITE_URL, RASTREIO_URL } from '@/lib/constants';
import { TRACKING_FAQ, DEMO_MAILTO } from '@/lib/logistica';
import { LogisticsServiceSchema } from '@/components/seo/JsonLd';
import {
  Breadcrumbs,
  SectionHeading,
  StepList,
  CardGrid,
  FaqSection,
  CtaBanner,
  RelatedLinks,
} from '@/components/logistica/blocks';

const PATH = '/logistica/rastreio-de-encomendas/';

export const metadata: Metadata = {
  title: 'Rastreio de Encomendas em Moçambique',
  description:
    'Como rastrear a sua encomenda em Moçambique com a MOVAGO: escreva o código do talão, sem criar conta, e veja o estado e o percurso até à entrega.',
  keywords: [
    'rastreio de encomendas Moçambique',
    'rastrear encomenda',
    'onde está a minha encomenda',
    'código de rastreio',
    'acompanhar encomenda',
    'rastreamento de encomendas Maputo',
    'MOVAGO rastreio',
  ],
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: 'Rastreio de Encomendas em Moçambique | MOVAGO',
    description: 'Escreva o código do talão e acompanhe o estado e o percurso da sua encomenda, sem criar conta.',
    url: `${SITE_URL}${PATH}`,
    type: 'website',
    locale: 'pt_MZ',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Rastreio de encomendas MOVAGO' }],
  },
};

const TRACK_STEPS = [
  {
    title: 'Guarde o código do talão',
    description:
      'No momento da receção da encomenda, o remetente recebe um talão com o código de rastreio. Se for o destinatário, peça-o ao remetente.',
  },
  {
    title: 'Abra o portal de rastreio',
    description:
      'Aceda ao portal de rastreio da MOVAGO a partir do telemóvel ou do computador. Não é preciso criar conta nem instalar nada.',
  },
  {
    title: 'Escreva o código e consulte',
    description:
      'Veja o estado atual da encomenda e por onde já passou, a qualquer momento.',
  },
] as const;

const STATES = [
  {
    title: 'Recebida na estação',
    description: 'A encomenda foi registada e o código de rastreio foi entregue ao remetente.',
  },
  {
    title: 'Em trânsito',
    description: 'A encomenda saiu da estação e segue viagem, às vezes com paragens pelo caminho.',
  },
  {
    title: 'Pode levantar',
    description: 'A encomenda chegou à estação de destino e já pode ser levantada pelo destinatário.',
  },
  {
    title: 'Entregue',
    description: 'A encomenda foi levantada, com prova de entrega registada. O processo fica concluído.',
  },
] as const;

export default function RastreioPage() {
  return (
    <>
      <LogisticsServiceSchema
        path={PATH}
        name="Rastreio de Encomendas MOVAGO"
        description="Página pública de rastreio onde remetente e destinatário acompanham o estado e o percurso de uma encomenda com o código do talão, sem criar conta."
      />

      <div className="bg-[#0A0F1E] pt-28 sm:pt-32">
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { name: 'Início', path: '/' },
                { name: 'Logística', path: '/logistica' },
                { name: 'Rastreio de encomendas', path: PATH },
              ]}
            />
            <div className="max-w-4xl mx-auto text-center mt-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
                Rastreio de encomendas em{' '}
                <span className="gradient-text">Moçambique</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10">
                Escreva o código do talão e saiba onde está a sua encomenda. Sem criar conta, a qualquer hora.
              </p>
              <div className="flex flex-col items-center gap-2 max-w-md mx-auto">
                <a
                  href={RASTREIO_URL}
                  className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-8 py-4 text-lg font-semibold text-white hover:bg-[#1D4ED8] transition-colors min-h-[48px]"
                >
                  Rastrear a minha encomenda
                </a>
                <p className="text-sm text-slate-400">
                  Abre o portal oficial de rastreio da MOVAGO, onde só precisa do código.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[rgb(var(--color-secondary))]/40" aria-labelledby="como-rastrear">
          <div className="container mx-auto px-4">
            <SectionHeading
              id="como-rastrear"
              eyebrow="Como rastrear"
              title="Como acompanhar a sua encomenda em 3 passos"
            />
            <StepList steps={TRACK_STEPS} />
          </div>
        </section>

        <section className="py-16 lg:py-24" aria-labelledby="estados">
          <div className="container mx-auto px-4">
            <SectionHeading
              id="estados"
              eyebrow="Estados"
              title="O que significa cada estado da encomenda"
              subtitle="A página de rastreio mostra o estado atual e o percurso já feito."
            />
            <CardGrid items={STATES} columns={2} />
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[rgb(var(--color-secondary))]/40" aria-labelledby="privacidade">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="privacidade" className="text-3xl lg:text-4xl font-bold text-white mb-4">
                A sua privacidade em primeiro lugar
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                A página pública mostra apenas o essencial, o estado e o percurso. Nunca são mostrados telefones,
                valores ou fotografias. Remetente e destinatário podem ainda receber avisos por WhatsApp ou SMS
                da estação, ao longo do percurso.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24" aria-label="Perguntas frequentes sobre rastreio">
          <div className="container mx-auto px-4">
            <FaqSection items={TRACKING_FAQ} title="Perguntas frequentes sobre rastreio" />
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[rgb(var(--color-secondary))]/40">
          <div className="container mx-auto px-4">
            <CtaBanner
              title="Tem uma empresa que entrega encomendas?"
              description="Ofereça aos seus clientes um código de rastreio e uma prova de entrega. Peça uma demonstração do sistema."
              primary={{
                label: 'Pedir demonstração por email',
                href: DEMO_MAILTO,
                hint: 'Abre o seu email com a mensagem pronta para a equipa MOVAGO.',
              }}
              secondary={{
                label: 'Conhecer o sistema',
                href: '/logistica',
                hint: 'Veja as funcionalidades e como funciona para empresas.',
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
                  description: 'O sistema por trás do rastreio: funcionalidades e como funciona.',
                },
                {
                  name: 'Software para transportadoras',
                  href: '/logistica/transportadoras',
                  description: 'Para empresas de transporte e logística que querem rastrear carga.',
                },
                {
                  name: 'Contacto',
                  href: '/contacto',
                  description: 'Precisa de ajuda? Fale com a equipa MOVAGO.',
                },
              ]}
            />
          </div>
        </section>
      </div>
    </>
  );
}
