import { HostingLanding } from "@/components/templates/HostingLanding";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { LayoutDashboard, Download, Zap, Shield } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import {
    TECH_LOGO_WORDPRESS,
    TECH_LOGO_CPANEL,
    TECH_LOGO_SOFTACULOUS,
    TECH_LOGO_CLOUDLINUX
} from "@/lib/constants";
import { getServiceJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
    title: "Free WordPress Hosting with cPanel | WPinEU",
    description: "The best free WordPress hosting with cPanel, Softaculous, and full control. Install WordPress in 1-click and start building.",
    keywords: ["free wordpress hosting cpanel", "cpanel hosting", "softaculous", "easy wordpress install"],
    alternates: {
        canonical: "https://wpineu.com/free-wordpress-hosting",
    },
    openGraph: {
        title: "Free WordPress Hosting with cPanel | WPinEU",
        description: "The best free WordPress hosting with cPanel, Softaculous, and full control.",
        url: "https://wpineu.com/free-wordpress-hosting",
    }
};

const ServiceDescription = dynamic(() =>
    import("@/components/sections/ServiceDescription").then((mod) => mod.ServiceDescription)
);

const jsonLd = getServiceJsonLd(
    "Free WordPress Hosting",
    "Full-featured WordPress hosting with cPanel and Softaculous."
);

const wordpressFeatures = [
    {
        icon: LayoutDashboard,
        title: "cPanel Control Panel",
        description: "Get the industry-standard cPanel control panel. Manage your hosting, domains, emails, databases, and files with ease."
    },
    {
        icon: Download,
        title: "1-Click WordPress Install",
        description: "Install WordPress in seconds with Softaculous. No technical knowledge required - just click and go."
    },
    {
        icon: Zap,
        title: "Optimized for WordPress",
        description: "Our servers are specifically tuned for WordPress with PHP 8.x, MySQL 8.0, and all required extensions pre-installed."
    },
    {
        icon: Shield,
        title: "WordPress Manager",
        description: "Update WordPress core, themes, and plugins directly from cPanel. Keep your site secure and up-to-date effortlessly."
    }
];

const techLogos = [
    TECH_LOGO_WORDPRESS,
    TECH_LOGO_CPANEL,
    TECH_LOGO_SOFTACULOUS,
    TECH_LOGO_CLOUDLINUX,
];

export default function FreeWordPressHosting() {
    return (
        <>
            <JsonLd data={jsonLd} />
            <HostingLanding
                heroTitle={
                    <>
                        Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Free WordPress</span> Hosting
                    </>
                }
                heroSubtitle="Everything you need to start your WordPress journey. cPanel, Softaculous, and full control over your website."
                breadcrumbs={[
                    { label: "Free WordPress Hosting", href: "/free-wordpress-hosting" }
                ]}
            >
                <ServiceDescription
                    title="Complete WordPress Hosting Solution"
                    subtitle="Everything You Need, Nothing You Don't"
                    description="Our free WordPress hosting includes everything you need to build, manage, and grow your website. With cPanel, you get the world's most popular hosting control panel - intuitive, powerful, and packed with features. Softaculous makes installing WordPress a breeze with just one click. Plus, you get WordPress Manager for easy updates, MySQL databases, email accounts, and more. This isn't a limited 'free trial' - it's genuinely free hosting with all the features you need to succeed online."
                    features={wordpressFeatures}
                    techLogos={techLogos}
                />
            </HostingLanding>
        </>
    );
}
