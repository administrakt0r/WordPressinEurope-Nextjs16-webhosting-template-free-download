import { memo } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { ExternalLink } from "@/components/ui/ExternalLink";

// Optimization: Memoized DesktopNavLinks to avoid re-rendering links when Navbar state (isScrolled) changes.
// This isolates the list rendering from the scroll event updates.
export const DesktopNavLinks = memo(function DesktopNavLinks({ pathname }: { pathname: string | null }) {
    return (
        <div className="hidden md:flex items-center gap-8 bg-slate-800/50 px-8 py-2 rounded-full border border-white/20 backdrop-blur-sm shadow-sm" role="navigation" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => {
                const isActive =
                    pathname === link.href ||
                    (link.href !== "/" &&
                        pathname?.startsWith(`${link.href}/`) &&
                        !link.href.startsWith("http") &&
                        !link.href.startsWith("#"));

                if (link.href.startsWith("http")) {
                    return (
                        <ExternalLink
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-150 relative group focus-visible:outline-none focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:rounded-sm"
                        >
                            {link.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-150 w-0 group-hover:w-full"
                            )} />
                        </ExternalLink>
                    );
                }

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                            "text-sm font-medium transition-colors duration-150 relative group focus-visible:outline-none focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:rounded-sm",
                            isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                        )}
                    >
                        {link.name}
                        <span className={cn(
                            "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-150",
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                        )} />
                    </Link>
                );
            })}
        </div>
    );
});
