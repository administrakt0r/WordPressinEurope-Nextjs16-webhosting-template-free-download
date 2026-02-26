import { memo } from "react";
import Link from "next/link";
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

const LINK_STYLES = "text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm";

export const FooterColumn = memo(function FooterColumn({ title, items, isExternal = false }: FooterColumnProps) {
    return (
        <div>
            <h3 className="font-bold font-heading text-foreground mb-4">{title}</h3>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li key={item.label}>
                        {isExternal ? (
                            <ExternalLink
                                href={item.href}
                                className={LINK_STYLES}
                            >
                                {item.label}
                            </ExternalLink>
                        ) : (
                            <Link href={item.href} className={LINK_STYLES}>
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
});
