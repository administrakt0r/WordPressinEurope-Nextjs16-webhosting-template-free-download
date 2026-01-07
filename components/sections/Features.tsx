"use client";

import {
    Shield,
    Zap,
    Globe,
    Download,
    Database,
    LayoutDashboard,
    Lock
} from "lucide-react";
import Image from "next/image";
import { LazyMotion, domAnimation } from "framer-motion";
import { FeatureCard } from "./FeatureCard";

const features = [
    {
        icon: LayoutDashboard,
        title: "cPanel Control Panel",
        description: "Manage your hosting with ease using the industry-leading cPanel. Its intuitive interface gives you full control over your website, domains, and emails."
    },
    {
        icon: Shield,
        title: "ImmunifyAV Protection",
        description: "Rest easy knowing your site is protected. Our ImmunifyAV antivirus automatically scans for and removes malware, keeping your website and visitors safe."
    },
    {
        icon: Zap,
        title: "Blazing-Fast SSD NVMe",
        description: "Experience superior performance with our SSD NVMe disks. Enjoy faster page loads, improved database queries, and a better overall user experience."
    },
    {
        icon: Globe,
        title: "European Datacenter",
        description: "Host your site closer to your audience for lower latency and faster speeds. Our state-of-the-art European datacenter ensures optimal performance."
    },
    {
        icon: Download,
        title: "Softaculous Installer",
        description: "Install WordPress and over 150 other applications with a single click. Softaculous makes setting up your website quick, easy, and hassle-free."
    },
    {
        icon: Database,
        title: "Daily Backups by JetBackup",
        description: "Your data is always secure with daily automated backups powered by JetBackup. Restore your files, databases, or entire account with ease."
    }
];

const technologies = [
    { name: "WordPress", logo: "/wordpress-logo.svg", width: 540, height: 540 },
    { name: "cPanel", logo: "/cPanel.svg", width: 1136, height: 240 },
    { name: "LiteSpeed", logo: null, width: 0, height: 0 },
    { name: "CloudLinux", logo: "/cloudlinux.svg", width: 24, height: 24 },
    { name: "Softaculous", logo: "/Softaculous.svg", width: 960, height: 960 },
];

export function Features() {
    return (
        <section id="features" className="py-20 bg-slate-950">
            <LazyMotion features={domAnimation} strict>
                <div className="container mx-auto px-4 md:px-6">

                    {/* Tech Stack */}
                <div className="text-center mb-20">
                    <h2 className="text-2xl font-bold font-heading text-foreground mb-8">
                        Powered By Industry-Leading Technologies
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {technologies.map((tech) => (
                            <div key={tech.name} className="group flex items-center justify-center">
                                {tech.logo ? (
                                    <div className="relative h-10 md:h-12 w-auto">
                                         <Image
                                            src={tech.logo}
                                            alt={tech.name}
                                            width={tech.width}
                                            height={tech.height}
                                            className="h-full w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                ) : (
                                    <span className="text-lg md:text-xl font-bold text-slate-400 hover:text-primary transition-colors cursor-default">
                                        {tech.name}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Features Grid */}
                <div className="mb-20">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                            Unlock Peak Performance
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Our WordPress hosting is engineered for excellence. From ironclad security to lightning-fast speeds and effortless scalability.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* Advantage Section */}
                <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                                The WPinEU Advantage: Engineered for Your Success
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm h-fit">
                                        <Zap size={24} className="text-yellow-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Unleash Peak Performance</h3>
                                        <p className="text-blue-100 leading-relaxed">
                                            Our European servers are meticulously optimized for WordPress. Paired with cutting-edge SSD NVMe disks, your site will achieve lightning-fast load times.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm h-fit">
                                        <Lock size={24} className="text-yellow-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Ironclad Security</h3>
                                        <p className="text-blue-100 leading-relaxed">
                                            We provide robust, proactive security with ImmunifyAV antivirus protection and automated daily backups via JetBackup.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <div className="text-sm text-blue-200 uppercase tracking-wider font-bold mb-1">Uptime Guarantee</div>
                                        <div className="text-4xl font-bold">99.9%</div>
                                    </div>
                                    <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <div className="h-3 w-3 rounded-full bg-green-400" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <span>Server Response</span>
                                        <span className="font-bold text-green-400">0.2s</span>
                                    </div>
                                    <div className="w-full bg-blue-900/50 rounded-full h-2 overflow-hidden">
                                        <div className="bg-green-400 h-full rounded-full w-[95%]" />
                                    </div>

                                    <div className="flex justify-between text-sm">
                                        <span>Database Query</span>
                                        <span className="font-bold text-green-400">0.05s</span>
                                    </div>
                                    <div className="w-full bg-blue-900/50 rounded-full h-2 overflow-hidden">
                                        <div className="bg-green-400 h-full rounded-full w-[98%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </LazyMotion>
        </section>
    );
}
