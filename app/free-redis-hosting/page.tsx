import { HostingLanding } from "@/components/templates/HostingLanding";
import { ServiceDescription } from "@/components/sections/ServiceDescription";
import { Metadata } from "next";

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

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free Redis Hosting",
    "provider": {
        "@type": "Organization",
        "name": "WPinEU"
    },
    "description": "Redis Object Caching integration for WordPress performance.",
    "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "EUR"
    }
};

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
    { name: "WordPress", logo: "/wordpress-logo.svg" },
    { name: "cPanel", logo: "/cPanel.svg" },
    { name: "CloudLinux", logo: "/cloudlinux.svg" },
];

export default function FreeRedisHosting() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HostingLanding
                title="Free Redis Hosting"
                description="Redis Object Caching for WordPress"
                heroTitle={
                    <>
                        Turbocharged with <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Redis Cache</span>
                    </>
                }
                heroSubtitle="Unlock the full potential of your WordPress site with Redis Object Caching. Lightning-fast database queries for free."
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
