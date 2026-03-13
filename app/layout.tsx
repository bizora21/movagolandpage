import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema, MobileAppSchema, WebSiteSchema } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MOVAGO — App de Transporte Urbano Inteligente em Moçambique',
    template: '%s | MOVAGO',
  },
  description: 'Descubra a MOVAGO, a plataforma de transporte inteligente em Moçambique. Viagens rápidas, seguras e acessíveis em Maputo e todo o país. Baixe o app agora!',
  keywords: [
    'MOVAGO',
    'transporte urbano',
    'transporte inteligente',
    'app de transporte',
    'mobilidade urbana',
    'ride hailing',
    'transporte em Maputo',
    'transporte em Moçambique',
    'taxi app',
    'aplicação de transporte',
    'motorista particular',
    'viagens compartilhadas',
    'carona',
    'mobilidade sustentável',
    'tecnologia de transporte',
    'transporte seguro',
    'transporte rápido',
    'transporte acessível',
    'chauffeur',
    'motorista de app'
  ],
  authors: [{ name: 'MOVAGO', url: SITE_URL }],
  creator: 'MOVAGO',
  publisher: 'MOVAGO',
  category: 'Transporte e Mobilidade',
  classification: 'Technology & Transportation',
  openGraph: {
    type: 'website',
    locale: 'pt_MZ',
    alternateLocale: ['pt_PT', 'pt_BR'],
    url: SITE_URL,
    siteName: 'MOVAGO - Transporte Inteligente em Moçambique',
    title: 'MOVAGO — App de Transporte Urbano Inteligente',
    description: 'Plataforma de transporte inteligente em Moçambique. Viagens rápidas, seguras e acessíveis em Maputo. Baixe o app agora!',
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
    title: 'MOVAGO — Transporte Inteligente em Moçambique',
    description: 'Plataforma de transporte inteligente em Moçambique. Viagens rápidas, seguras e acessíveis. Baixe o app!',
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
  alternates: {
    canonical: SITE_URL,
    languages: {
      'pt-MZ': SITE_URL,
      'pt-PT': SITE_URL,
    },
  },
  verification: {
    google: 'search-console-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-MZ" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <OrganizationSchema />
        <MobileAppSchema />
        <WebSiteSchema />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
