"use client";

import { memo } from "react";
import { m } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/links";

const features = [
    "1 GB SSD disk space (RAID 10 NVMe)",
    "100 GB Bandwidth (up to 3GB/s speed)",
    "2 Addon domains",
    "2 MySQL databases",
    "2 email addresses",
    "FREE Auto SSL Certificates",
    "Latest cPanel with 150+ 1-click apps",
    "NO advertisements or hidden fees"
];

// PERF: Memoize the component to prevent unnecessary re-renders
export const PricingCard = memo(function PricingCard() {
    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-slate-950 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-yellow-400" />

            <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h3 className="text-2xl font-bold font-heading text-foreground">Completely FREE</h3>
                        <p className="text-muted-foreground mt-1">Perfect for Businesses & Blogs</p>
                    </div>
                    <div className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        Free Forever
                    </div>

                <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-bold text-foreground">€0.00</span>
                    <span className="text-muted-foreground font-medium">/mo</span>
                </div>
                <p className="text-sm text-muted-foreground mb-8">No credit card required</p>

                <Link
                    href={EXTERNAL_LINKS.ORDER_FREE_HOSTING}
                    className="group flex items-center justify-center gap-2 w-full bg-primary hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-1 mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                    Get Started Free Now
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>

                <div className="space-y-4">
                    {features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                            <div className="p-1 rounded-full bg-green-900/30 text-green-400 mt-0.5">
                                <Check size={14} strokeWidth={3} aria-hidden="true" />
                            </div>
                            <span className="text-muted-foreground">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </m.div>
    );
});
