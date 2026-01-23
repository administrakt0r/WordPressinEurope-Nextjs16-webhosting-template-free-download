import { EXTERNAL_LINKS } from "./links";

export interface NavLink {
    label: string;
    href: string;
}

export const NAV_LINKS: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Support", href: "/support" },
    { label: "Blog", href: EXTERNAL_LINKS.BLOG },
    { label: "Uptime", href: EXTERNAL_LINKS.UPTIME },
    { label: "Clients", href: EXTERNAL_LINKS.CLIENT_PORTAL },
];

export const HOSTING_SERVICES: NavLink[] = [
    { label: "Free WordPress Hosting", href: "/free-wordpress-hosting" },
    { label: "Free Web Hosting", href: "/free-web-hosting" },
    { label: "Free LiteSpeed Hosting", href: "/free-litespeed-hosting" },
    { label: "Free cPanel Hosting", href: "/free-cpanel-hosting" },
    { label: "Free Redis Hosting", href: "/free-redis-hosting" },
    { label: "Free SSD Hosting", href: "/free-ssd-hosting" },
    { label: "Free Europe Hosting", href: "/free-europe-hosting" },
];

export const RESOURCES: NavLink[] = [
    { label: "Learning Portal", href: EXTERNAL_LINKS.LEARNING_PORTAL },
    { label: "Clients Zone", href: EXTERNAL_LINKS.CLIENT_PORTAL },
    { label: "Order Free Hosting", href: EXTERNAL_LINKS.ORDER_FREE_HOSTING },
    { label: "Uptime Status", href: EXTERNAL_LINKS.UPTIME },
    { label: "About Us", href: EXTERNAL_LINKS.ABOUT },
];

export const LEGAL_LINKS: NavLink[] = [
    { label: "Privacy Policy", href: EXTERNAL_LINKS.PRIVACY_POLICY },
    { label: "Terms of Service", href: EXTERNAL_LINKS.TERMS_SERVICE },
    { label: "Service Level Agreement", href: EXTERNAL_LINKS.SLA },
    { label: "Report Abuse", href: EXTERNAL_LINKS.REPORT_ABUSE },
];
