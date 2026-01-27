import { HostingLanding } from "@/components/templates/HostingLanding";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Globe, ShieldCheck, Server, MapPin, Scale, Lock } from "lucide-react";

export const metadata: Metadata = {
    title: "Free Europe Hosting | WPinEU",
    description: "Free Europe Hosting with low latency for European visitors. GDPR compliant and locally optimized.",
    keywords: ["Free Europe Hosting", "EU Hosting", "GDPR Compliant Hosting", "WPinEU"],
};

const ServiceDescription = dynamic(() =>
    import("@/components/sections/ServiceDescription").then((mod) => mod.ServiceDescription)
);

const features = [
    {
        icon: MapPin,
        title: "Strategic Location",
        description: "Our data centers are located in Luxembourg and Germany, providing excellent connectivity across all of Europe."
    },
    {
        icon: Scale,
        title: "GDPR Compliance",
        description: "We adhere strictly to EU data protection laws (GDPR), ensuring that your data and your users' data is handled legally and securely."
    },
    {
        icon: Globe,
        title: "Low Latency",
        description: "Minimize network hops and latency for your European audience, resulting in snappier page loads and better user retention."
    },
    {
        icon: ShieldCheck,
        title: "Data Sovereignty",
        description: "Keep your data within the European Union. We guarantee that your data stays on our EU-based infrastructure."
    },
    {
        icon: Server,
        title: "Tier 3+ Data Centers",
        description: "Our infrastructure is housed in state-of-the-art Tier 3+ data centers with redundant power, cooling, and network connections."
    },
    {
        icon: Lock,
        title: "Secure Infrastructure",
        description: "Physical security, biometric access controls, and 24/7 surveillance ensure that our servers are physically protected at all times."
    }
];

export default function FreeEuropeHosting() {
    return (
        <HostingLanding
            heroTitle={
                <>
                    Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">Free Europe Hosting</span>
                </>
            }
            heroSubtitle="Host your site closer to your audience. Our European data centers ensure low latency, high speeds, and full GDPR compliance."
        >
            <ServiceDescription
                title="Hosted Locally, Served Globally"
                description="Location matters. Hosting your website in Europe ensures the best possible experience for your European visitors."
                features={features}
                cols={3}
            />
        </HostingLanding>
    );
}
