"use client";

import { useState, useEffect, memo, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useFocusTrap } from "@/hooks/useFocusTrap";

// Optimization: Memoized DesktopNavLinks to avoid re-rendering links when Navbar state (isScrolled) changes.
// This isolates the list rendering from the scroll event updates.
const DesktopNavLinks = memo(function DesktopNavLinks({ pathname }: { pathname: string | null }) {
    return (
        <div className="hidden md:flex items-center gap-8 bg-slate-800/50 px-8 py-2 rounded-full border border-white/20 backdrop-blur-sm shadow-sm" role="navigation" aria-label="Primary navigation">
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
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-150 relative group focus-visible:outline-none focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:rounded-sm"
                        >
                            {link.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-150 w-0 group-hover:w-full"
                            )} />
                        </ExternalLink>
                    );
                }

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                            "text-sm font-medium transition-colors duration-150 relative group focus-visible:outline-none focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:rounded-sm",
                            isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                        )}
                    >
                        {link.name}
                        <span className={cn(
                            "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-150",
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                        )} />
                    </Link>
                );
            })}
        </div>
    );
});

// Optimization: Memoized MobileNavLinks to separate the list rendering from Navbar state (isScrolled).
// This prevents the mobile menu content from re-reconciling when the user scrolls (which changes navbar height/bg).
const MobileNavLinks = memo(function MobileNavLinks({
    pathname,
    onClose
}: {
    pathname: string | null;
    onClose: () => void;
}) {
    return (
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
    );
});

export const Navbar = memo(function Navbar() {
    const pathname = usePathname();
    const isScrolled = useScroll(20);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // UX: Lock body scroll when mobile menu is open
    useScrollLock(isMobileMenuOpen);

    // Handler to close menu
    // Optimization: useCallback to keep the function stable for memoized children
    const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);
    // Handler to toggle menu
    // Optimization: useCallback to keep the function stable for memoized children
    const toggleMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);

    // Optimization: Stable callback to prevent MobileNavLinks re-renders
    const handleCloseMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    return (
        <nav
            aria-label="Main navigation"
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-colors duration-200",
                isScrolled
                    ? "bg-slate-900/80 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <NavbarLogo />

                {/* Desktop Menu */}
                <DesktopNavLinks pathname={pathname} />

                {/* CTA Buttons */}
                <NavbarCTAs />

                {/* Mobile Menu Button & Theme Toggle */}
                <MobileMenuToggle isOpen={isMobileMenuOpen} onToggle={toggleMenu} />
            </div>

            {/* Mobile Menu - No animation, instant show/hide */}
            {isMobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden fixed inset-0 top-[var(--navbar-height,72px)] bg-slate-950 z-40 overflow-y-auto"
                    role="navigation"
                    aria-label="Mobile navigation"
                    style={{
                        '--navbar-height': isScrolled ? '72px' : '88px',
                    } as React.CSSProperties}
                >
                    <MobileNavLinks pathname={pathname} onClose={handleCloseMobileMenu} />
                </div>
            )}
        </nav>
    );
});
