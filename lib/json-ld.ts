/**
 * JSON-LD (JavaScript Object Notation for Linked Data) structures for SEO.
 * These objects are used to provide structured data to search engines.
 *
 * @see https://schema.org/
 */

/**
 * Structured data for the Website itself.
 * Defines the site name, URL, and potential search action.
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
 * Structured data for the specific Hosting Service offered.
 * Includes provider info, area served, and price details.
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
 * Structured data for the Organization behind the website.
 * Includes logo, address, and founding info.
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
