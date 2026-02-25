import { memo } from "react";
import { Menu, X } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/links";
import { ExternalLink } from "@/components/ui/ExternalLink";

interface MobileMenuToggleProps {
    isOpen: boolean;
    onToggle: () => void;
    ariaControls: string;
}

// Optimization: Memoized Mobile Menu Toggle
export const MobileMenuToggle = memo(function MobileMenuToggle({
    isOpen,
    onToggle,
    ariaControls
}: MobileMenuToggleProps) {
    return (
        <div className="flex items-center gap-4 md:hidden">
            <ExternalLink
                href={EXTERNAL_LINKS.ORDER_FREE_HOSTING}
                className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Get started with free hosting"
            >
                Get Started
            </ExternalLink>
            <button
                className="p-2 text-foreground rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={onToggle}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls={ariaControls}
            >
                {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
        </div>
    );
});
