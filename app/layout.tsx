import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "MOVAGO — Sistema Inteligente de Mobilidade",
  description: "Sistema inteligente de mobilidade urbana. Encontre rotas de transporte público em tempo real.",
  keywords: ["transporte público", "mobilidade urbana", "MOVAGO app", "rotas de transporte"],
  authors: [{ name: "MOVAGO" }],
  openGraph: {
    title: "MOVAGO — Sistema Inteligente de Mobilidade",
    description: "Sistema inteligente de mobilidade urbana. Baixe a app agora!",
    url: "https://movago.co.mz",
    siteName: "MOVAGO",
    locale: "pt_MZ",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "MOVAGO App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOVAGO — Sistema Inteligente de Mobilidade",
    description: "Sistema inteligente de mobilidade urbana.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
