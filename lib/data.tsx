import {
    Shield,
    Zap,
    Globe,
    Download,
    Database,
    LayoutDashboard,
} from "lucide-react";
import {
    TECH_LOGO_WORDPRESS,
    TECH_LOGO_CPANEL,
    TECH_LOGO_LITESPEED,
    TECH_LOGO_CLOUDLINUX,
    TECH_LOGO_SOFTACULOUS
} from "@/lib/constants";

export const FAQS = [
    {
        question: "How can you offer free WordPress hosting?",
        answer: "Our free hosting is possible through efficient resource management and a powerful software stack. We use CloudLinux OS to isolate accounts for stability and LiteSpeed web server for server-level caching, which dramatically reduces server load. This allows us to host thousands of sites on minimal hardware."
    },
    {
        question: "How do you handle large amounts of traffic with minimal hardware?",
        answer: "We utilize LiteSpeed Caching which reduces CPU usage significantly, and CloudLinux Resource Isolation to ensure fair resource usage. This combination allows for high performance even with high traffic."
    },
    {
        question: "What are the technical specifications?",
        answer: "You get 1 GB SSD disk space (RAID 10 NVMe), 100 GB Bandwidth (up to 3GB/s speed), 2 Addon domains, 2 MySQL databases, 2 email addresses, and FREE Auto SSL Certificates."
    },
    {
        question: "Is there really no catch or hidden costs?",
        answer: "There is absolutely no catch. Our service is 100% free, forever. We do not display ads on your site, and there are no hidden fees. We are supported by donations and our educational mission."
    },
    {
        question: "Who is eligible for free hosting?",
        answer: "Our service is open to everyone, but we specifically target residents of the European Union to foster digital growth within the region. However, anyone can apply."
    },
    {
        question: "Can I use my own domain name?",
        answer: "Yes, you can use your own custom domain name. You can also use our free subdomains if you don't have one yet."
    }
];

export const PRICING_FEATURES = [
    "1 GB SSD disk space (RAID 10 NVMe)",
    "100 GB Bandwidth (up to 3GB/s speed)",
    "2 Addon domains",
    "2 MySQL databases",
    "2 email addresses",
    "FREE Auto SSL Certificates",
    "Latest cPanel with 150+ 1-click apps",
    "NO advertisements or hidden fees"
];

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
