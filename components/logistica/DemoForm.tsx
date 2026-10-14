'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';
import { FORMSPREE_FORM_ID, CONTACT_INFO } from '@/lib/constants';
import { LOGISTICS_AUDIENCES, whatsappHref } from '@/lib/logistica';

// Parâmetros de campanha guardados no pedido, para o tráfego pago poder ser medido
const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
] as const;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

const inputClass =
  'w-full min-h-[48px] rounded-xl border border-slate-700 bg-[rgb(var(--color-bg))] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-[rgb(var(--color-primary))] focus:ring-1 focus:ring-[rgb(var(--color-primary))] transition-colors';
const labelClass = 'block text-sm font-medium text-slate-200 mb-1.5';
const errorClass = 'mt-1 text-sm text-red-400';

// Lidos no momento do envio (e não no render), para não depender de estado
function readParam(key: string): () => string | undefined {
  return () => {
    const value = new URLSearchParams(window.location.search).get(key);
    return value ? value.slice(0, 200) : undefined;
  };
}

const LOGISTICS_TYPES = [...LOGISTICS_AUDIENCES.map((a) => a.title), 'Outro tipo de operação'];

interface DemoFormProps {
  /** Id do elemento (âncora). Tem de ser único na página. */
  id?: string;
  /** Identifica de onde veio o pedido (aparece no email recebido). */
  source: string;
  title?: string;
  description?: string;
}

export function DemoForm({
  id = 'pedir-demonstracao',
  source,
  title = 'Peça a sua demonstração',
  description = 'Conte-nos como funciona a sua operação e mostramos o sistema a trabalhar com a sua realidade.',
}: DemoFormProps) {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID, {
    data: {
      origem: source,
      pagina: () => window.location.href.slice(0, 500),
      ...Object.fromEntries(TRACKING_PARAMS.map((key) => [key, readParam(key)])),
    },
  });
  const tracked = useRef(false);

  // Evento de conversão (só dispara se o utilizador tiver GA4 / Google Ads / Meta Pixel instalado no site)
  useEffect(() => {
    if (!state.succeeded || tracked.current) return;
    tracked.current = true;
    try {
      window.gtag?.('event', 'generate_lead', { event_category: 'logistica', event_label: source });
      window.fbq?.('track', 'Lead', { content_name: 'Demonstração Logística' });
      window.dataLayer?.push({ event: 'generate_lead', form_source: source });
    } catch {
      // medição nunca deve quebrar o formulário
    }
  }, [state.succeeded, source]);

  if (state.succeeded) {
    return (
      <div
        id={id}
        className="scroll-mt-28 rounded-3xl border border-green-500/30 bg-[rgb(var(--color-surface))] p-8 text-center"
        role="status"
      >
        <CheckCircle2 className="mx-auto mb-4 text-green-400" size={48} aria-hidden="true" />
        <h3 className="text-2xl font-bold text-white mb-2">Pedido enviado!</h3>
        <p className="text-slate-300 leading-relaxed mb-6">
          Recebemos os seus dados. A equipa MOVAGO vai contactá-lo para combinar a demonstração.
        </p>
        <p className="text-sm text-slate-400">
          Quer falar já?{' '}
          <a
            href={whatsappHref('Olá! Acabei de pedir uma demonstração da logística MOVAGO no site.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgb(var(--color-accent))] font-semibold hover:underline"
          >
            Fale connosco por WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div
      id={id}
      className="scroll-mt-28 rounded-3xl border border-slate-700/60 bg-[rgb(var(--color-surface))] p-6 sm:p-8 shadow-2xl"
    >
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 mb-6 leading-relaxed">{description}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${id}-nome`} className={labelClass}>Nome *</label>
            <input
              id={`${id}-nome`}
              name="nome"
              type="text"
              autoComplete="name"
              required
              placeholder="O seu nome"
              className={inputClass}
            />
            <ValidationError field="nome" errors={state.errors} className={errorClass} />
          </div>
          <div>
            <label htmlFor={`${id}-empresa`} className={labelClass}>Empresa *</label>
            <input
              id={`${id}-empresa`}
              name="empresa"
              type="text"
              autoComplete="organization"
              required
              placeholder="Nome da empresa"
              className={inputClass}
            />
            <ValidationError field="empresa" errors={state.errors} className={errorClass} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${id}-email`} className={labelClass}>Email *</label>
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="nome@empresa.com"
              className={inputClass}
            />
            <ValidationError field="email" errors={state.errors} className={errorClass} />
          </div>
          <div>
            <label htmlFor={`${id}-telefone`} className={labelClass}>Telemóvel / WhatsApp *</label>
            <input
              id={`${id}-telefone`}
              name="telefone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              required
              placeholder="+258 8X XXX XXXX"
              className={inputClass}
            />
            <ValidationError field="telefone" errors={state.errors} className={errorClass} />
          </div>
        </div>

        <div>
          <label htmlFor={`${id}-tipo`} className={labelClass}>Tipo de operação *</label>
          <select
            id={`${id}-tipo`}
            name="tipo_logistica"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>Escolha o tipo de logística</option>
            {LOGISTICS_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <ValidationError field="tipo_logistica" errors={state.errors} className={errorClass} />
        </div>

        <div>
          <label htmlFor={`${id}-rotas`} className={labelClass}>Cidades ou rotas onde opera</label>
          <input
            id={`${id}-rotas`}
            name="cidades_rotas"
            type="text"
            placeholder="Ex.: Maputo – Beira – Nampula"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`${id}-mensagem`} className={labelClass}>Mensagem</label>
          <textarea
            id={`${id}-mensagem`}
            name="mensagem"
            rows={3}
            placeholder="Quantas encomendas por mês? O que quer melhorar na sua operação?"
            className={`${inputClass} resize-none`}
          />
          <ValidationError field="mensagem" errors={state.errors} className={errorClass} />
        </div>

        {/* Campo anti-spam: invisível para pessoas, preenchido por robôs */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor={`${id}-gotcha`}>Não preencha este campo</label>
          <input id={`${id}-gotcha`} type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </div>

        {/* Dados do pedido para o email recebido */}
        <input type="hidden" name="_subject" value="Pedido de demonstração - Logística MOVAGO" />

        {state.errors && (
          <p role="alert" className="rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
            Não foi possível enviar o pedido. Verifique os campos acima e tente novamente. Se o problema
            continuar, escreva-nos para{' '}
            <a href={`mailto:${CONTACT_INFO.email}`} className="underline">{CONTACT_INFO.email}</a> ou use o WhatsApp.
          </p>
        )}

        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-8 py-4 text-lg font-semibold text-white hover:bg-[#1D4ED8] disabled:opacity-60 disabled:cursor-not-allowed transition-colors min-h-[52px]"
        >
          {state.submitting ? (
            <>
              <Loader2 className="animate-spin" size={20} aria-hidden="true" />
              A enviar...
            </>
          ) : (
            'Pedir demonstração'
          )}
        </button>

        <p className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
          <ShieldCheck size={16} className="mt-0.5 flex-shrink-0 text-green-400" aria-hidden="true" />
          <span>
            Sem compromisso. Usamos os seus dados apenas para responder a este pedido, conforme a nossa{' '}
            <Link href="/privacidade" className="underline hover:text-white">política de privacidade</Link>.
          </span>
        </p>
      </form>
    </div>
  );
}
