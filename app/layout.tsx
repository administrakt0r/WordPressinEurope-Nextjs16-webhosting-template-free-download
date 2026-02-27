import type { Metadata } from "next";
import { headers } from "next/headers";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/components/Providers";
import { JsonLd } from "@/components/JsonLd";
import { SkipLink } from "@/components/ui/SkipLink";
import { ORGANIZATION_JSON_LD } from "@/lib/json-ld";
import { inter, outfit } from "@/lib/fonts";
import "./globals.css";

// Optimization: Load Footer dynamically as it's below the fold
const Footer = dynamic(() => import("@/components/layout/Footer").then(mod => mod.Footer), {
  ssr: true // Keep SSR for SEO links in footer, but allows code splitting
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wpineu.com'),
  referrer: 'strict-origin-when-cross-origin',
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Opt-in to dynamic rendering to ensure nonce generation
  await headers();

  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="preconnect" href="https://clients.wpineu.com" />
      <link rel="dns-prefetch" href="https://uptime.wpineu.com" />
      <link rel="dns-prefetch" href="https://wp.wpineu.com" />
      <link rel="dns-prefetch" href="https://clients.wpineu.com" />
      <body
        className={`${inter.variable} ${outfit.variable} antialiased transition-colors duration-300`}
      >
        <SkipLink />
        <JsonLd data={ORGANIZATION_JSON_LD} />
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main id="main-content" className="flex-grow" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
