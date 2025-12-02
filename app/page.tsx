import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Metadata } from "next";

// Dynamic imports for below-the-fold components
const Pricing = dynamic(() => import("@/components/sections/Pricing").then(mod => ({ default: mod.Pricing })), {
  loading: () => <div className="min-h-screen" />
});

const About = dynamic(() => import("@/components/sections/About").then(mod => ({ default: mod.About })), {
  loading: () => <div className="min-h-screen" />
});

const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => ({ default: mod.FAQ })), {
  loading: () => <div className="min-h-screen" />
});

const Support = dynamic(() => import("@/components/sections/Support").then(mod => ({ default: mod.Support })), {
  loading: () => <div className="min-h-screen" />
});

export const metadata: Metadata = {
  title: "Free WordPress Hosting with cPanel & LiteSpeed | WPinEU",
  description: "Get 100% free WordPress hosting in Europe. Includes cPanel, LiteSpeed, Redis, and NVMe SSD. No ads, no credit card required. Start your website today.",
  alternates: {
    canonical: "https://wpineu.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "WPinEU",
  "url": "https://wpineu.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://wpineu.com/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Free WordPress Hosting",
  "provider": {
    "@type": "Organization",
    "name": "WPinEU"
  },
  "areaServed": "Europe",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Hosting Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Free WordPress Hosting Plan"
        },
        "price": "0.00",
        "priceCurrency": "EUR"
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero />
      <Features />
      <Pricing />
      <About />
      <FAQ />
      <Support />
    </>
  );
}
