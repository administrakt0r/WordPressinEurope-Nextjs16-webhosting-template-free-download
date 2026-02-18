import { memo } from "react";
import Link from "next/link";
import { Server } from "lucide-react";

// Optimization: Memoized Logo to avoid re-renders on scroll
export const NavbarLogo = memo(function NavbarLogo({ pathname }: { pathname?: string | null }) {
    return (
        <Link
            href="/"
            className="flex items-center gap-2 group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="WPinEU Home"
            aria-current={pathname === "/" ? "page" : undefined}
        >
            <div className="bg-primary text-white p-2 rounded-lg group-hover:scale-105 transition-transform duration-200">
                <Server size={24} aria-hidden="true" />
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-bold font-heading leading-none text-foreground">
                    WPinEU
                </span>
                <span className="text-[10px] text-muted-foreground font-medium tracking-wider">
                    WORDPRESS IN EUROPE
                </span>
            </div>
        </Link>
    );
});
