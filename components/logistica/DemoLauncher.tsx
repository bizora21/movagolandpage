'use client';

import { useEffect, useRef, useState } from 'react';
import { useSubmit } from '@formspree/react';
import { ExternalLink, Loader2, X } from 'lucide-react';
import { FORMSPREE_FORM_ID } from '@/lib/constants';
import { DEMO_URL, normalizeMozPhone } from '@/lib/logistica';
import { readCampaignParams, trackEvent } from '@/lib/analytics';

/** De onde o clique veio. Vai no campo "origem" do lead. */
export type DemoOrigin = 'hero' | 'secao' | 'obrigado';

const inputClass =
  'w-full min-h-[48px] rounded-xl border border-slate-700 bg-[rgb(var(--color-bg))] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-[rgb(var(--color-primary))] focus:ring-1 focus:ring-[rgb(var(--color-primary))] transition-colors';
const labelClass = 'block text-sm font-medium text-slate-200 mb-1.5';

interface DemoLaunchButtonProps {
  origem: DemoOrigin;
  children: React.ReactNode;
  className?: string;
}

/**
 * Botão que abre uma janela de captação rápida (nome + WhatsApp). Ao enviar, guarda o lead
 * pelo mesmo canal do formulário principal (Formspree) e abre a demonstração.
 */
export function DemoLaunchButton({ origem, children, className }: DemoLaunchButtonProps) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [nameError, setNameError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const submit = useSubmit(FORMSPREE_FORM_ID);
  const dialogRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpen(false);
    setDone(false);
    setSubmitting(false);
    setNameError(null);
    setPhoneError(null);
    openerRef.current?.focus();
  };

  // Foco no primeiro campo ao abrir; Escape fecha
  useEffect(() => {
    if (!open) return;
    nameRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    const data = new FormData(event.currentTarget);
    const nome = String(data.get('nome') ?? '').trim();
    const telefone = normalizeMozPhone(String(data.get('whatsapp') ?? ''));

    // 1) Validação SÍNCRONA: sem contacto válido a demo não abre
    let valid = true;
    if (nome.length < 2) {
      setNameError('Indique o seu nome.');
      valid = false;
    } else setNameError(null);
    if (!telefone) {
      setPhoneError('Indique um WhatsApp moçambicano válido, por exemplo +258 84 123 4567.');
      valid = false;
    } else setPhoneError(null);
    if (!valid || !telefone) return;

    // 2) Abre a demo AGORA, ainda dentro do clique e antes de qualquer await, para os
    //    bloqueadores de popups a deixarem passar.
    window.open(DEMO_URL, '_blank', 'noopener,noreferrer');
    setSubmitting(true);

    // 3) Guarda o lead pelo mesmo canal do formulário principal. Falhar aqui nunca bloqueia o
    //    utilizador: a demo já está aberta.
    const campaign = readCampaignParams();
    try {
      const result = await submit({
        nome,
        telefone,
        origem,
        tipo_pedido: 'ver-demonstracao',
        _subject: `Lead rápido - Ver demonstração (${origem}) - Logística MOVAGO`,
        pagina: window.location.href.slice(0, 500),
        ...campaign,
      });
      if (result.kind === 'error') {
        console.error('[lead rápido] o Formspree recusou o envio:', result.getFormErrors());
      } else {
        trackEvent('Lead', { content_name: 'Ver demonstração', origem });
      }
    } catch (error) {
      console.error('[lead rápido] falha ao enviar o lead:', error);
    }

    setSubmitting(false);
    setDone(true);
  };

  return (
    <>
      <button
        ref={openerRef}
        type="button"
        onClick={() => setOpen(true)}
        data-demo-origin={origem}
        className={className}
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[130] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`demo-modal-title-${origem}`}
            className="relative max-h-[92dvh] w-full max-w-md overflow-y-auto rounded-t-3xl border border-slate-600 bg-[#111827] p-6 shadow-2xl sm:rounded-3xl sm:p-8 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <X size={22} aria-hidden="true" />
            </button>

            {done ? (
              <div role="status" className="pt-4 text-center">
                <h2 id={`demo-modal-title-${origem}`} className="mb-3 text-2xl font-bold text-white">
                  Demonstração aberta!
                </h2>
                <p className="mb-6 leading-relaxed text-slate-300">
                  Abrimos a demonstração noutro separador. Obrigado pelo seu contacto, a equipa MOVAGO
                  poderá falar consigo.
                </p>
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-lg font-semibold text-white hover:bg-[#1D4ED8]"
                >
                  Não abriu? Abrir a demonstração
                  <ExternalLink size={18} aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={close}
                  className="mt-3 min-h-[44px] w-full rounded-xl px-6 py-2 text-slate-300 hover:text-white"
                >
                  Fechar
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 pt-2">
                <h2 id={`demo-modal-title-${origem}`} className="pr-10 text-2xl font-bold text-white">
                  Ver a demonstração
                </h2>
                <p className="leading-relaxed text-slate-300">
                  Deixe o seu contacto e abrimos a demonstração.
                </p>

                <div>
                  <label htmlFor={`demo-nome-${origem}`} className={labelClass}>Nome *</label>
                  <input
                    ref={nameRef}
                    id={`demo-nome-${origem}`}
                    name="nome"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="O seu nome"
                    aria-invalid={nameError ? true : undefined}
                    className={inputClass}
                  />
                  {nameError && <p role="alert" className="mt-1 text-sm text-red-400">{nameError}</p>}
                </div>

                <div>
                  <label htmlFor={`demo-whatsapp-${origem}`} className={labelClass}>WhatsApp *</label>
                  <input
                    id={`demo-whatsapp-${origem}`}
                    name="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    placeholder="+258 8X XXX XXXX"
                    aria-invalid={phoneError ? true : undefined}
                    className={inputClass}
                  />
                  {phoneError && <p role="alert" className="mt-1 text-sm text-red-400">{phoneError}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} aria-hidden="true" />
                      A abrir...
                    </>
                  ) : (
                    'Abrir a demonstração'
                  )}
                </button>

                <p className="text-xs leading-relaxed text-slate-400">
                  A demonstração abre noutro separador. Usamos o seu contacto apenas para falar consigo sobre a
                  logística MOVAGO.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
