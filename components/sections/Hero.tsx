import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/links";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { HOSTING_SPECS } from "@/lib/constants";
import { HeroServerCard } from "@/components/sections/HeroServerCard";

const STARS = [1, 2, 3, 4, 5];

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-slate-950">
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Orbs - Optimized: Replaced expensive CSS blurs with radial gradients for performance */}
                <div
                    className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] gpu-accelerated bg-[radial-gradient(closest-side,rgba(37,99,235,0.2),transparent)]"
                />
                <div
                    className="absolute top-[20%] -left-[10%] w-[60%] h-[60%] gpu-accelerated bg-[radial-gradient(closest-side,rgba(234,179,8,0.1),transparent)]"
                />
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] gpu-accelerated bg-[radial-gradient(closest-side,rgba(30,58,138,0.2),transparent)]"
                />

                {/* Grid Pattern */}
                {/* Localized noise.svg to reduce external network requests and improve reliability */}
                <div className="absolute inset-0 bg-noise opacity-20 gpu-accelerated" />
                <div className="absolute inset-0 bg-grid-pattern gpu-accelerated" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Text Content - No animation, loads immediately */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-800 text-blue-300 text-xs font-bold tracking-widest uppercase mb-8 hover:bg-blue-900/50 transition-colors cursor-default">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" aria-hidden="true"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            100% Free • No Ads • No Commitments
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-[1.1] mb-8 tracking-tight">
                            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">WordPress</span> Hosting for <span className="text-yellow-400">Free</span>
                        </h1>

                        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Experience the power of enterprise-grade hosting without the cost.
                            Built on the <strong>world-leading cPanel</strong>, <strong>LiteSpeed</strong>, <strong>Redis Cache</strong>, and <strong>WordPress Manager</strong> for unmatched speed and reliability.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12">
                            <ExternalLink
                                href={EXTERNAL_LINKS.ORDER_FREE_HOSTING}
                                ariaLabel="Get started with free WordPress hosting"
                                className="group relative inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-200 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:-translate-y-1 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                            >
                                <span className="relative z-10">Get Started Now</span>
                                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </ExternalLink>
                            <Link
                                href="#features"
                                className="inline-flex items-center justify-center gap-2 bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-200 hover:bg-slate-800 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                            >
                                View Features
                            </Link>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-6 pt-8 border-t border-slate-800/50">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1 text-yellow-400 mb-1" role="img" aria-label="Rated 5 out of 5 stars">
                                    {STARS.map((i) => (
                                        <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                                    ))}
                                </div>
                                <span className="text-sm text-slate-400">
                                    <span className="font-bold text-white">{HOSTING_SPECS.RATING}</span> from happy users
                                </span>
                            </div>
                            <div className="w-px h-10 bg-slate-800" />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white">{HOSTING_SPECS.UPTIME}</span>
                                <span className="text-sm text-slate-400">Uptime Guaranteed</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Visual - No animation, loads immediately */}
                    <HeroServerCard />
                </div>
            </div>
        </section>
    );
}
