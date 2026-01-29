import { ElementType, memo } from "react";
import { getOffscreenOptimizations } from "@/lib/styles";
import { TechnologyLogo } from "@/components/ui/TechnologyLogo";
import { clsx } from "clsx";

interface ServiceFeature {
    icon: ElementType;
    title: string;
    description: string;
}

interface ServiceDescriptionProps {
    title: string;
    subtitle?: string;
    description: string;
    features: ServiceFeature[];
    techLogos?: { name: string; logo: string; width?: number; height?: number }[];
    cols?: 3 | 4;
}

const ServiceFeatureCard = memo(function ServiceFeatureCard({ feature }: { feature: ServiceFeature }) {
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
});

export function ServiceDescription({ title, subtitle, description, features, techLogos, cols = 4 }: ServiceDescriptionProps) {
    const gridColsClass = clsx("grid md:grid-cols-2 gap-6 mb-16", {
        "lg:grid-cols-4": cols === 4,
        "lg:grid-cols-3": cols === 3,
    });

    return (
        <section
            className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
            style={getOffscreenOptimizations("800px")}
            aria-labelledby="service-description-heading"
        >
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2
                        id="service-description-heading"
                        className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground"
                    >
                        {title}
                    </h2>
                    {subtitle && <p className="text-xl text-primary mb-6">{subtitle}</p>}
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Features Grid */}
                <ul className={gridColsClass}>
                    {features.map((feature) => (
                        <li key={feature.title}>
                            <ServiceFeatureCard feature={feature} />
                        </li>
                    ))}
                </ul>

                {/* Technology Logos */}
                {techLogos && techLogos.length > 0 && (
                    <div className="border-t border-slate-200 dark:border-slate-800 pt-12">
                        <h3 className="text-xl font-bold text-center text-foreground mb-8">
                            Powered By Industry-Leading Technologies
                        </h3>
                        <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                            {techLogos.map((tech) => (
                                <li key={tech.name}>
                                    <TechnologyLogo
                                        name={tech.name}
                                        logo={tech.logo}
                                        width={tech.width || 100}
                                        height={tech.height || 100}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}
