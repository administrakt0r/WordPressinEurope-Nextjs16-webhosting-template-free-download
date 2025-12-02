import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Support } from "@/components/sections/Support";
import { HostingHero } from "./HostingHero";

interface HostingLandingProps {
    title: string;
    description: string;
    heroTitle: React.ReactNode;
    heroSubtitle: string;
    children?: React.ReactNode;
}

export function HostingLanding({ title, description, heroTitle, heroSubtitle, children }: HostingLandingProps) {
    return (
        <>
            <HostingHero heroTitle={heroTitle} heroSubtitle={heroSubtitle} />

            {children}

            <Features />
            <Pricing />
            <About />
            <FAQ />
            <Support />
        </>
    );
}

