import { FAQS } from "@/lib/data";

/**
 * JSON-LD data for the main website entity.
 * Helps search engines understand the site structure and search capability.
 */
export const WEBSITE_JSON_LD = {
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

/**
 * JSON-LD data for the hosting service.
 * Describes the free hosting offer.
 */
export const SERVICE_JSON_LD = {
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

/**
 * JSON-LD data for the organization.
 * Provides details about WPinEU as an entity.
 */
export const ORGANIZATION_JSON_LD = {
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

/**
 * JSON-LD data for the FAQ page.
 * Provides structured data for the Frequently Asked Questions.
 */
export const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
