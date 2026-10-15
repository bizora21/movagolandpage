// ---------------------------------------------------------------------------
// TRACKING — Meta Pixel + Google Analytics 4
//
// TODO (preencher): troque os dois placeholders abaixo pelos IDs reais, OU defina
// as variáveis de ambiente no Cloudflare Pages (Settings > Environment variables):
//   NEXT_PUBLIC_META_PIXEL_ID   (só números, ex.: 123456789012345)
//   NEXT_PUBLIC_GA4_ID          (formato G-XXXXXXXXXX)
// Enquanto estiverem com o placeholder, NENHUM script de medição é carregado.
// ---------------------------------------------------------------------------

export const META_PIXEL_PLACEHOLDER = 'META_PIXEL_ID';
export const GA4_PLACEHOLDER = 'GA4_ID';

// O ID do Pixel é público (aparece no código de qualquer site). A variável de ambiente, se existir, tem prioridade.
export const META_PIXEL_ID: string =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || '1445971060337303';
export const GA4_ID: string = process.env.NEXT_PUBLIC_GA4_ID || 'G-6DCNYVGVG1';

export const META_PIXEL_ENABLED = /^\d{8,20}$/.test(META_PIXEL_ID);
export const GA4_ENABLED = /^G-[A-Z0-9]{6,}$/.test(GA4_ID);
export const TRACKING_ENABLED = META_PIXEL_ENABLED || GA4_ENABLED;

// ---------------------------------------------------------------------------
// Consentimento de cookies
// ---------------------------------------------------------------------------

export const CONSENT_KEY = 'movago-cookie-consent';
export const CONSENT_EVENT = 'movago:consent';
export const OPEN_COOKIE_SETTINGS_EVENT = 'movago:open-cookie-settings';

export type Consent = 'granted' | 'denied';

export function getConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent): void {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // sem localStorage: a escolha vale só para esta visita
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

// ---------------------------------------------------------------------------
// Eventos de conversão
//   Lead      -> envio do formulário com sucesso (disparado em /logistica/obrigado/)
//   Contact   -> clique no botão de WhatsApp
//   DemoClick -> clique em "Pedir demonstração"
// ---------------------------------------------------------------------------

export type ConversionEvent = 'Lead' | 'Contact' | 'DemoClick';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function send(name: ConversionEvent, params: Record<string, unknown>): boolean {
  let sent = false;
  if (GA4_ENABLED && typeof window.gtag === 'function') {
    const ga4Name = { Lead: 'generate_lead', Contact: 'contact', DemoClick: 'demo_click' }[name];
    window.gtag('event', ga4Name, params);
    sent = true;
  }
  if (META_PIXEL_ENABLED && typeof window.fbq === 'function') {
    if (name === 'DemoClick') window.fbq('trackCustom', 'DemoClick', params);
    else window.fbq('track', name, params);
    sent = true;
  }
  return sent || !TRACKING_ENABLED;
}

/**
 * Envia um evento de conversão. Só envia com consentimento; se os scripts ainda
 * estiverem a carregar, volta a tentar durante alguns segundos.
 */
export function trackEvent(name: ConversionEvent, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined' || !TRACKING_ENABLED) return;
  if (getConsent() !== 'granted') return;

  const payload = { page_path: window.location.pathname, ...params };
  let attempts = 0;
  const attempt = () => {
    if (send(name, payload) || attempts >= 20) return;
    attempts += 1;
    window.setTimeout(attempt, 500);
  };
  attempt();
}

// ---------------------------------------------------------------------------
// Parâmetros de campanha (UTM) — guardados na sessão para sobreviverem à navegação
// ---------------------------------------------------------------------------

export const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid',
] as const;

const UTM_STORAGE_KEY = 'movago-utm';

export function readCampaignParams(): Record<string, string> {
  const result: Record<string, string> = {};
  try {
    const stored = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) Object.assign(result, JSON.parse(stored));
  } catch {
    // ignorar
  }

  const query = new URLSearchParams(window.location.search);
  let fresh = false;
  for (const key of UTM_PARAMS) {
    const value = query.get(key);
    if (value) {
      result[key] = value.slice(0, 200);
      fresh = true;
    }
  }
  if (fresh) {
    try {
      window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(result));
    } catch {
      // ignorar
    }
  }
  return result;
}

// Marca que um formulário acabou de ser enviado com sucesso (para o Lead ser
// contado uma só vez, na página de agradecimento).
export const PENDING_LEAD_KEY = 'movago-pending-lead';
