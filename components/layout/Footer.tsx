import Link from "next/link";
import { Server, Mail, Heart } from "lucide-react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ObfuscatedMailto } from "@/components/ui/ObfuscatedMailto";
import { CopyButton } from "@/components/ui/CopyButton";
import { HOSTING_SERVICES, RESOURCES, LEGAL_LINKS } from "@/lib/navigation";

export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg" aria-label="WPinEU Home">
                            <div className="bg-primary text-white p-2 rounded-lg">
                                <Server size={20} aria-hidden="true" />
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
                            <Mail size={16} aria-hidden="true" />
                            <ObfuscatedMailto
                                email="support@wpineu.com"
                                className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:text-primary focus-visible:underline rounded-sm"
                            />
                            <CopyButton text="support@wpineu.com" ariaLabel="Copy support email" />
                        </div>
                    </div>

                    {/* Hosting Services */}
                    <div>
                        <h3 className="font-bold font-heading text-foreground mb-4">Hosting Services</h3>
                        <ul className="space-y-2">
                            {HOSTING_SERVICES.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:text-primary focus-visible:underline rounded-sm">
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
                            {RESOURCES.map((item) => (
                                <li key={item.label}>
                                    <ExternalLink
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {item.label}
                                    </ExternalLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal & Policies */}
                    <div>
                        <h3 className="font-bold font-heading text-foreground mb-4">Legal & Policies</h3>
                        <ul className="space-y-2">
                            {LEGAL_LINKS.map((item) => (
                                <li key={item.label}>
                                    <ExternalLink
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {item.label}
                                    </ExternalLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        Copyright © 2025 WPinEU. All rights reserved. WPinEU is not part of WordPress.com or WordPress.org
                    </p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground group cursor-default">
                        <span>Made with</span>
                        <span className="sr-only">love</span>
                        <Heart
                            size={14}
                            className="text-red-500 fill-red-500 group-hover:scale-125 transition-transform duration-300 origin-center"
                            aria-hidden="true"
                        />
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
