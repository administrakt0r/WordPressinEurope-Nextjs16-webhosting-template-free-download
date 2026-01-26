import { HostingLanding } from "@/components/templates/HostingLanding";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import {
    TECH_LOGO_WORDPRESS,
    TECH_LOGO_CPANEL,
    TECH_LOGO_CLOUDLINUX
} from "@/lib/constants";
import { getServiceJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
    title: "Free Redis Hosting for WordPress | WPinEU",
    description: "Accelerate your WordPress site with Free Redis Object Caching. Improve database performance and reduce load times instantly.",
    keywords: ["free redis hosting", "wordpress redis cache", "object caching", "fast database"],
    alternates: {
        canonical: "https://wpineu.com/free-redis-hosting",
    },
    openGraph: {
        title: "Free Redis Hosting for WordPress | WPinEU",
        description: "Accelerate your WordPress site with Free Redis Object Caching.",
        url: "https://wpineu.com/free-redis-hosting",
    }
};

const ServiceDescription = dynamic(() =>
    import("@/components/sections/ServiceDescription").then((mod) => mod.ServiceDescription)
);

const jsonLd = getServiceJsonLd(
    "Free Redis Hosting",
    "Redis Object Caching integration for WordPress performance."
);

const redisFeatures = [
    {
        iconName: "Zap",
        title: "In-Memory Caching",
        description: "Redis stores data in RAM, making it incredibly fast. Access your cached objects in microseconds instead of milliseconds."
    },
    {
        iconName: "Database",
        title: "Reduce DB Load",
        description: "Dramatically reduce database queries by caching frequently accessed data. Your MySQL database will thank you."
    },
    {
        iconName: "Gauge",
        title: "Faster Page Loads",
        description: "With Redis object caching, your WordPress pages load up to 10x faster, especially on high-traffic sites."
    },
    {
        iconName: "TrendingUp",
        title: "Better Scalability",
        description: "Handle more concurrent visitors without slowing down. Redis helps your site scale effortlessly as traffic grows."
    }
];

const techLogos = [
    TECH_LOGO_WORDPRESS,
    TECH_LOGO_CPANEL,
    TECH_LOGO_CLOUDLINUX,
];

export default function FreeRedisHosting() {
    return (
        <>
            <JsonLd data={jsonLd} />
            <HostingLanding
                heroTitle={
                    <>
                        Turbocharged with <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Redis Cache</span>
                    </>
                }
                heroSubtitle="Unlock the full potential of your WordPress site with Redis Object Caching. Lightning-fast database queries for free."
                breadcrumbs={[
                    { label: "Free Redis Hosting", href: "/free-redis-hosting" }
                ]}
            >
                <ServiceDescription
                    title="What is Redis Object Caching?"
                    subtitle="The Secret to Lightning-Fast WordPress"
                    description="Redis is an advanced in-memory data structure store that acts as a database cache for your WordPress site. Instead of querying your MySQL database for every request, Redis stores frequently accessed data in ultra-fast RAM. This means your WordPress site can retrieve data in microseconds rather than milliseconds, resulting in dramatically faster page loads and better user experience. Our free hosting includes Redis pre-configured and ready to use."
                    features={redisFeatures}
                    techLogos={techLogos}
                />
            </HostingLanding>
        </>
    );
}
