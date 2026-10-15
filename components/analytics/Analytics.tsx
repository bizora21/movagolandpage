'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import {
  CONSENT_EVENT,
  GA4_ENABLED,
  GA4_ID,
  META_PIXEL_ENABLED,
  META_PIXEL_ID,
  getConsent,
  readCampaignParams,
  trackEvent,
  type Consent,
} from '@/lib/analytics';

/**
 * Carrega Meta Pixel e GA4 (só com consentimento e com IDs reais configurados) e
 * regista os cliques de conversão por delegação de eventos:
 *   - qualquer link para "#pedir-demonstracao*"  -> DemoClick
 *   - links wa.me com data-track="whatsapp"      -> Contact
 */
export function Analytics() {
  const [consent, setConsentState] = useState<Consent | null>(null);

  useEffect(() => {
    // o valor vem do localStorage, que só existe no navegador
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsentState(getConsent());
    readCampaignParams(); // guarda os UTMs logo à chegada

    const onConsent = (event: Event) => setConsentState((event as CustomEvent<Consent>).detail);
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a, button');
      if (!link) return;

      const href = link.getAttribute('href') ?? '';
      const tracked = link.getAttribute('data-track');

      if (tracked === 'whatsapp') {
        trackEvent('Contact', { method: 'whatsapp', link_location: link.getAttribute('data-location') ?? undefined });
      } else if (tracked === 'demo' || href.includes('#pedir-demonstracao')) {
        trackEvent('DemoClick', { link_location: link.getAttribute('data-location') ?? undefined });
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  if (consent !== 'granted') return null;

  return (
    <>
      {GA4_ENABLED && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA4_ID}');`}
          </Script>
        </>
      )}
      {META_PIXEL_ENABLED && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}
