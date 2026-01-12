import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import "./accessibility.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wpineu.com'),
  title: {
    default: "WPinEU - Free WordPress Hosting in Europe",
    template: "%s | WPinEU"
  },
  description: "Premium free WordPress hosting with cPanel, LiteSpeed, and Redis. No ads, no hidden fees. Perfect for students, developers, and small businesses in the EU.",
  keywords: ["free wordpress hosting", "cpanel hosting free", "litespeed hosting", "redis cache", "eu hosting", "wordpress europe"],
  authors: [{ name: "WPinEU Team" }],
  creator: "WPinEU",
  publisher: "WPinEU",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wpineu.com",
    title: "WPinEU - Free WordPress Hosting in Europe",
    description: "Premium free WordPress hosting with cPanel, LiteSpeed, and Redis. No ads, no hidden fees.",
    siteName: "WPinEU",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WPinEU - Free WordPress Hosting in Europe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WPinEU - Free WordPress Hosting in Europe",
    description: "Premium free WordPress hosting with cPanel, LiteSpeed, and Redis. No ads, no hidden fees.",
    creator: "@wpineu",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://wpineu.com",
  },
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WPinEU",
  "url": "https://wpineu.com",
  "logo": "https://wpineu.com/wpineulogo.png",
  "description": "Free WordPress hosting provider in Europe with cPanel and LiteSpeed.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Zagreb",
    "addressCountry": "HR"
  },
  "foundingDate": "2025-07-10",
  "founder": {
    "@type": "Person",
    "name": "WPinEU Team"
  }
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { safeJsonLd } from "@/lib/security";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-slate-950 text-slate-50 transition-colors duration-300`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950 transition-transform"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
