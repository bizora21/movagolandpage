'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle2, Gift, Loader2, ShieldCheck } from 'lucide-react';
import { FORMSPREE_FORM_ID, CONTACT_INFO } from '@/lib/constants';
import { DEMO_URL, LOGISTICS_AUDIENCES, PILOT_OFFER, normalizeMozPhone, whatsappHref } from '@/lib/logistica';
import { PENDING_LEAD_KEY, UTM_PARAMS, readCampaignParams } from '@/lib/analytics';

const inputClass =
  'w-full min-h-[48px] rounded-xl border border-slate-700 bg-[rgb(var(--color-bg))] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-[rgb(var(--color-primary))] focus:ring-1 focus:ring-[rgb(var(--color-primary))] transition-colors';
const labelClass = 'block text-sm font-medium text-slate-200 mb-1.5';
const optionalClass = 'font-normal text-slate-400';
const errorClass = 'mt-1 text-sm text-red-400';

const LOGISTICS_TYPES = [...LOGISTICS_AUDIENCES.map((a) => a.title), 'Outro tipo de operação'];

interface DemoFormProps {
  /** Id do elemento (âncora). Tem de ser único na página. */
  id?: string;
  /** Identifica de onde veio o pedido (aparece no email recebido). */
  source: string;
  title?: string;
  description?: string;
  /** Oferta destacada no topo do formulário. Passe `null` para não mostrar. */
  offer?: string | null;
  /** Tipo de operação pré-selecionado. */
  defaultType?: string;
}

export function DemoForm({
  id = 'pedir-demonstracao',
  source,
  title = 'Peça a sua demonstração',
  description = 'Conte-nos como funciona a sua operação e mostramos o sistema a trabalhar com a sua realidade.',
  offer = PILOT_OFFER,
  defaultType = '',
}: DemoFormProps) {
  const router = useRouter();
  const [state, submit] = useForm(FORMSPREE_FORM_ID);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Preenche os campos ocultos (UTMs e página) no navegador, sem causar novo render
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const params = readCampaignParams();
    for (const key of UTM_PARAMS) {
      const el = form.elements.namedItem(key);
      if (el instanceof HTMLInputElement) el.value = params[key] ?? '';
    }
    const page = form.elements.namedItem('pagina');
    if (page instanceof HTMLInputElement) page.value = window.location.href.slice(0, 500);
  }, []);

  // Sucesso: marca o lead e segue para a página de agradecimento (onde o evento Lead é disparado)
  useEffect(() => {
    if (!state.succeeded) return;
    try {
      window.sessionStorage.setItem(PENDING_LEAD_KEY, '1');
    } catch {
      // sem sessionStorage: a página de agradecimento abre na mesma, só não conta o Lead
    }
    router.push(`/logistica/obrigado/${window.location.search}`);
  }, [state.succeeded, router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const phone = normalizeMozPhone(String(data.get('telefone') ?? ''));
    if (!phone) {
      setPhoneError('Indique um número moçambicano válido, por exemplo +258 84 123 4567.');
      form.querySelector<HTMLInputElement>('[name="telefone"]')?.focus();
      return;
    }
    setPhoneError(null);

    // Só enviamos os campos preenchidos (email, cidades e mensagem são opcionais)
    const payload: Record<string, string> = {};
    data.forEach((value, key) => {
      const text = String(value).trim();
      if (text) payload[key] = text;
    });
    payload.telefone = phone;
    // Garantia extra: a campanha de origem segue sempre no pedido, mesmo que o campo oculto tenha sido reposto
    for (const [key, value] of Object.entries(readCampaignParams())) {
      if (!payload[key]) payload[key] = value;
    }
    if (!payload.pagina) payload.pagina = window.location.href.slice(0, 500);

    await submit(payload);
  };

  if (state.succeeded) {
    return (
      <div
        id={id}
        className="scroll-mt-28 rounded-3xl border border-green-500/30 bg-[rgb(var(--color-surface))] p-8 text-center"
        role="status"
      >
        <CheckCircle2 className="mx-auto mb-4 text-green-400" size={48} aria-hidden="true" />
        <h2 className="text-2xl font-bold text-white mb-2">Pedido enviado!</h2>
        <p className="text-slate-300 leading-relaxed mb-6">
          Recebemos os seus dados. A equipa MOVAGO vai contactá-lo para combinar a demonstração.
        </p>
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-5 inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-[#2563EB] px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
        >
          Ver a demonstração agora →
        </a>
        <p className="text-sm text-slate-400">
          Quer falar já?{' '}
          <a
            href={whatsappHref('Olá! Acabei de pedir uma demonstração da logística MOVAGO no site.')}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp"
            data-location="form-success"
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
      {offer && (
        <p className="mb-5 flex items-start gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-sm font-semibold text-green-300">
          <Gift size={20} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
          <span>{offer}</span>
        </p>
      )}
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-slate-400 mb-6 leading-relaxed">{description}</p>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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
            aria-invalid={phoneError ? true : undefined}
            aria-describedby={phoneError ? `${id}-telefone-erro` : undefined}
            onChange={() => phoneError && setPhoneError(null)}
            className={inputClass}
          />
          {phoneError && (
            <p id={`${id}-telefone-erro`} role="alert" className={errorClass}>{phoneError}</p>
          )}
        </div>

        <div>
          <label htmlFor={`${id}-tipo`} className={labelClass}>Tipo de operação *</label>
          <select
            id={`${id}-tipo`}
            name="tipo_logistica"
            required
            defaultValue={defaultType}
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
          <label htmlFor={`${id}-email`} className={labelClass}>
            Email <span className={optionalClass}>(opcional)</span>
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nome@empresa.com"
            className={inputClass}
          />
          <ValidationError field="email" errors={state.errors} className={errorClass} />
        </div>

        <div>
          <label htmlFor={`${id}-rotas`} className={labelClass}>
            Cidades ou rotas onde opera <span className={optionalClass}>(opcional)</span>
          </label>
          <input
            id={`${id}-rotas`}
            name="cidades_rotas"
            type="text"
            placeholder="Ex.: Maputo – Beira – Nampula"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`${id}-mensagem`} className={labelClass}>
            Mensagem <span className={optionalClass}>(opcional)</span>
          </label>
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

        {/* Dados do pedido (campos ocultos): assunto do email, origem, página e campanha (UTMs).
            Os campos pagina/utm_* não levam value: são preenchidos no navegador (useEffect) e, se o React
            os repuser, o handleSubmit volta a juntá-los ao pedido. */}
        <input type="hidden" name="_subject" value="Pedido de demonstração - Logística MOVAGO" />
        <input type="hidden" name="origem" value={source} />
        <input type="hidden" name="pagina" />
        {UTM_PARAMS.map((key) => (
          <input key={key} type="hidden" name={key} />
        ))}

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
            Usamos os seus dados apenas para responder a este pedido, conforme a nossa{' '}
            <Link href="/privacidade" className="underline hover:text-white">política de privacidade</Link>.
          </span>
        </p>
      </form>
    </div>
  );
}
