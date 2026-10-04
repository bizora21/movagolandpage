import { SITE_URL, CONTACT_INFO, SOCIAL_LINKS, APP_STORES, RASTREIO_URL } from '@/lib/constants';
import { LOGISTICS_FEATURES, type FaqEntry } from '@/lib/logistica';

const ORG_ID = `${SITE_URL}/#organization`;

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const providerRef = { "@id": ORG_ID };

// O site usa trailingSlash: true, por isso as URLs canónicas terminam em "/"
const absUrl = (path: string) => `${SITE_URL}${path.endsWith("/") ? path : path + "/"}`;

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": ORG_ID,
        "name": "MOVAGO",
        "url": SITE_URL,
        "logo": `${SITE_URL}/android-chrome-512x512.png`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": CONTACT_INFO.phone.replace(/\s/g, ''),
          "contactType": "customer service",
          "email": CONTACT_INFO.email,
          "areaServed": "MZ",
          "availableLanguage": ["Portuguese"]
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": CONTACT_INFO.location,
          "addressCountry": "MZ"
        },
        "sameAs": SOCIAL_LINKS.map(link => link.href),
        "description": "Plataforma moçambicana de mobilidade urbana e logística de encomendas: app de transporte (chapas, táxi, moto-táxi) e sistema SaaS de rastreio de encomendas para transportadoras e empresas de logística.",
        "areaServed": {
          "@type": "Country",
          "name": "Mozambique"
        },
        "knowsAbout": [
          "Transporte urbano",
          "Mobilidade urbana",
          "Logística de encomendas",
          "Rastreio de encomendas",
          "Software para transportadoras",
          "Transporte rodoviário, ferroviário, marítimo e aéreo de carga",
          "Entregas e e-commerce"
        ]
      }}
    />
  );
}

export function MobileAppSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "MobileApplication",
        "name": "MOVAGO - Transporte Urbano",
        "operatingSystem": "ANDROID",
        "applicationCategory": "TravelApplication",
        "installUrl": APP_STORES.googlePlay,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "MZN"
        },
        "description": "Aplicação de mobilidade urbana: encontre rotas, acompanhe o transporte em tempo real e viaje com mais segurança em Moçambique.",
        "featureList": [
          "Rastreamento em tempo real",
          "Escolha de rotas",
          "Previsões de chegada",
          "Pagamento via M-Pesa",
          "Botão SOS de emergência"
        ],
        "inLanguage": "pt",
        "provider": providerRef
      }}
    />
  );
}

export function WebSiteSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "name": "MOVAGO",
        "alternateName": "MOVAGO Moçambique",
        "url": SITE_URL,
        "description": "Transporte urbano e logística de encomendas em Moçambique.",
        "inLanguage": "pt-MZ",
        "publisher": providerRef
      }}
    />
  );
}

// Schema para serviços de transporte
export function TransportServiceSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "MOVAGO - Serviço de Transporte Urbano",
        "description": "Transporte urbano inteligente em Maputo, Matola, Beira e Moçambique. Chapas, táxis e moto-táxis num só app.",
        "provider": providerRef,
        "serviceType": "Transporte de Passageiros",
        "areaServed": ["Maputo", "Matola", "Beira", "Moçambique"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Serviços de Transporte",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Transporte em Chapas",
                "description": "Viagens compartilhadas em chapas com rotas otimizadas"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Táxi Particular",
                "description": "Corridas exclusivas de táxi"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Moto-táxi",
                "description": "Transporte rápido em moto para destinos curtos"
              }
            }
          ]
        }
      }}
    />
  );
}

// Schema para o programa de motoristas parceiros
export function DriverPartnerSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Programa de Motoristas Parceiros MOVAGO",
        "description": "Motoristas com veículo próprio podem juntar-se à MOVAGO, escolher os seus horários e receber via M-Pesa. Cadastro sem taxas de adesão.",
        "provider": providerRef,
        "serviceType": "Cadastro de motoristas parceiros",
        "audience": {
          "@type": "Audience",
          "audienceType": "Motoristas"
        },
        "areaServed": ["Maputo", "Matola", "Beira", "Moçambique"]
      }}
    />
  );
}

// Schema para aplicativo de táxi
export function TaxiServiceSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": "MOVAGO - App de Táxi em Moçambique",
        "description": "App de táxi para chamar corridas em Maputo, Matola e Beira, com mais segurança e conforto.",
        "provider": providerRef,
        "areaServed": ["Maputo", "Matola", "Beira"],
        "telephone": CONTACT_INFO.phone,
        "email": CONTACT_INFO.email,
        "paymentAccepted": "M-Pesa"
      }}
    />
  );
}

// Schema para passageiros
export function PassengerTransportSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "MOVAGO - App para Passageiros em Moçambique",
        "description": "App para passageiros que procuram transporte seguro e acessível em Maputo e Moçambique. Encontre chapas, táxis e moto-táxis num só lugar.",
        "provider": providerRef,
        "serviceType": "Transporte de Passageiros",
        "audience": {
          "@type": "Audience",
          "audienceType": "Passageiros"
        },
        "areaServed": ["Maputo", "Matola", "Beira", "Moçambique"],
        "featureList": [
          "Rastreamento em tempo real",
          "Previsões de chegada",
          "Escolha de rotas",
          "Pagamento via M-Pesa",
          "Botão SOS de emergência"
        ],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "MZN",
          "description": "Download gratuito do app."
        }
      }}
    />
  );
}

// ---------------------------------------------------------------------------
// Logística de encomendas (SaaS)
// ---------------------------------------------------------------------------

export function LogisticsServiceSchema({ path = '/logistica', name, description }: { path?: string; name?: string; description?: string }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name ?? "MOVAGO Logística - Rastreio de Encomendas",
        "description": description ?? "Sistema online para empresas de logística e transportadoras acompanharem encomendas da receção à entrega, com código de rastreio, percurso, responsável por troço e prova de entrega.",
        "url": absUrl(path),
        "provider": providerRef,
        "serviceType": "Logística e rastreio de encomendas",
        "areaServed": { "@type": "Country", "name": "Mozambique" },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "Empresas de logística, transportadoras, courier, lojas online e operadores de carga rodoviária, ferroviária, marítima e aérea"
        }
      }}
    />
  );
}

export function LogisticsSoftwareSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "MOVAGO Rastreio",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Logística e rastreio de encomendas",
        "operatingSystem": "Web, Android",
        "url": absUrl("/logistica"),
        "sameAs": RASTREIO_URL,
        "description": "Software como serviço (SaaS) para acompanhar encomendas desde a receção numa estação até à entrega ao destinatário.",
        "featureList": LOGISTICS_FEATURES.map(f => f.title),
        "provider": providerRef,
        "inLanguage": "pt"
      }}
    />
  );
}

export function FaqSchema({ items }: { items: readonly FaqEntry[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: readonly { name: string; path: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": absUrl(item.path)
        }))
      }}
    />
  );
}
