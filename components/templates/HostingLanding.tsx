import dynamic from "next/dynamic";
import { HostingHero } from "./HostingHero";
import { type BreadcrumbItem } from "@/components/ui/Breadcrumbs";

// Dynamic imports for below-the-fold components to reduce initial bundle size
const Features = dynamic(() => import("@/components/sections/Features").then(mod => ({ default: mod.Features })), {
    loading: () => <div className="h-[600px] bg-slate-950" />
});

const Pricing = dynamic(() => import("@/components/sections/Pricing").then(mod => ({ default: mod.Pricing })), {
    loading: () => <div className="h-[800px] bg-slate-950" />
});

const About = dynamic(() => import("@/components/sections/About").then(mod => ({ default: mod.About })), {
    loading: () => <div className="h-[600px] bg-slate-950" />
});

const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => ({ default: mod.FAQ })), {
    loading: () => <div className="h-[400px] bg-slate-950" />
});

const Support = dynamic(() => import("@/components/sections/Support").then(mod => ({ default: mod.Support })), {
    loading: () => <div className="h-[400px] bg-slate-950" />
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
