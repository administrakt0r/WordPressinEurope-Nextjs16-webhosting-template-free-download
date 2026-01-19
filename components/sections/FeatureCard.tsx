import type { ReactNode } from "react";

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    index: number;
}

export function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
    return (
        <div
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group animate-slide-up"
            style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both' // Ensures opacity: 0 before animation starts
            }}
        >
            <div className="w-12 h-12 rounded-xl bg-blue-900/30 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ease-out">
                {icon}
            </div>
            <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
                {description}
            </p>
        </div>
    );
}
