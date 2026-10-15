import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChromeGate } from "@/components/layout/ChromeGate";
import { Analytics } from "@/components/analytics/Analytics";
import { CookieBanner } from "@/components/analytics/CookieBanner";
import { OrganizationSchema, MobileAppSchema, WebSiteSchema } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MOVAGO — Transporte Urbano e Logística de Encomendas em Moçambique',
    template: '%s | MOVAGO',
  },
  description: 'App de transporte urbano em Maputo, Matola e Beira (chapas, táxi, moto-táxi) e sistema SaaS de logística e rastreio de encomendas em Moçambique.',
  authors: [{ name: 'MOVAGO', url: SITE_URL }],
  creator: 'MOVAGO',
  publisher: 'MOVAGO',
  category: 'Transporte, Mobilidade e Logística',
  classification: 'Technology, Transportation & Logistics',
  openGraph: {
    type: 'website',
    locale: 'pt_MZ',
    alternateLocale: ['pt_PT', 'pt_BR'],
    url: SITE_URL,
    siteName: 'MOVAGO - Transporte e Logística em Moçambique',
    title: 'MOVAGO — Transporte Urbano e Logística de Encomendas',
    description: 'App de transporte urbano e sistema SaaS de rastreio de encomendas para transportadoras e empresas de logística em Moçambique.',
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'MOVAGO — App de Transporte Inteligente em Moçambique',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@movago',
    creator: '@movago',
    title: 'MOVAGO — Transporte e Logística em Moçambique',
    description: 'App de transporte urbano e sistema SaaS de rastreio de encomendas para transportadoras em Moçambique.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      { rel: 'mask-icon', url: '/favicon.svg', color: '#F97316' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // TODO (SEO): colar aqui o código REAL do Google Search Console, no formato:
  //   verification: { google: 'CODIGO_DO_SEARCH_CONSOLE' },
  // (Search Console > Definições > Verificação de propriedade > Etiqueta HTML).
  // Se a propriedade já estiver verificada por DNS, não é necessário.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-MZ" suppressHydrationWarning>
      {/* Fontes: o site usa a pilha de fontes do sistema (font-sans). Inter/Sora eram pedidas ao Google Fonts mas nunca aplicadas por CSS, e o pedido bloqueava a renderização. */}
      <body className="font-sans antialiased">
        <OrganizationSchema />
        <MobileAppSchema />
        <WebSiteSchema />
        <ChromeGate>
          <Navbar />
        </ChromeGate>
        <main className="min-h-screen">
          {children}
        </main>
        <ChromeGate>
          <Footer />
        </ChromeGate>
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  );
}
