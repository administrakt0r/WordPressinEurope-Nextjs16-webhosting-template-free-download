import { Shield, Zap, Database, HardDrive, Rocket, TrendingUp, Gauge, LayoutDashboard, Mail, FileText, Download, Circle, Globe, Code, Server, ShieldCheck, Layers } from "lucide-react";
import type { ElementType } from "react";

export interface ServiceFeature {
    iconName: string;
    title: string;
    description: string;
}

const iconMap: Record<string, ElementType> = {
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
    Globe,
    Code,
    Server,
    ShieldCheck,
    Layers,
};

export function ServiceFeatureCard({ feature }: { feature: ServiceFeature }) {
    const Icon = iconMap[feature.iconName] || Circle;
    return (
        <div
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all"
        >
            <div className="w-12 h-12 rounded-lg bg-blue-900/30 text-blue-400 flex items-center justify-center mb-4">
                <Icon size={24} aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
        </div>
    );
}
