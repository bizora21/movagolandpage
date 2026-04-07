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

// Schema para serviços de transporte
export function TransportServiceSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "MOVAGO - Serviço de Transporte Urbano",
          "description": "Transporte urbano inteligente e seguro em Maputo, Matola, Beira e toda Moçambique. Chapas, táxis e moto-táxis em um só app.",
          "provider": {
            "@type": "Organization",
            "name": "MOVAGO",
            "url": SITE_URL
          },
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
                },
                "priceCurrency": "MZN",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Táxi Particular",
                  "description": "Corridas exclusivas de táxi com motoristas verificados"
                },
                "priceCurrency": "MZN"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Moto-táxi",
                  "description": "Transporte rápido em moto para destinos curtos"
                },
                "priceCurrency": "MZN"
              }
            ]
          }
        })
      }}
    />
  );
}

// Schema para recrutamento de motoristas
export function JobPostingSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "title": "Motorista Parceiro MOVAGO - Ganhe Dinheiro com seu Veículo",
          "description": "Torne-se motorista parceiro MOVAGO e ganhe dinheiro oferecendo corridas de transporte em Moçambique. Receba pagamentos via M-Pesa. Flexibilidade de horários e renda extra garantida.",
          "identifier": {
            "@type": "PropertyValue",
            "name": "MOVAGO",
            "value": "MOTORISTA-PARCEIRO"
          },
          "datePosted": new Date().toISOString().split('T')[0],
          "validThrough": "2025-12-31",
          "hiringOrganization": {
            "@type": "Organization",
            "name": "MOVAGO",
            "sameAs": SITE_URL,
            "logo": `${SITE_URL}/favicon.ico`
          },
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Maputo",
              "addressRegion": "Maputo",
              "addressCountry": "MZ"
            }
          },
          "employmentType": "CONTRACTOR",
          "jobLocationType": "TELECOMMUTE",
          "applicantLocationRequirements": {
            "@type": "Country",
            "name": "Moçambique"
          },
          "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "MZN",
            "value": {
              "@type": "QuantitativeValue",
              "minValue": 15000,
              "maxValue": 80000,
              "unitText": "MONTH"
            }
          },
          "skills": ["Carta de condução", "Veículo próprio", "Smartphone", "Disponibilidade"],
          "responsibilities": [
            "Oferecer corridas de transporte seguras",
            "Manter veículo em boas condições",
            "Providenciar excelente atendimento ao cliente",
            "Seguir rotas otimizadas do app"
          ],
          "benefits": [
            "Horários flexíveis",
            "Pagamentos via M-Pesa",
            "Renda extra garantida",
            "Suporte 24/7",
            "Sem taxas de adesão"
          ]
        })
      }}
    />
  );
}

// Schema para aplicativo de táxi
export function TaxiServiceSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TaxiService",
          "name": "MOVAGO - App de Táxi em Moçambique",
          "description": "App de táxi moderno para chamar corridas em Maputo, Matola e Beira. Substituto moderno para chapas com mais segurança e conforto.",
          "provider": {
            "@type": "Organization",
            "name": "MOVAGO",
            "url": SITE_URL
          },
          "areaServed": ["Maputo", "Matola", "Beira"],
          "telephone": CONTACT_INFO.phone,
          "email": CONTACT_INFO.email,
          "priceRange": "$$",
          "paymentAccepted": ["M-Pesa", "Dinheiro", "Cartão"],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "500"
          }
        })
      }}
    />
  );
}

// Schema para passageiros
export function PassengerTransportSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "MOVAGO - App para Passageiros em Moçambique",
          "description": "App completo para passageiros que buscam transporte seguro, rápido e acessível em Maputo e Moçambique. Encontre chapas, táxis e moto-táxis em um só lugar.",
          "provider": {
            "@type": "Organization",
            "name": "MOVAGO",
            "url": SITE_URL
          },
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
            "Pagamento seguro via M-Pesa",
            "Avaliação de motoristas",
            "Botão SOS de emergência",
            "Rotas compartilhadas (chapas)",
            "Corridas exclusivas (táxi)"
          ],
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "MZN",
            "description": "Download gratuito do app. Pague apenas pelas viagens realizadas."
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "500",
            "bestRating": "5"
          }
        })
      }}
    />
  );
}
