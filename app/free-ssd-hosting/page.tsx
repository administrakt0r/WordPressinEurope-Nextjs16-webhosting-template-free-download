import { HostingLanding } from "@/components/templates/HostingLanding";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PRICE_MONTHLY_VALUE, PRICE_CURRENCY } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Free SSD NVMe Hosting in Europe | WPinEU",
    description: "Experience blazing fast load times with our Free SSD Hosting. 1GB NVMe SSD storage included for free. Enterprise-grade performance for your WordPress site.",
    keywords: ["free ssd hosting", "nvme hosting free", "fast wordpress hosting", "ssd storage"],
    alternates: {
        canonical: "https://wpineu.com/free-ssd-hosting",
    },
    openGraph: {
        title: "Free SSD NVMe Hosting in Europe | WPinEU",
        description: "Experience blazing fast load times with our Free SSD Hosting. 1GB NVMe SSD storage included for free.",
        url: "https://wpineu.com/free-ssd-hosting",
    }
};

const ServiceDescription = dynamic(() =>
    import("@/components/sections/ServiceDescription").then((mod) => mod.ServiceDescription)
);

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free SSD Hosting",
    "provider": {
        "@type": "Organization",
        "name": "WPinEU"
    },
    "description": "Enterprise-grade NVMe SSD storage for WordPress websites.",
    "offers": {
        "@type": "Offer",
        "price": PRICE_MONTHLY_VALUE,
        "priceCurrency": PRICE_CURRENCY
    }
};

const ssdFeatures = [
    {
        iconName: "Zap",
        title: "Lightning Fast",
        description: "NVMe SSDs are up to 10x faster than traditional SATA SSDs, delivering exceptional read/write speeds for your website."
    },
    {
        iconName: "HardDrive",
        title: "1GB NVMe Storage",
        description: "Get 1GB of premium NVMe SSD storage completely free. Perfect for WordPress sites, blogs, and small business websites."
    },
    {
        iconName: "Gauge",
        title: "Instant Load Times",
        description: "Reduce page load times dramatically. Your visitors will experience near-instant page loads thanks to NVMe technology."
    },
    {
        iconName: "Shield",
        title: "RAID 10 Protection",
        description: "Your data is protected with RAID 10 configuration, ensuring both performance and redundancy for maximum reliability."
    }
];

const techLogos = [
    { name: "WordPress", logo: "/wordpress-logo.svg", width: 540, height: 540 },
    { name: "cPanel", logo: "/cPanel.svg", width: 1136, height: 240 },
    { name: "CloudLinux", logo: "/cloudlinux.svg", width: 24, height: 24 },
];

export default function FreeSSDHosting() {
    return (
        <>
            <JsonLd data={jsonLd} />
            <HostingLanding
                heroTitle={
                    <>
                        Blazing Fast <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">SSD NVMe</span> Hosting
                    </>
                }
                heroSubtitle="Experience superior performance with our enterprise-grade NVMe SSD storage. Your website deserves the best speed, completely free."
            >
                <ServiceDescription
                    title="Why NVMe SSD Storage Matters"
                    subtitle="The Fastest Storage Technology Available"
                    description="NVMe (Non-Volatile Memory Express) SSDs represent the cutting edge of storage technology. Unlike traditional hard drives or even SATA SSDs, NVMe drives connect directly to your server's PCIe bus, eliminating bottlenecks and delivering unprecedented speed. This means your WordPress site loads faster, database queries execute instantly, and your visitors enjoy a seamless browsing experience."
                    features={ssdFeatures}
                    techLogos={techLogos}
                />
            </HostingLanding>
        </>
    );
}
