"use client";

import { useState, useEffect, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Server } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/links";
import { NAV_LINKS } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { useScroll } from "@/hooks/useScroll";

export const Navbar = memo(function Navbar() {
    const pathname = usePathname();
    const isScrolled = useScroll(20);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // UX: Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

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
                <Link
                    href="/"
                    className="flex items-center gap-2 group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label="WPinEU Home"
                >
                    <div className="bg-primary text-white p-2 rounded-lg group-hover:scale-105 transition-transform duration-200">
                        <Server size={24} aria-hidden="true" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold font-heading leading-none text-foreground">
                            WPinEU
                        </span>
                        <span className="text-[10px] text-muted-foreground font-medium tracking-wider">
                            WORDPRESS IN EUROPE
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
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

                {/* CTA Buttons */}
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

                {/* Mobile Menu Button & Theme Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ExternalLink
                        href={EXTERNAL_LINKS.ORDER_FREE_HOSTING}
                        className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-full text-xs font-bold transition-all duration-200"
                        aria-label="Get started with free hosting"
                    >
                        Get Started
                    </ExternalLink>
                    <button
                        className="p-2 text-foreground rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                    </button>
                </div>
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
                                        onClick={() => setIsMobileMenuOpen(false)}
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
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <div className="flex flex-col gap-4 mt-6">
                            <ExternalLink
                                href={EXTERNAL_LINKS.CLIENT_PORTAL}
                                className="w-full text-center py-3.5 rounded-lg border border-gray-700 font-medium hover:bg-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Sign in to client portal"
                            >
                                Sign In
                            </ExternalLink>
                            <ExternalLink
                                href={EXTERNAL_LINKS.ORDER_FREE_HOSTING}
                                className="w-full text-center py-3.5 rounded-lg bg-primary text-white font-medium hover:bg-blue-700 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Get started with free hosting"
                            >
                                Get Started
                            </ExternalLink>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
});
