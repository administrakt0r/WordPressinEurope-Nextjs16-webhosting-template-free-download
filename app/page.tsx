import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Skeleton } from "@/components/ui/Skeleton";
import { WEBSITE_JSON_LD, SERVICE_JSON_LD, FAQ_JSON_LD } from "@/lib/json-ld";

// Dynamic imports for below-the-fold components
const Features = dynamic(() => import("@/components/sections/Features").then(mod => ({ default: mod.Features })), {
  loading: () => (
    <section className="py-20 bg-slate-950 min-h-[800px] flex items-center justify-center">
      <div className="container px-4">
        <div className="flex justify-center gap-8 mb-20">
           {[1, 2, 3, 4, 5].map((i) => (
             <Skeleton key={i} className="h-12 w-12 rounded-full" />
           ))}
        </div>
        <Skeleton className="h-12 w-64 mx-auto mb-12" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-64 w-full rounded-2xl" />
          ))}
        </div>
      </div>
    </section>
  )
});

const Pricing = dynamic(() => import("@/components/sections/Pricing").then(mod => ({ default: mod.Pricing })), {
  loading: () => (
    <section className="py-20 bg-slate-900 min-h-[800px] flex items-center justify-center">
      <div className="container px-4">
        <Skeleton className="h-12 w-64 mx-auto mb-12" />
        <Skeleton className="h-[600px] w-full max-w-lg mx-auto rounded-3xl" />
      </div>
    </section>
  )
});

const About = dynamic(() => import("@/components/sections/About").then(mod => ({ default: mod.About })), {
  loading: () => (
    <section className="py-20 bg-slate-950 min-h-[600px] flex items-center justify-center">
      <div className="container px-4 grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <Skeleton className="h-[400px] w-full rounded-2xl" />
      </div>
    </section>
  )
});

const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => ({ default: mod.FAQ })), {
  loading: () => (
    <section className="py-20 bg-slate-900 min-h-[600px] flex items-center justify-center">
      <div className="container px-4 max-w-3xl">
        <Skeleton className="h-12 w-48 mx-auto mb-12" />
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-20 w-full rounded-2xl" />
          ))}
        </div>
      </div>
    </section>
  )
});

const Support = dynamic(() => import("@/components/sections/Support").then(mod => ({ default: mod.Support })), {
  loading: () => (
    <section className="py-20 bg-slate-950 min-h-[400px] flex items-center justify-center">
      <div className="container px-4">
        <Skeleton className="h-64 w-full max-w-3xl mx-auto rounded-3xl" />
      </div>
    </section>
  )
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
      <JsonLd data={FAQ_JSON_LD} />
      <Hero />
      <Features />
      <Pricing />
      <About />
      <FAQ />
      <Support />
    </>
  );
}
