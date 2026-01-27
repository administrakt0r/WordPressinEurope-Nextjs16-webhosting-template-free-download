import { getOffscreenOptimizations } from "@/lib/styles";
import {
    Shield,
    Zap,
    Globe,
    Download,
    Database,
    LayoutDashboard,
    Lock
} from "lucide-react";
import { FeatureCard } from "./FeatureCard";
import { TechnologyLogo } from "@/components/ui/TechnologyLogo";
import {
    TECH_LOGO_WORDPRESS,
    TECH_LOGO_CPANEL,
    TECH_LOGO_LITESPEED,
    TECH_LOGO_CLOUDLINUX,
    TECH_LOGO_SOFTACULOUS
} from "@/lib/constants";

const features = [
    {
        icon: <LayoutDashboard size={24} aria-hidden="true" />,
        title: "cPanel Control Panel",
        description: "Manage your hosting with ease using the industry-leading cPanel. Its intuitive interface gives you full control over your website, domains, and emails."
    },
    {
        icon: <Shield size={24} aria-hidden="true" />,
        title: "ImmunifyAV Protection",
        description: "Rest easy knowing your site is protected. Our ImmunifyAV antivirus automatically scans for and removes malware, keeping your website and visitors safe."
    },
    {
        icon: <Zap size={24} aria-hidden="true" />,
        title: "Blazing-Fast SSD NVMe",
        description: "Experience superior performance with our SSD NVMe disks. Enjoy faster page loads, improved database queries, and a better overall user experience."
    },
    {
        icon: <Globe size={24} aria-hidden="true" />,
        title: "European Datacenter",
        description: "Host your site closer to your audience for lower latency and faster speeds. Our state-of-the-art European datacenter ensures optimal performance."
    },
    {
        icon: <Download size={24} aria-hidden="true" />,
        title: "Softaculous Installer",
        description: "Install WordPress and over 150 other applications with a single click. Softaculous makes setting up your website quick, easy, and hassle-free."
    },
    {
        icon: <Database size={24} aria-hidden="true" />,
        title: "Daily Backups by JetBackup",
        description: "Your data is always secure with daily automated backups powered by JetBackup. Restore your files, databases, or entire account with ease."
    }
];

const technologies = [
    TECH_LOGO_WORDPRESS,
    TECH_LOGO_CPANEL,
    TECH_LOGO_LITESPEED,
    TECH_LOGO_CLOUDLINUX,
    TECH_LOGO_SOFTACULOUS,
];

export function Features() {
    return (
        <section
            id="features"
            aria-label="Features and Technologies"
            className="py-20 bg-slate-950"
            // ⚡ Performance: content-visibility skips rendering work when off-screen
            style={getOffscreenOptimizations("1200px")}
        >
            <div className="container mx-auto px-4 md:px-6">

                {/* Tech Stack */}
                <div className="text-center mb-20">
                    <h2 className="text-2xl font-bold font-heading text-foreground mb-8">
                        Powered By Industry-Leading Technologies
                    </h2>
                    <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {technologies.map((tech) => (
                            <li key={tech.name}>
                                <TechnologyLogo
                                    name={tech.name}
                                    logo={tech.logo}
                                    width={tech.width}
                                    height={tech.height}
                                />
                            </li>
                        ))}
                    </ul>
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

                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <li
                                key={feature.title}
                                className="animate-slide-up will-animate"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animationFillMode: 'both' // Ensures opacity: 0 before animation starts
                                }}
                            >
                                <FeatureCard
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Advantage Section */}
                <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
                    {/* GPU accelerated blurs to prevent repaint on scroll */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 gpu-accelerated" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 gpu-accelerated" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                                The WPinEU Advantage: Engineered for Your Success
                            </h2>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm h-fit">
                                        <Zap size={24} className="text-yellow-400" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Unleash Peak Performance</h3>
                                        <p className="text-blue-100 leading-relaxed">
                                            Our European servers are meticulously optimized for WordPress. Paired with cutting-edge SSD NVMe disks, your site will achieve lightning-fast load times.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-4">
                                    <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm h-fit">
                                        <Lock size={24} className="text-yellow-400" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Ironclad Security</h3>
                                        <p className="text-blue-100 leading-relaxed">
                                            We provide robust, proactive security with ImmunifyAV antivirus protection and automated daily backups via JetBackup.
                                        </p>
                                    </div>
                                </li>
                            </ul>
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
                                        <span id="server-response-label">Server Response</span>
                                        <span className="font-bold text-green-400">0.2s</span>
                                    </div>
                                    <div
                                        role="progressbar"
                                        aria-labelledby="server-response-label"
                                        aria-valuenow={95}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        aria-valuetext="0.2 seconds"
                                        className="w-full bg-blue-900/50 rounded-full h-2 overflow-hidden"
                                    >
                                        <div className="bg-green-400 h-full rounded-full w-[95%]" />
                                    </div>

                                    <div className="flex justify-between text-sm">
                                        <span id="db-query-label">Database Query</span>
                                        <span className="font-bold text-green-400">0.05s</span>
                                    </div>
                                    <div
                                        role="progressbar"
                                        aria-labelledby="db-query-label"
                                        aria-valuenow={98}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        aria-valuetext="0.05 seconds"
                                        className="w-full bg-blue-900/50 rounded-full h-2 overflow-hidden"
                                    >
                                        <div className="bg-green-400 h-full rounded-full w-[98%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
