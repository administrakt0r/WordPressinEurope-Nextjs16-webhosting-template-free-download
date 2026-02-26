import Link from "next/link";
import { Server, Mail, Heart } from "lucide-react";
import { ObfuscatedMailto } from "@/components/ui/ObfuscatedMailto";
import { CopyButton } from "@/components/ui/CopyButton";
import { HOSTING_SERVICES, RESOURCES, LEGAL_LINKS } from "@/lib/navigation";
import { getOffscreenOptimizations } from "@/lib/styles";
import { FooterColumn } from "./FooterColumn";

export function Footer() {
    return (
        <footer
            className="bg-slate-900 border-t border-slate-800 pt-16 pb-8"
            // ⚡ Performance: content-visibility skips rendering work when off-screen
            style={getOffscreenOptimizations("400px")}
        >
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
                                aria-label="Email Support"
                                className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
                            />
                            <CopyButton text="support@wpineu.com" ariaLabel="Copy support email" />
                        </div>
                    </div>

                    {/* Hosting Services */}
                    <FooterColumn
                        title="Hosting Services"
                        items={HOSTING_SERVICES}
                    />

                    {/* Resources & Support */}
                    <FooterColumn
                        title="Resources & Support"
                        items={RESOURCES}
                        isExternal
                    />

                    {/* Legal & Policies */}
                    <FooterColumn
                        title="Legal & Policies"
                        items={LEGAL_LINKS}
                        isExternal
                    />
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        Copyright © {new Date().getFullYear()} WPinEU. All rights reserved. WPinEU is not part of WordPress.com or WordPress.org
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
