'use client';

import { useEffect } from 'react';
import { CONSENT_EVENT, PENDING_LEAD_KEY, getConsent, trackEvent, type Consent } from '@/lib/analytics';

const leadParams = (leadId: string) => ({
  content_name: 'Demonstração Logística',
  // liga este evento ao pedido recebido no Formspree (campo lead_id)
  ...(leadId && leadId !== '1' ? { lead_id: leadId, event_id: leadId } : {}),
});

/**
 * Dispara o evento Lead uma única vez por formulário enviado.
 * O DemoForm marca o envio em sessionStorage antes de redirecionar para cá; abrir ou
 * recarregar /logistica/obrigado/ diretamente não conta como lead.
 *
 * Se o visitante ainda não tiver respondido ao aviso de cookies, o Lead fica à espera: se aceitar
 * já nesta página, é enviado nesse momento (se recusar, nada é enviado).
 */
export function LeadEvent() {
  useEffect(() => {
    let leadId = '';
    try {
      leadId = window.sessionStorage.getItem(PENDING_LEAD_KEY) ?? '';
      if (!leadId) return;
      window.sessionStorage.removeItem(PENDING_LEAD_KEY);
    } catch {
      return;
    }

    const consent = getConsent();
    if (consent === 'granted') {
      trackEvent('Lead', leadParams(leadId));
      return;
    }
    if (consent === 'denied') return;

    // Ainda sem escolha: espera pela resposta ao aviso
    const onConsent = (event: Event) => {
      if ((event as CustomEvent<Consent>).detail === 'granted') trackEvent('Lead', leadParams(leadId));
      window.removeEventListener(CONSENT_EVENT, onConsent);
    };
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  return null;
}
