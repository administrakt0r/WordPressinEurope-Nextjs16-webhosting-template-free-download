import {
    Shield,
    Zap,
    Globe,
    Download,
    Database,
    LayoutDashboard
} from "lucide-react";
import {
    TECH_LOGO_WORDPRESS,
    TECH_LOGO_CPANEL,
    TECH_LOGO_LITESPEED,
    TECH_LOGO_CLOUDLINUX,
    TECH_LOGO_SOFTACULOUS
} from "@/lib/constants";

export const FEATURES_LIST = [
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

export const TECHNOLOGIES_LIST = [
    TECH_LOGO_WORDPRESS,
    TECH_LOGO_CPANEL,
    TECH_LOGO_LITESPEED,
    TECH_LOGO_CLOUDLINUX,
    TECH_LOGO_SOFTACULOUS,
];
