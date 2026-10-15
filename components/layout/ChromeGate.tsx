'use client';

import { usePathname } from 'next/navigation';

/**
 * Esconde o menu e o rodapé nas páginas de destino para anúncios (/lp/...),
 * que têm um único objetivo e nenhuma navegação.
 */
export function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '';
  if (pathname === '/lp' || pathname.startsWith('/lp/')) return null;
  return <>{children}</>;
}
