import { HostingLanding } from "@/components/templates/HostingLanding";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import {
    TECH_LOGO_CPANEL,
    TECH_LOGO_WORDPRESS,
    TECH_LOGO_SOFTACULOUS,
    TECH_LOGO_CLOUDLINUX
} from "@/lib/constants";
import { getServiceJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
    title: "Free cPanel Hosting | WPinEU",
    description: "Get free cPanel hosting with full control over your website. Industry-leading control panel for managing your WordPress hosting.",
    keywords: ["free cpanel hosting", "cpanel control panel", "web hosting cpanel", "free hosting control panel"],
    alternates: {
        canonical: "https://wpineu.com/free-cpanel-hosting",
    },
    openGraph: {
        title: "Free cPanel Hosting | WPinEU",
        description: "Get free cPanel hosting with full control over your website.",
        url: "https://wpineu.com/free-cpanel-hosting",
    }
};

const ServiceDescription = dynamic(() =>
    import("@/components/sections/ServiceDescription").then((mod) => mod.ServiceDescription)
);

const jsonLd = getServiceJsonLd(
    "Free cPanel Hosting",
    "Free hosting with cPanel control panel for easy website management."
);

const cpanelFeatures = [
    {
        iconName: "LayoutDashboard",
        title: "Intuitive Interface",
        description: "cPanel's user-friendly interface makes managing your hosting simple. No technical expertise required to get started."
    },
    {
        iconName: "Mail",
        title: "Email Management",
        description: "Create unlimited email accounts, forwarders, and autoresponders. Full webmail access included with Roundcube and Horde."
    },
    {
        iconName: "Database",
        title: "Database Control",
        description: "Manage MySQL databases with phpMyAdmin. Create, edit, and optimize databases with ease through the intuitive interface."
    },
    {
        iconName: "FileText",
        title: "File Manager",
        description: "Upload, edit, and manage files directly in your browser. No FTP client needed - everything is built into cPanel."
    }
];

const techLogos = [
    TECH_LOGO_CPANEL,
    TECH_LOGO_WORDPRESS,
    TECH_LOGO_SOFTACULOUS,
    TECH_LOGO_CLOUDLINUX,
];

export default function FreeCpanelHosting() {
    return (
        <>
            <JsonLd data={jsonLd} />
            <HostingLanding
                heroTitle={
                    <>
                        Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">cPanel</span> Hosting
                    </>
                }
                heroSubtitle="Get the world's most popular hosting control panel completely free. Manage your website with ease using cPanel's powerful features."
                breadcrumbs={[
                    { label: "Free cPanel Hosting", href: "/free-cpanel-hosting" }
                ]}
            >
                <ServiceDescription
                    title="Why cPanel is the Industry Standard"
                    subtitle="The Most Trusted Control Panel Worldwide"
                    description="cPanel has been the gold standard in web hosting control panels for over two decades. Used by millions of websites worldwide, cPanel provides an intuitive graphical interface that makes complex hosting tasks simple. Whether you're managing email accounts, databases, domains, or files, cPanel puts powerful tools at your fingertips. Our free hosting includes the full cPanel experience with all features unlocked - no limitations, no restrictions. You get the same professional-grade control panel that powers enterprise hosting environments."
                    features={cpanelFeatures}
                    techLogos={techLogos}
                />
            </HostingLanding>
        </>
    );
}
