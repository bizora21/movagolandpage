'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck } from 'lucide-react';
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  TRACKING_ENABLED,
  getConsent,
  setConsent,
} from '@/lib/analytics';

/**
 * Aviso de cookies. Aparece se houver medição configurada e o visitante ainda não tiver escolhido.
 * Em telemóvel é uma folha grande no fundo do ecrã, com o resto da página escurecido, para ser
 * impossível não reparar; em computador é um cartão central em baixo. "Recusar" e "Aceitar"
 * têm o mesmo tamanho (a recusa tem de ser tão fácil como a aceitação).
 */
export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!TRACKING_ENABLED) return;
    // o valor vem do localStorage, que só existe no navegador
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(getConsent() === null);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  // Leva o foco (leitores de ecrã e teclado) para o aviso quando abre
  useEffect(() => {
    if (open) dialogRef.current?.focus();
  }, [open]);

  if (!open) return null;

  const choose = (value: 'granted' | 'denied') => {
    setConsent(value);
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:p-6">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        aria-describedby="cookie-desc"
        tabIndex={-1}
        className="flex max-h-[88dvh] w-full max-w-3xl flex-col rounded-t-3xl border border-slate-500/60 border-b-0 bg-[#111827] p-5 shadow-2xl outline-none sm:rounded-3xl sm:border-b sm:p-8 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
      >
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <div className="mb-3 flex items-center gap-3 sm:mb-4">
            <span className="flex h-10 w-10 flex-shrink-0 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[rgb(var(--color-primary))]/20">
              <Cookie className="text-[rgb(var(--color-accent))]" size={22} aria-hidden="true" />
            </span>
            <h2 id="cookie-title" className="text-xl font-bold leading-tight text-white sm:text-2xl">
              A sua privacidade
            </h2>
          </div>

          <div id="cookie-desc" className="space-y-3 text-base leading-normal text-slate-200 sm:space-y-4 sm:text-lg sm:leading-relaxed">
            <p>
              Para melhorar este site e perceber se os nossos anúncios funcionam, usamos duas ferramentas de
              medição. Só as ativamos se você aceitar.{' '}
              <strong className="text-white">Se recusar, o site funciona na mesma.</strong>
            </p>
            <ul className="space-y-2 rounded-2xl border border-slate-700 bg-black/20 p-3 text-[15px] sm:space-y-3 sm:p-4 sm:text-base">
              <li>
                <strong className="text-white">Google Analytics:</strong> mostra-nos quantas pessoas visitam o
                site e que páginas veem.
              </li>
              <li>
                <strong className="text-white">Meta (Facebook e Instagram):</strong> diz-nos se um anúncio levou
                alguém a pedir uma demonstração.
              </li>
            </ul>
            <p className="text-[15px] text-slate-300 sm:text-base">
              Podem guardar cookies e receber dados como o tipo de dispositivo e as páginas visitadas.
              Se recusar, nada é enviado. Pode mudar a escolha em “Preferências de cookies”, no fundo do site.{' '}
              <Link href="/privacidade/#cookies" className="font-semibold text-[rgb(var(--color-accent))] underline">
                Ler a política de privacidade
              </Link>
            </p>
          </div>

        </div>

        <div className="mt-4 flex flex-shrink-0 flex-col-reverse gap-2.5 sm:mt-6 sm:flex-row sm:gap-3">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="min-h-[52px] sm:min-h-[56px] flex-1 rounded-xl border-2 border-slate-400 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-white/10"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="min-h-[52px] sm:min-h-[56px] flex-1 rounded-xl bg-[#2563EB] px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
          >
            Aceitar
          </button>
        </div>

        <p className="mt-3 flex flex-shrink-0 items-center justify-center gap-2 text-center text-sm text-slate-400 sm:mt-4">
          <ShieldCheck size={16} className="flex-shrink-0 text-green-400" aria-hidden="true" />
          Não vendemos os seus dados pessoais.
        </p>
      </div>
    </div>
  );
}

/** Botão discreto (ex.: no rodapé) para voltar a abrir as preferências. */
export function CookieSettingsButton({ className }: { className?: string }) {
  if (!TRACKING_ENABLED) return null;
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
    >
      Preferências de cookies
    </button>
  );
}
