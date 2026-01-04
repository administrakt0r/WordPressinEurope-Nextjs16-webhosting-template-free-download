"use client";

import { Shield, Zap, Database, HardDrive, Rocket, TrendingUp, Gauge, LayoutDashboard, Mail, FileText, Download } from "lucide-react";
import Image from "next/image";

interface ServiceFeature {
    iconName: string;
    title: string;
    description: string;
}

interface ServiceDescriptionProps {
    title: string;
    subtitle: string;
    description: string;
    features: ServiceFeature[];
    techLogos?: { name: string; logo: string; width?: number; height?: number }[];
}

const iconMap: Record<string, React.ElementType> = {
    Shield,
    Zap,
    Database,
    HardDrive,
    Rocket,
    TrendingUp,
    Gauge,
    LayoutDashboard,
    Mail,
    FileText,
    Download,
};

export function ServiceDescription({ title, subtitle, description, features, techLogos }: ServiceDescriptionProps) {
    return (
        <section className="py-20 bg-slate-900">
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
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => {
                        const Icon = iconMap[feature.iconName];
                        return (
                            <div
                                key={index}
                                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all"
                            >
                                <div className="w-12 h-12 rounded-lg bg-blue-900/30 text-blue-400 flex items-center justify-center mb-4">
                                    {Icon && <Icon size={24} />}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Technology Logos */}
                {techLogos && techLogos.length > 0 && (
                    <div className="border-t border-slate-800 pt-12">
                        <h3 className="text-xl font-bold text-center text-white mb-8">
                            Powered By Industry-Leading Technologies
                        </h3>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                            {techLogos.map((tech) => (
                                <div key={tech.name} className="group relative h-10 md:h-12 w-auto flex items-center">
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={tech.width || 100}
                                        height={tech.height || 100}
                                        className="h-full w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                                        style={{ objectFit: 'contain', width: 'auto', height: '100%' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
