import { SITE_URL, CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

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
          "logo": `${SITE_URL}/favicon.ico`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": CONTACT_INFO.phone.replace(/\s/g, ''),
            "contactType": "customer service",
            "email": CONTACT_INFO.email,
            "areaServed": "MZ",
            "availableLanguage": ["Portuguese", "English"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": CONTACT_INFO.location,
            "addressCountry": "MZ"
          },
          "sameAs": SOCIAL_LINKS.map(link => link.href),
          "description": "Plataforma de mobilidade urbana inteligente em Moçambique. Transporte seguro, rápido e acessível.",
          "areaServed": {
            "@type": "Country",
            "name": "Mozambique"
          },
          "foundingDate": "2024"
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
          "name": "MOVAGO - Transporte Urbano",
          "operatingSystem": "ANDROID, IOS",
          "applicationCategory": "TravelApplication",
          "installUrl": "https://play.google.com/store/apps/details?id=com.movago",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "MZN"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "500",
            "bestRating": "5",
            "worstRating": "1"
          },
          "description": "Plataforma de mobilidade urbana inteligente. Viagens rápidas, seguras e acessíveis.",
          "featureList": [
            "Rastreamento em tempo real",
            "Escolha de rotas",
            "Previsões de chegada",
            "Pagamento seguro",
            "Avaliação de motoristas"
          ],
          "inLanguage": "pt",
          "browserRequirements": "Requires Android 5.0 or later"
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
          "alternateName": "MOVAGO Moçambique",
          "url": SITE_URL,
          "description": "Plataforma de mobilidade urbana inteligente em Moçambique. Transporte seguro, rápido e acessível.",
          "inLanguage": "pt-MZ",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${SITE_URL}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "MOVAGO",
            "url": SITE_URL
          }
        })
      }}
    />
  );
}
