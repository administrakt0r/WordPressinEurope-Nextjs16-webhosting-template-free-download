import { HostingLanding } from "@/components/templates/HostingLanding";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import {
    TECH_LOGO_WORDPRESS,
    TECH_LOGO_LITESPEED,
    TECH_LOGO_CPANEL,
    TECH_LOGO_CLOUDLINUX
} from "@/lib/constants";
import { getServiceJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
    title: "Free LiteSpeed WordPress Hosting | WPinEU",
    description: "Powered by LiteSpeed Web Server for unmatched speed and efficiency. Get the fastest free WordPress hosting in Europe.",
    keywords: ["free litespeed hosting", "litespeed web server", "fastest wordpress hosting", "lscache"],
    alternates: {
        canonical: "https://wpineu.com/free-litespeed-hosting",
    },
    openGraph: {
        title: "Free LiteSpeed WordPress Hosting | WPinEU",
        description: "Powered by LiteSpeed Web Server for unmatched speed and efficiency.",
        url: "https://wpineu.com/free-litespeed-hosting",
    }
};

const ServiceDescription = dynamic(() =>
    import("@/components/sections/ServiceDescription").then((mod) => mod.ServiceDescription)
);

const jsonLd = getServiceJsonLd(
    "Free LiteSpeed Hosting",
    "High-performance LiteSpeed Web Server hosting for WordPress."
);

const litespeedFeatures = [
    {
        iconName: "Rocket",
        title: "Up to 84x Faster",
        description: "LiteSpeed Web Server outperforms Apache by up to 84x in serving static content and 9x for dynamic PHP content."
    },
    {
        iconName: "Zap",
        title: "LSCache Built-in",
        description: "LiteSpeed Cache (LSCache) is the most powerful WordPress caching plugin, integrated at the server level for maximum performance."
    },
    {
        iconName: "Shield",
        title: "Advanced Security",
        description: "Built-in DDoS protection, anti-DDoS features, and mod_security compatibility keep your site safe from attacks."
    },
    {
        iconName: "TrendingUp",
        title: "Better Resource Usage",
        description: "LiteSpeed uses significantly less CPU and RAM than Apache, allowing your site to handle more traffic with the same resources."
    }
];

const techLogos = [
    TECH_LOGO_WORDPRESS,
    TECH_LOGO_LITESPEED,
    TECH_LOGO_CPANEL,
    TECH_LOGO_CLOUDLINUX,
];

export default function FreeLiteSpeedHosting() {
    return (
        <>
            <JsonLd data={jsonLd} />
            <HostingLanding
                heroTitle={
                    <>
                        Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">LiteSpeed</span> Server
                    </>
                }
                heroSubtitle="Don't settle for slow Apache servers. Get the speed of LiteSpeed Web Server and LSCache, optimized for WordPress."
                breadcrumbs={[
                    { label: "Free LiteSpeed Hosting", href: "/free-litespeed-hosting" }
                ]}
            >
                <ServiceDescription
                    title="Why LiteSpeed is Superior"
                    subtitle="The Fastest Web Server for WordPress"
                    description="LiteSpeed Web Server is a high-performance, Apache drop-in replacement that's specifically optimized for WordPress. Unlike traditional Apache servers, LiteSpeed uses an event-driven architecture that handles thousands of concurrent connections with minimal resource usage. Combined with LiteSpeed Cache (LSCache), your WordPress site achieves performance levels that are simply impossible with Apache or Nginx. Our free hosting runs on LiteSpeed Enterprise, giving you commercial-grade performance at no cost."
                    features={litespeedFeatures}
                    techLogos={techLogos}
                />
            </HostingLanding>
        </>
    );
}
