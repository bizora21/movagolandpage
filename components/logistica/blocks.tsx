import Link from 'next/link';
import {
  QrCode,
  Route,
  UserCheck,
  Bell,
  Camera,
  MessageCircle,
  AlertTriangle,
  WifiOff,
  ShieldCheck,
  MapPin,
  Package,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';
import { BreadcrumbSchema, FaqSchema } from '@/components/seo/JsonLd';
import type { FaqEntry, IconName } from '@/lib/logistica';

const ICONS: Record<IconName, LucideIcon> = {
  qr: QrCode,
  route: Route,
  'user-check': UserCheck,
  bell: Bell,
  camera: Camera,
  message: MessageCircle,
  alert: AlertTriangle,
  'wifi-off': WifiOff,
  shield: ShieldCheck,
  'map-pin': MapPin,
  package: Package,
};

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav aria-label="Navegação estrutural" className="text-sm text-slate-400">
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, i) => (
            <li key={item.path} className="flex items-center gap-1">
              {i > 0 && <ChevronRight size={14} aria-hidden="true" />}
              {i < items.length - 1 ? (
                <Link href={item.path} className="hover:text-white transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span aria-current="page" className="text-slate-200">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  id?: string;
}) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-[rgb(var(--color-accent))] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-3xl lg:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-slate-400 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export function FeatureGrid({
  features,
}: {
  features: readonly { icon: IconName; title: string; description: string }[];
}) {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((f) => {
        const Icon = ICONS[f.icon];
        return (
          <li
            key={f.title}
            className="rounded-2xl border border-slate-700/50 bg-[rgb(var(--color-surface))] p-6"
          >
            <div className="w-12 h-12 rounded-xl bg-[rgb(var(--color-primary))]/10 flex items-center justify-center mb-4">
              <Icon className="text-[rgb(var(--color-primary))]" size={24} aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export function StepList({ steps }: { steps: readonly { title: string; description: string }[] }) {
  return (
    <ol className="max-w-3xl mx-auto space-y-4">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="flex gap-4 rounded-2xl border border-slate-700/50 bg-[rgb(var(--color-surface))] p-5"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgb(var(--color-primary))] text-white font-bold flex items-center justify-center">
            {i + 1}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function CardGrid({
  items,
  columns = 3,
}: {
  items: readonly { title: string; description: string }[];
  columns?: 2 | 3;
}) {
  return (
    <ul className={`grid sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''} gap-6`}>
      {items.map((item) => (
        <li
          key={item.title}
          className="rounded-2xl border border-slate-700/50 bg-[rgb(var(--color-surface))] p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

export function FaqSection({
  items,
  title = 'Perguntas frequentes',
}: {
  items: readonly FaqEntry[];
  title?: string;
}) {
  return (
    <>
      <FaqSchema items={items} />
      <SectionHeading title={title} />
      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-slate-700/50 bg-[rgb(var(--color-surface))]"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 hover:bg-white/5 rounded-xl">
              <h3 className="text-base font-semibold text-white">{item.question}</h3>
              <span
                aria-hidden="true"
                className="flex-shrink-0 text-[rgb(var(--color-primary))] transition-transform group-open:rotate-180"
              >
                ▼
              </span>
            </summary>
            <p className="px-5 pb-5 text-slate-400 leading-relaxed">{item.answer}</p>
          </details>
        ))}
      </div>
    </>
  );
}

interface CtaAction {
  label: string;
  href: string;
  /** Explica ao utilizador o que acontece ao clicar. */
  hint: string;
  external?: boolean;
}

export function CtaBanner({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: CtaAction;
  secondary?: CtaAction;
}) {
  const actions = [primary, secondary].filter(Boolean) as CtaAction[];
  return (
    <div className="max-w-4xl mx-auto rounded-3xl border border-[rgb(var(--color-primary))]/30 bg-gradient-to-br from-[rgb(var(--color-primary))]/20 to-[rgb(var(--color-accent))]/10 p-8 lg:p-12 text-center">
      <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">{title}</h2>
      <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">{description}</p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-start">
        {actions.map((action, i) => (
          <div key={action.label} className="flex flex-col items-center gap-2 sm:max-w-xs mx-auto sm:mx-0">
            <a
              href={action.href}
              {...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={
                i === 0
                  ? 'inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-8 py-4 text-lg font-semibold text-white hover:bg-[#1D4ED8] transition-colors min-h-[48px]'
                  : 'inline-flex items-center justify-center rounded-xl border-2 border-[#2563EB] px-8 py-4 text-lg font-semibold text-[#60A5FA] hover:bg-[#2563EB] hover:text-white transition-colors min-h-[48px]'
              }
            >
              {action.label}
            </a>
            <p className="text-sm text-slate-400">{action.hint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RelatedLinks({ links }: { links: { name: string; href: string; description: string }[] }) {
  return (
    <>
      <SectionHeading title="Continue a explorar" />
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="block h-full rounded-2xl border border-slate-700/50 bg-[rgb(var(--color-surface))] p-6 hover:border-[rgb(var(--color-primary))]/60 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{l.name}</h3>
              <p className="text-sm text-slate-400">{l.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
