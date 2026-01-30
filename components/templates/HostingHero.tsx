import Link from "next/link";
import { ArrowRight, Check, Star, Server, Zap, Shield, Globe } from "lucide-react";
import { HeroAnimator } from "./HeroAnimator";
import { EXTERNAL_LINKS } from "@/lib/links";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/Breadcrumbs";

interface HostingHeroProps {
    heroTitle: React.ReactNode;
    heroSubtitle: string;
    breadcrumbs?: BreadcrumbItem[];
}

export function HostingHero({ heroTitle, heroSubtitle, breadcrumbs }: HostingHeroProps) {
    // ⚡ Performance: Extracted static content to Server Component.
    // Animations are handled by the client-side wrapper `HeroAnimator`.
    // This reduces client bundle size by keeping large static JSX on the server.

    const textContent = (
        <>
            {breadcrumbs && <Breadcrumbs items={breadcrumbs} className="mb-4" />}
            <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-800 text-blue-300 text-xs font-bold tracking-widest uppercase mb-8 hover:bg-blue-900/50 transition-colors cursor-default"
            >
                <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                100% Free • No Ads • No Commitments
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-[1.1] mb-8 tracking-tight">
                {heroTitle}
            </h1>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12">
                <ExternalLink
                    href={EXTERNAL_LINKS.ORDER_FREE_HOSTING}
                    className="group relative inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:-translate-y-1 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                    <span className="relative z-10">Get Started Now</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </ExternalLink>
                <Link
                    href="#features"
                    className="inline-flex items-center justify-center gap-2 bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all hover:bg-slate-800 backdrop-blur-sm"
                >
                    View Features
                </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-8 border-t border-slate-800/50">
                <div className="flex flex-col">
                    <div className="flex items-center gap-1 text-yellow-400 mb-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                        ))}
                    </div>
                    <span className="text-sm text-slate-400">
                        <span className="font-bold text-white">4.9/5</span> from happy users
                    </span>
                </div>
                <div className="w-px h-10 bg-slate-800" />
                <div className="flex flex-col">
                    <span className="text-xl font-bold text-white">99.9%</span>
                    <span className="text-sm text-slate-400">Uptime Guaranteed</span>
                </div>
            </div>
        </>
    );

    const visualContent = (
        <>
            {/* Main Server Card */}
            <div className="relative z-20 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                {/* Card Header */}
                <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-400">
                            <Server size={24} aria-hidden="true" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white">Pro Plan</h3>
                            <p className="text-xs text-slate-400">Active & Running</p>
                        </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase">
                        Online
                    </div>
                </div>

                {/* Specs Grid */}
                <ul className="grid gap-4 mb-8">
                    <li className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                <Zap size={18} aria-hidden="true" />
                            </div>
                            <span className="text-slate-300 font-medium">Speed</span>
                        </div>
                        <span className="text-white font-bold">3GB/s</span>
                    </li>

                    <li className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                                <Shield size={18} aria-hidden="true" />
                            </div>
                            <span className="text-slate-300 font-medium">Security</span>
                        </div>
                        <span className="text-white font-bold">ImunifyAV</span>
                    </li>

                    <li className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400">
                                <Globe size={18} aria-hidden="true" />
                            </div>
                            <span className="text-slate-300 font-medium">Location</span>
                        </div>
                        <span className="text-white font-bold">Europe</span>
                    </li>
                </ul>

                {/* Price Tag */}
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-sm text-slate-400 mb-1">Monthly Cost</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-white" aria-hidden="true">€0.00</span>
                            <span className="text-slate-500" aria-hidden="true">/mo</span>
                            <span className="sr-only">0 Euros per month</span>
                        </div>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                        <Check size={20} className="text-white" strokeWidth={3} aria-hidden="true" />
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div
                className="absolute -top-12 -right-8 z-30 bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-700"
                aria-hidden="true"
            >
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500" aria-hidden="true" />
                    <span className="font-bold text-sm text-white">WordPress Optimized</span>
                </div>
            </div>

            <div
                className="absolute -bottom-8 -left-8 z-30 bg-blue-600 p-4 rounded-2xl shadow-xl shadow-blue-600/20"
                aria-hidden="true"
            >
                <div className="flex items-center gap-3">
                    <div className="font-bold text-2xl text-white">NVMe</div>
                    <span className="text-blue-100 text-xs font-medium leading-tight">1GB SSD<br />Storage</span>
                </div>
            </div>

            <div
                className="absolute top-1/2 -right-12 z-30 bg-yellow-500 p-3 rounded-xl shadow-lg shadow-yellow-500/20"
                aria-hidden="true"
            >
                <div className="text-xs font-bold text-white text-center">
                    100GB<br />Bandwidth
                </div>
            </div>

            {/* Glow Effects */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 gpu-accelerated"
                style={{ background: 'radial-gradient(closest-side, rgba(59, 130, 246, 0.1), transparent)' }}
            />
        </>
    );

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-slate-950">
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Gradient Orbs - Optimized: Replaced expensive CSS blurs with radial gradients for performance */}
                    <div
                        className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] gpu-accelerated"
                        style={{ background: 'radial-gradient(closest-side, rgba(37, 99, 235, 0.2), transparent)' }}
                    />
                    <div
                        className="absolute top-[20%] -left-[10%] w-[60%] h-[60%] gpu-accelerated"
                        style={{ background: 'radial-gradient(closest-side, rgba(234, 179, 8, 0.1), transparent)' }}
                    />
                    <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] gpu-accelerated"
                        style={{ background: 'radial-gradient(closest-side, rgba(30, 58, 138, 0.2), transparent)' }}
                    />

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-noise opacity-20 gpu-accelerated" />
                    <div className="absolute inset-0 bg-grid-pattern gpu-accelerated" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <HeroAnimator textContent={textContent} visualContent={visualContent} />
                </div>
        </section>
    );
}
