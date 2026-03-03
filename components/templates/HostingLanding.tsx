import dynamic from "next/dynamic";
import { HostingHero } from "./HostingHero";
import { type BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { Skeleton } from "@/components/ui/Skeleton";
import { SkeletonList } from "@/components/ui/SkeletonList";

// Dynamic imports for below-the-fold components to reduce initial bundle size
const Features = dynamic(() => import("@/components/sections/Features").then(mod => ({ default: mod.Features })), {
    loading: () => (
      <section className="py-20 bg-slate-950 min-h-[800px] flex items-center justify-center">
        <div className="container px-4">
          <div className="flex justify-center gap-8 mb-20">
             <SkeletonList count={5} className="h-12 w-12 rounded-full" />
          </div>
          <Skeleton className="h-12 w-64 mx-auto mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkeletonList count={6} className="h-64 w-full rounded-2xl" />
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
            <SkeletonList count={4} className="h-20 w-full rounded-2xl" />
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

interface HostingLandingProps {
    heroTitle: React.ReactNode;
    heroSubtitle: string;
    children?: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export function HostingLanding({ heroTitle, heroSubtitle, children, breadcrumbs }: HostingLandingProps) {
    return (
        <>
            <HostingHero heroTitle={heroTitle} heroSubtitle={heroSubtitle} breadcrumbs={breadcrumbs} />

            {children}

            <Features />
            <Pricing />
            <About />
            <FAQ />
            <Support />
        </>
    );
}
