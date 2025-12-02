"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    index: number;
}

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
    return (
        <LazyMotion features={domAnimation} strict>
            <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:shadow-lg hover:border-primary/20 transition-all group"
            >
                <div className="w-12 h-12 rounded-xl bg-blue-900/30 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                    {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </m.div>
        </LazyMotion>
    );
}
