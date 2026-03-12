import { SITE_URL, CONTACT_INFO } from '@/lib/constants';

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MOVAGO",
          "url": SITE_URL,
          "logo": `${SITE_URL}/icon-512.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": CONTACT_INFO.phone.replace(/\s/g, ''),
            "contactType": "customer service",
            "email": CONTACT_INFO.email,
            "areaServed": "MZ",
            "availableLanguage": "Portuguese"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": CONTACT_INFO.location,
            "addressCountry": "MZ"
          },
          "sameAs": [],
          "description": "Plataforma de mobilidade urbana inteligente"
        })
      }}
    />
  );
}

export function MobileAppSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          "name": "MOVAGO",
          "operatingSystem": "Android",
          "applicationCategory": "TransportationApplication",
          "installUrl": "https://play.google.com/store/apps/details?id=mz.movagomz.app",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "500"
          },
          "description": "Plataforma de mobilidade urbana inteligente. Viagens rápidas, seguras e acessíveis."
        })
      }}
    />
  );
}

export function WebSiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "MOVAGO",
          "url": SITE_URL,
          "description": "Plataforma de mobilidade urbana inteligente",
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${SITE_URL}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })
      }}
    />
  );
}