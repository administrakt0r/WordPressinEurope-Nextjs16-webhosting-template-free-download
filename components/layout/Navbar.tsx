"use client";

import { useState, memo, useCallback, useId } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";
import { useScrollLock } from "@/hooks/useScrollLock";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarCTAs } from "./NavbarCTAs";
import { DesktopNavLinks } from "./DesktopNavLinks";
import { MobileMenuToggle } from "./MobileMenuToggle";

// Optimization: Dynamically import MobileMenu to reduce initial bundle size for desktop users
const MobileMenu = dynamic(() => import("./MobileMenu").then(mod => mod.MobileMenu), {
    ssr: false // No need for SSR as it's a client-side portal and hidden initially
});

export const Navbar = memo(function Navbar() {
    const pathname = usePathname();
    const isScrolled = useScroll(20);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuId = useId();

    // UX: Lock body scroll when mobile menu is open
    useScrollLock(isMobileMenuOpen);

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
                <NavbarLogo pathname={pathname} />

                {/* Desktop Menu */}
                <DesktopNavLinks pathname={pathname} />

                {/* CTA Buttons */}
                <NavbarCTAs />

                {/* Mobile Menu Button & Theme Toggle */}
                <MobileMenuToggle
                    isOpen={isMobileMenuOpen}
                    onToggle={toggleMenu}
                    ariaControls={mobileMenuId}
                />
            </div>

            {/* Mobile Menu - No animation, instant show/hide */}
            {/* Conditional rendering for dynamic import optimization */}
            {isMobileMenuOpen && (
                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    pathname={pathname}
                    isScrolled={isScrolled}
                    onClose={handleCloseMobileMenu}
                    id={mobileMenuId}
                />
            )}
        </nav>
    );
});
