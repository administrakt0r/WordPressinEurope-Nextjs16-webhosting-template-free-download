import { EXTERNAL_LINKS } from "@/lib/links";

/**
 * Main navigation links for the Navbar.
 */
export const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Support", href: "/support" },
    { name: "Blog", href: EXTERNAL_LINKS.BLOG },
    { name: "Uptime", href: EXTERNAL_LINKS.UPTIME },
    { name: "Clients", href: EXTERNAL_LINKS.CLIENT_PORTAL },
] as const;

/**
 * Hosting services links for the Footer.
 */
export const HOSTING_SERVICES = [
    { label: "Free WordPress Hosting", href: "/free-wordpress-hosting" },
    { label: "Free Web Hosting", href: "/free-web-hosting" },
    { label: "Free LiteSpeed Hosting", href: "/free-litespeed-hosting" },
    { label: "Free cPanel Hosting", href: "/free-cpanel-hosting" },
    { label: "Free Redis Hosting", href: "/free-redis-hosting" },
    { label: "Free SSD Hosting", href: "/free-ssd-hosting" },
    { label: "Free Europe Hosting", href: "/free-europe-hosting" },
] as const;

/**
 * Resource links for the Footer.
 */
export const RESOURCES = [
    { label: "Learning Portal", href: EXTERNAL_LINKS.LEARNING_PORTAL },
    { label: "Clients Zone", href: EXTERNAL_LINKS.CLIENT_PORTAL },
    { label: "Order Free Hosting", href: EXTERNAL_LINKS.ORDER_FREE_HOSTING },
    { label: "Uptime Status", href: EXTERNAL_LINKS.UPTIME },
    { label: "About Us", href: EXTERNAL_LINKS.ABOUT },
] as const;

/**
 * Legal and policy links for the Footer.
 */
export const LEGAL_LINKS = [
    { label: "Privacy Policy", href: EXTERNAL_LINKS.PRIVACY_POLICY },
    { label: "Terms of Service", href: EXTERNAL_LINKS.TERMS_SERVICE },
    { label: "Service Level Agreement", href: EXTERNAL_LINKS.SLA },
    { label: "Report Abuse", href: EXTERNAL_LINKS.REPORT_ABUSE },
] as const;
