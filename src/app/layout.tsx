// Uygulamanin kok layout'u: global fontlar, tema ve metadata burada tanimlanir.
import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Manrope } from "next/font/google";

import { seoConfig } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

import "./globals.css";

// Projede kullanilan fontlar CSS degiskenlerine baglanir.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
});

// Sayfa paylasim/SEO bilgileri burada tek noktadan yonetilir.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...seoConfig.keywords],
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
      "en-US": "/?lang=en",
    },
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "İlkan Kaymak Hair Artist için İzmir erkek berberi tanıtım görseli.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/og-cover.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Butun sayfalar bu HTML govdesi icinde render edilir.
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${libreBaskerville.variable} ${manrope.variable} bg-background antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
