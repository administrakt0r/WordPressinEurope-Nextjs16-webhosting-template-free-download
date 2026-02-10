import Image from "next/image";
import { memo } from "react";

export interface TechnologyLogoProps {
    name: string;
    /** URL of the logo image */
    logo?: string;
    /** Required if logo is provided */
    width?: number;
    /** Required if logo is provided */
    height?: number;
    /** Set to true for LCP images */
    priority?: boolean;
}

export const TechnologyLogo = memo(function TechnologyLogo({ name, logo, width, height, priority }: TechnologyLogoProps) {
    return (
        <div className="group flex items-center justify-center" title={name}>
            {logo && width && height ? (
                <div
                    className="relative h-10 md:h-12 w-auto"
                    // ⚡ Performance: Enforce aspect ratio to prevent CLS while image loads
                    style={{ aspectRatio: `${width} / ${height}` }}
                >
                    <Image
                        src={logo}
                        alt={name}
                        width={width}
                        height={height}
                        priority={priority}
                        // ⚡ Performance: Optimized sizes to handle wide logos (like cPanel) correctly
                        // Previous 100px/150px was too small for ~225px wide logos on high DPI
                        sizes="(max-width: 768px) 200px, 300px"
                        // ⚡ Performance: SVG images (like logos) should be unoptimized to preserve vector quality
                        className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                        unoptimized={logo.endsWith('.svg')}
                    />
                </div>
            ) : (
                <span className="text-lg md:text-xl font-bold text-slate-400 hover:text-primary transition-colors cursor-default">
                    {name}
                </span>
            )}
        </div>
    );
});
