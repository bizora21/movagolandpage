'use client';

import { useEffect } from 'react';
import { PENDING_LEAD_KEY, trackEvent } from '@/lib/analytics';

/**
 * Dispara o evento Lead uma única vez por formulário enviado.
 * O DemoForm marca o envio em sessionStorage antes de redirecionar para cá; abrir ou
 * recarregar /logistica/obrigado/ diretamente não conta como lead.
 */
export function LeadEvent() {
  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(PENDING_LEAD_KEY) !== '1') return;
      window.sessionStorage.removeItem(PENDING_LEAD_KEY);
    } catch {
      return;
    }
    trackEvent('Lead', { content_name: 'Demonstração Logística' });
  }, []);

  return null;
}
