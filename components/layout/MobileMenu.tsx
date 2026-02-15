import { memo, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { EXTERNAL_LINKS } from "@/lib/links";
import { NAV_LINKS } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { ExternalLink } from "@/components/ui/ExternalLink";

interface MobileMenuProps {
    isOpen: boolean;
    pathname: string | null;
    isScrolled: boolean;
    onClose: () => void;
}

// Optimization: Memoized Mobile Menu
// Using createPortal to escape stacking context of parent (which might have transforms)
export const MobileMenu = memo(function MobileMenu({
    isOpen,
    pathname,
    isScrolled,
    onClose
}: MobileMenuProps) {
    // Only render if open and on client (document exists)
    if (!isOpen || typeof document === 'undefined') return null;

    return createPortal(
        <div
            id="mobile-menu"
            className="md:hidden fixed inset-0 top-[var(--navbar-height,72px)] bg-slate-950 z-40 overflow-y-auto"
            role="navigation"
            aria-label="Mobile navigation"
            style={{
                '--navbar-height': isScrolled ? '72px' : '88px',
            } as CSSProperties}
        >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                {NAV_LINKS.map((link) => {
                    const isActive =
                        pathname === link.href ||
                        (link.href !== "/" &&
                            pathname?.startsWith(`${link.href}/`) &&
                            !link.href.startsWith("http") &&
                            !link.href.startsWith("#"));

                    if (link.href.startsWith("http")) {
                        return (
                            <ExternalLink
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium py-3 border-b border-gray-800/50 last:border-0 text-foreground focus-visible:outline-none focus-visible:text-primary focus-visible:pl-2 transition-all"
                                onClick={onClose}
                            >
                                {link.name}
                            </ExternalLink>
                        );
                    }

                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            aria-current={isActive ? "page" : undefined}
                            className={cn(
                                "text-lg font-medium py-3 border-b border-gray-800/50 last:border-0 focus-visible:outline-none focus-visible:text-primary focus-visible:pl-2 transition-all",
                                isActive ? "text-primary pl-2" : "text-foreground"
                            )}
                            onClick={onClose}
                        >
                            {link.name}
                        </Link>
                    );
                })}
                <div className="flex flex-col gap-4 mt-6">
                    <ExternalLink
                        href={EXTERNAL_LINKS.CLIENT_PORTAL}
                        className="w-full text-center py-3.5 rounded-lg border border-gray-700 font-medium hover:bg-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        onClick={onClose}
                        aria-label="Sign in to client portal"
                    >
                        Sign In
                    </ExternalLink>
                    <ExternalLink
                        href={EXTERNAL_LINKS.ORDER_FREE_HOSTING}
                        className="w-full text-center py-3.5 rounded-lg bg-primary text-white font-medium hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        onClick={onClose}
                        aria-label="Get started with free hosting"
                    >
                        Get Started
                    </ExternalLink>
                </div>
            </div>
        </div>,
        document.body
    );
});
