import { HostingLanding } from "@/components/templates/HostingLanding";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Globe, Code, Server, ShieldCheck, Zap, Layers } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import {
    PRICE_MONTHLY_VALUE,
    PRICE_CURRENCY,
    TECH_LOGO_CPANEL,
    TECH_LOGO_WORDPRESS,
    TECH_LOGO_SOFTACULOUS,
    TECH_LOGO_CLOUDLINUX
} from "@/lib/constants";

export const metadata: Metadata = {
    title: "Free Web Hosting | WPinEU",
    description: "Reliable Free Web Hosting with cPanel and SSL. Host your website for free with no ads and 99.9% uptime guarantee.",
    keywords: ["Free Web Hosting", "Web Hosting", "Free Hosting", "WPinEU"],
};

const ServiceDescription = dynamic(() =>
    import("@/components/sections/ServiceDescription").then((mod) => mod.ServiceDescription)
);

const webHostingFeatures = [
    {
        icon: Globe,
        title: "Free Subdomain",
        description: "Don't have a domain yet? No problem. Use our free subdomain to get your website online instantly."
    },
    {
        icon: Code,
        title: "PHP & MySQL Support",
        description: "Full support for the latest PHP versions and MySQL databases, ensuring compatibility with modern web applications."
    },
    {
        icon: Server,
        title: "cPanel Control Panel",
        description: "Manage your files, databases, email accounts, and more with the industry-standard cPanel interface."
    },
    {
        icon: ShieldCheck,
        title: "DDoS Protection",
        description: "Our network is protected by advanced DDoS mitigation systems to keep your website online even during attacks."
    },
    {
        icon: Zap,
        title: "99.9% Uptime",
        description: "We guarantee 99.9% uptime for your website, so your visitors can always access your content."
    },
    {
        icon: Layers,
        title: "No Ads",
        description: "Unlike other free hosts, we never place forced advertisements on your website. Your content is 100% yours."
    }
];

const techLogos = [
    TECH_LOGO_CPANEL,
    TECH_LOGO_WORDPRESS,
    TECH_LOGO_SOFTACULOUS,
    TECH_LOGO_CLOUDLINUX,
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free Web Hosting",
    "provider": {
        "@type": "Organization",
        "name": "WPinEU"
    },
    "description": "Reliable Free Web Hosting with cPanel and SSL.",
    "offers": {
        "@type": "Offer",
        "price": PRICE_MONTHLY_VALUE,
        "priceCurrency": PRICE_CURRENCY
    }
};

export default function FreeWebHosting() {
    return (
        <>
            <JsonLd data={jsonLd} />
            <HostingLanding
                heroTitle={
                    <>
                        Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">Free Web Hosting</span>
                    </>
                }
                heroSubtitle="Host your website on our high-performance servers. Enjoy free SSL, daily backups, and 24/7 monitoring without paying a dime."
                breadcrumbs={[
                    { label: "Free Web Hosting", href: "/free-web-hosting" }
                ]}
            >
                <ServiceDescription
                    title="Everything You Need to Get Online"
                    subtitle="Feature-Packed & Completely Free"
                    description="Whether you are a student, developer, or small business owner, our free web hosting platform has the tools you need. We provide a robust, secure, and ad-free environment to launch your projects without breaking the bank."
                    features={webHostingFeatures}
                    techLogos={techLogos}
                />
            </HostingLanding>
        </>
    );
}
