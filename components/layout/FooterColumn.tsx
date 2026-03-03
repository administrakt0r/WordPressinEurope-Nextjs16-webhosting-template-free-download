"use client";

import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ExternalLink } from "@/components/ui/ExternalLink";

interface FooterLinkItem {
    label: string;
    href: string;
}

interface FooterColumnProps {
    title: string;
    items: readonly FooterLinkItem[];
    isExternal?: boolean;
}

const LINK_STYLES = "text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm block w-fit";

export const FooterColumn = memo(function FooterColumn({ title, items, isExternal = false }: FooterColumnProps) {
    const pathname = usePathname();

    return (
        <div>
            <h3 className="font-bold font-heading text-foreground mb-4">{title}</h3>
            <ul className="space-y-2">
                {items.map((item) => {
                    const isActive = !isExternal && pathname === item.href;

                    return (
                        <li key={item.label}>
                            {isExternal ? (
                                <ExternalLink
                                    href={item.href}
                                    className={cn(LINK_STYLES, "text-muted-foreground hover:text-primary")}
                                >
                                    {item.label}
                                </ExternalLink>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={cn(
                                        LINK_STYLES,
                                        isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                                    )}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
});
