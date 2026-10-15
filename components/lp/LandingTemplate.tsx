import Link from 'next/link';
import { Check } from 'lucide-react';
import { DemoForm } from '@/components/logistica/DemoForm';
import { StickyCta } from '@/components/logistica/StickyCta';
import { FaqSection, FeatureGrid, SectionHeading } from '@/components/logistica/blocks';
import { LOGISTICS_FEATURES, PILOT_OFFER, type FaqEntry, type IconName } from '@/lib/logistica';
import { SITE_NAME } from '@/lib/constants';

export interface LandingContent {
  /** Identifica a página no email recebido e nos relatórios (ex.: "lp-transportadoras"). */
  source: string;
  headline: React.ReactNode;
  subheadline: string;
  bullets: string[];
  /** Mostra a oferta do piloto no topo (e no formulário). */
  showOffer: boolean;
  defaultType?: string;
  /** Ícones das funcionalidades a destacar (por ordem). */
  featureIcons: IconName[];
  steps: { title: string; description: string }[];
  faq: FaqEntry[];
  formTitle: string;
  formDescription: string;
}

/**
 * Página de destino para anúncios: sem menu nem rodapé do site, um único objetivo
 * (o formulário no topo) e o mesmo tracking/UTMs da página /logistica/.
 */
export function LandingTemplate({ content }: { content: LandingContent }) {
  const features = content.featureIcons
    .map((icon) => LOGISTICS_FEATURES.find((f) => f.icon === icon))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));

  return (
    <div className="min-h-screen bg-[#0A0F1E] pb-24 lg:pb-0">
      {/* Cabeçalho mínimo: marca, sem links */}
      <header className="border-b border-slate-800">
        <div className="container mx-auto flex h-16 items-center gap-3 px-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563EB] shadow-lg">
            <span className="text-base font-bold text-white">M</span>
          </div>
          <span className="text-lg font-bold text-white">{SITE_NAME} Logística</span>
        </div>
      </header>

      {/* Hero com formulário */}
      <section className="py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                {content.headline}
              </h1>
              <p className="mb-6 text-lg leading-relaxed text-slate-300 sm:text-xl">{content.subheadline}</p>

              {content.showOffer && (
                <p className="mb-6 inline-block rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-2.5 text-sm font-semibold text-green-300 sm:text-base">
                  {PILOT_OFFER}
                </p>
              )}

              <ul className="space-y-3">
                {content.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-slate-200">
                    <Check className="mt-0.5 flex-shrink-0 text-green-400" size={20} aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <DemoForm
              id="pedir-demonstracao"
              source={content.source}
              title={content.formTitle}
              description={content.formDescription}
              offer={content.showOffer ? PILOT_OFFER : null}
              defaultType={content.defaultType}
            />
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-[rgb(var(--color-secondary))]/40 py-14 lg:py-20" aria-labelledby="lp-como-funciona">
        <div className="container mx-auto px-4">
          <SectionHeading id="lp-como-funciona" title="Como funciona" />
          <ol className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {content.steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-slate-700/50 bg-[rgb(var(--color-surface))] p-6">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(var(--color-primary))] font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-14 lg:py-20" aria-labelledby="lp-funcionalidades">
        <div className="container mx-auto px-4">
          <SectionHeading id="lp-funcionalidades" title="O que o sistema faz por si" />
          <FeatureGrid features={features} />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[rgb(var(--color-secondary))]/40 py-14 lg:py-20" aria-label="Perguntas frequentes">
        <div className="container mx-auto px-4">
          <FaqSection items={content.faq} title="Perguntas frequentes" />
        </div>
      </section>

      {/* CTA único: volta ao formulário */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Pronto para ter controlo de cada encomenda?</h2>
            <a
              href="#pedir-demonstracao"
              data-location="lp-final"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#2563EB] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
            >
              Pedir demonstração
            </a>
            <p className="mt-3 text-sm text-slate-400">Leva-o ao formulário no topo da página.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} {SITE_NAME}.{' '}
          <Link href="/privacidade" className="underline hover:text-slate-300">Política de privacidade</Link>
        </p>
      </footer>

      <StickyCta targetId="pedir-demonstracao" watchIds={['pedir-demonstracao']} />
    </div>
  );
}
