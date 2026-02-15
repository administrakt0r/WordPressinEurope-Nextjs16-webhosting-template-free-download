import { memo } from "react";
import { EXTERNAL_LINKS } from "@/lib/links";
import { ExternalLink } from "@/components/ui/ExternalLink";

// Optimization: Memoized CTAs to avoid re-renders on scroll
export const NavbarCTAs = memo(function NavbarCTAs() {
    return (
        <div className="hidden md:flex items-center gap-4">
            <ExternalLink
                href={EXTERNAL_LINKS.CLIENT_PORTAL}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Sign in to client portal"
            >
                Sign In
            </ExternalLink>
            <ExternalLink
                href={EXTERNAL_LINKS.ORDER_FREE_HOSTING}
                className="bg-primary hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-background"
                aria-label="Get started with free hosting"
            >
                Get Started
            </ExternalLink>
        </div>
    );
});
