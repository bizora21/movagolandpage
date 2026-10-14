'use client';

import { useEffect, useState } from 'react';

/**
 * Barra fixa (só em ecrãs pequenos) com o CTA principal.
 * Aparece quando nenhum formulário está visível e leva ao formulário final.
 */
export function StickyCta({
  targetId = 'pedir-demonstracao-final',
  watchIds = ['pedir-demonstracao', 'pedir-demonstracao-final'],
  label = 'Pedir demonstração',
}: {
  targetId?: string;
  watchIds?: string[];
  label?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const inView = new Set<string>();
    let scrolled = window.scrollY > 300;

    const update = () => setVisible(scrolled && inView.size === 0);

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) inView.add(entry.target.id);
        else inView.delete(entry.target.id);
      }
      update();
    });

    for (const id of watchIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    const onScroll = () => {
      scrolled = window.scrollY > 300;
      update();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-[90] border-t border-slate-700/60 bg-[#0A0F1E]/95 backdrop-blur px-4 py-3 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <a
        href={`#${targetId}`}
        tabIndex={visible ? 0 : -1}
        className="flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#2563EB] px-6 py-3 text-base font-semibold text-white hover:bg-[#1D4ED8] transition-colors"
      >
        {label}
      </a>
    </div>
  );
}
