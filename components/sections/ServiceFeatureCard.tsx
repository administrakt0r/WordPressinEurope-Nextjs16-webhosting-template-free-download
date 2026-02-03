import { type ElementType } from 'react';

export interface ServiceFeature {
    icon: ElementType;
    title: string;
    description: string;
}

export function ServiceFeatureCard({ feature }: { feature: ServiceFeature }) {
    const Icon = feature.icon;
    return (
        <div
            className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all"
        >
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Icon size={24} aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
        </div>
    );
}
