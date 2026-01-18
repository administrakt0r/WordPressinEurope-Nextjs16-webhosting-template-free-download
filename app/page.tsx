import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { WEBSITE_JSON_LD, SERVICE_JSON_LD } from "@/lib/json-ld";

// Dynamic imports for below-the-fold components
const Pricing = dynamic(() => import("@/components/sections/Pricing").then(mod => ({ default: mod.Pricing })), {
  loading: () => <section className="py-20 bg-slate-900 min-h-[800px]" />
});

const About = dynamic(() => import("@/components/sections/About").then(mod => ({ default: mod.About })), {
  loading: () => <section className="py-20 bg-slate-950 min-h-[600px]" />
});

const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => ({ default: mod.FAQ })), {
  loading: () => <section className="py-20 bg-slate-900 min-h-[600px]" />
});

const Support = dynamic(() => import("@/components/sections/Support").then(mod => ({ default: mod.Support })), {
  loading: () => <section className="py-20 bg-slate-950 min-h-[400px]" />
});

export const metadata: Metadata = {
  title: "Free WordPress Hosting with cPanel & LiteSpeed | WPinEU",
  description: "Get 100% free WordPress hosting in Europe. Includes cPanel, LiteSpeed, Redis, and NVMe SSD. No ads, no credit card required. Start your website today.",
  alternates: {
    canonical: "https://wpineu.com",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={WEBSITE_JSON_LD} />
      <JsonLd data={SERVICE_JSON_LD} />
      <Hero />
      <Features />
      <Pricing />
      <About />
      <FAQ />
      <Support />
    </>
  );
}
