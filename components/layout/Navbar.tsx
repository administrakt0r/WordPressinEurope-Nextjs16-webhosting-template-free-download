"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Server } from "lucide-react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Support", href: "/support" },
    { name: "Blog", href: "https://wp.wpineu.com" },
    { name: "Uptime", href: "https://uptime.wpineu.com" },
    { name: "Clients", href: "https://clients.wpineu.com/" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            aria-label="Main navigation"
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-slate-900/80 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Skip Link for Accessibility */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
                >
                    Skip to main content
                </a>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group" aria-label="WPinEU Home">
                    <div className="bg-primary text-white p-2 rounded-lg group-hover:scale-105 transition-transform">
                        <Server size={24} />
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
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="https://clients.wpineu.com/"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="https://clients.wpineu.com/order/free-wordpress-hosting"
                        className="bg-primary hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button & Theme Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <Link
                        href="https://clients.wpineu.com/order/free-wordpress-hosting"
                        className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-full text-xs font-bold transition-all"
                    >
                        Get Started
                    </Link>
                    <button
                        className="p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <LazyMotion features={domAnimation} strict>
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <m.div
                            id="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                                duration: 0.25,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                            className="md:hidden bg-slate-900 border-t border-gray-800 overflow-hidden"
                            role="navigation"
                            aria-label="Mobile navigation"
                        >
                            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-base font-medium text-foreground py-2 border-b border-gray-800 last:border-0"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="flex flex-col gap-3 mt-4">
                                    <Link
                                        href="https://clients.wpineu.com/"
                                        className="w-full text-center py-3 rounded-lg border border-gray-700 font-medium"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href="https://clients.wpineu.com/order/free-wordpress-hosting"
                                        className="w-full text-center py-3 rounded-lg bg-primary text-white font-medium"
                                    >
                                        Get Started
                                    </Link>
                                    <div className="flex justify-center pt-4 border-t border-gray-800">
                                    </div>
                                </div>
                            </div>
                        </m.div>
                    )}
                </AnimatePresence>
            </LazyMotion>
        </nav>
    );
}
