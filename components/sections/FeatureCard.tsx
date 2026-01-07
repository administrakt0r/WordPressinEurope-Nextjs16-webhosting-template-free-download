"use client";

import { m } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { memo } from "react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    index: number;
}

// ⚡ Performance: Memoized to prevent unnecessary re-renders when parent updates
export const FeatureCard = memo(function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
    return (
        <m.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
        >
            <div className="w-12 h-12 rounded-xl bg-blue-900/30 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ease-out">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
                {description}
            </p>
        </m.div>
    );
});
