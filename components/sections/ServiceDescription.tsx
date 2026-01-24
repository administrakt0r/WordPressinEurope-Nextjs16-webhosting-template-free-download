import { getOffscreenOptimizations } from "@/lib/styles";
import { ServiceFeatureCard, type ServiceFeature } from "./ServiceFeatureCard";
import { TechnologyLogo } from "@/components/ui/TechnologyLogo";

interface ServiceDescriptionProps {
    title: string;
    subtitle: string;
    description: string;
    features: ServiceFeature[];
    techLogos?: { name: string; logo: string; width?: number; height?: number }[];
}

export function ServiceDescription({ title, subtitle, description, features, techLogos }: ServiceDescriptionProps) {
    return (
        <section
            className="py-20 bg-slate-900"
            style={getOffscreenOptimizations("800px")}
        >
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-xl text-blue-400 mb-6">{subtitle}</p>
                    <p className="text-lg text-slate-300 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Features Grid */}
                <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature) => (
                        <li key={feature.title}>
                            <ServiceFeatureCard feature={feature} />
                        </li>
                    ))}
                </ul>

                {/* Technology Logos */}
                {techLogos && techLogos.length > 0 && (
                    <div className="border-t border-slate-800 pt-12">
                        <h3 className="text-xl font-bold text-center text-white mb-8">
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
