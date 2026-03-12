import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema, MobileAppSchema, WebSiteSchema } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MOVAGO — Transporte Urbano Inteligente',
    template: '%s | MOVAGO',
  },
  description: 'Plataforma de mobilidade urbana inteligente. Viagens rápidas, seguras e acessíveis.',
  keywords: ['transporte urbano', 'mobilidade', 'MOVAGO', 'ride hailing', 'app transporte'],
  authors: [{ name: 'MOVAGO', url: SITE_URL }],
  creator: 'MOVAGO',
  publisher: 'MOVAGO',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: SITE_URL,
    siteName: 'MOVAGO',
    title: 'MOVAGO — Transporte Urbano Inteligente',
    description: 'Plataforma de mobilidade urbana inteligente.',
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'MOVAGO — Transporte Urbano Inteligente',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MOVAGO — Transporte Urbano Inteligente',
    description: 'Plataforma de mobilidade urbana inteligente.',
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
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
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
