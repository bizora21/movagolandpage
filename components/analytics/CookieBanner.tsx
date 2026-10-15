'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  TRACKING_ENABLED,
  getConsent,
  setConsent,
} from '@/lib/analytics';

/** Banner de consentimento. Só aparece se houver tracking configurado e ainda não houver escolha. */
export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!TRACKING_ENABLED) return;
    // o valor vem do localStorage, que só existe no navegador
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(getConsent() === null);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  if (!open) return null;

  const choose = (value: 'granted' | 'denied') => {
    setConsent(value);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed inset-x-0 bottom-0 z-[120] border-t border-slate-700 bg-[#111827] p-4 shadow-2xl"
    >
      <div className="container mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-slate-300">
          Usamos cookies de medição (Google Analytics e Meta) para perceber como o site é usado e avaliar os
          nossos anúncios. Pode aceitar ou recusar.{' '}
          <Link href="/privacidade/#cookies" className="underline hover:text-white">
            Saber mais
          </Link>
        </p>
        <div className="flex gap-3 sm:flex-shrink-0">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="min-h-[44px] flex-1 rounded-xl border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-200 hover:bg-white/5 sm:flex-none"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="min-h-[44px] flex-1 rounded-xl bg-[#2563EB] px-5 py-2 text-sm font-semibold text-white hover:bg-[#1D4ED8] sm:flex-none"
          >
            Aceitar
          </button>
        </div>
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
