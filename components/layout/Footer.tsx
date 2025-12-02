import Link from "next/link";
import { Server, Mail, Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-primary text-white p-2 rounded-lg">
                                <Server size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold font-heading leading-none text-foreground">
                                    WPinEU
                                </span>
                            </div>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            WordPress in Europe - A free WordPress hosting initiative providing high-quality hosting solutions for users across Europe.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail size={16} />
                            <a href="mailto:support@wpineu.com" className="hover:text-primary transition-colors">
                                support@wpineu.com
                            </a>
                        </div>
                    </div>

                    {/* Hosting Services */}
                    <div>
                        <h3 className="font-bold font-heading text-foreground mb-4">Hosting Services</h3>
                        <ul className="space-y-2">
                            {[
                                { label: "Free WordPress Hosting", href: "/free-wordpress-hosting" },
                                { label: "Free Web Hosting", href: "/free-web-hosting" },
                                { label: "Free LiteSpeed Hosting", href: "/free-litespeed-hosting" },
                                { label: "Free cPanel Hosting", href: "/free-cpanel-hosting" },
                                { label: "Free Redis Hosting", href: "/free-redis-hosting" },
                                { label: "Free SSD Hosting", href: "/free-ssd-hosting" },
                                { label: "Free Europe Hosting", href: "/free-europe-hosting" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources & Support */}
                    <div>
                        <h3 className="font-bold font-heading text-foreground mb-4">Resources & Support</h3>
                        <ul className="space-y-2">
                            {[
                                { label: "Learning Portal", href: "https://wp.wpineu.com/learning-portal" },
                                { label: "Clients Zone", href: "https://clients.wpineu.com" },
                                { label: "Order Free Hosting", href: "https://clients.wpineu.com/order/free-wordpress-hosting" },
                                { label: "Uptime Status", href: "https://uptime.wpineu.com/" },
                                { label: "About Us", href: "https://wp.wpineu.com/about-wpineu/" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal & Policies */}
                    <div>
                        <h3 className="font-bold font-heading text-foreground mb-4">Legal & Policies</h3>
                        <ul className="space-y-2">
                            {[
                                { label: "Privacy Policy", href: "https://wp.wpineu.com/privacy-policy" },
                                { label: "Terms of Service", href: "https://wp.wpineu.com/terms-of-service" },
                                { label: "Service Level Agreement", href: "https://wp.wpineu.com/service-level-agreement" },
                                { label: "Report Abuse", href: "https://wp.wpineu.com/report-abuse" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        Copyright © 2025 WPinEU. All rights reserved. WPinEU is not part of WordPress.com or WordPress.org
                    </p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <span>Made with</span>
                        <Heart size={14} className="text-red-500 fill-red-500" />
                        <span>in Zagreb, Croatia</span>
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <p className="text-xs text-slate-400">
                        Official domains: wpineu.com, wpin.eu, wpat.eu
                    </p>
                </div>
            </div>
        </footer>
    );
}
