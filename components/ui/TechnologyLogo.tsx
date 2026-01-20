import Image from "next/image";
import { memo } from "react";

export interface Technology {
    name: string;
    logo: string | null;
    width: number;
    height: number;
}

interface TechnologyLogoProps {
    tech: Technology;
}

/**
 * Renders a technology logo or name.
 * Uses memoization to prevent unnecessary re-renders.
 */
export const TechnologyLogo = memo(function TechnologyLogo({ tech }: TechnologyLogoProps) {
    return (
        <div className="group flex items-center justify-center">
            {tech.logo ? (
                <div className="relative h-10 md:h-12 w-auto">
                        <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={tech.width}
                        height={tech.height}
                        sizes="(max-width: 768px) 100px, 150px"
                        className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                </div>
            ) : (
                <span className="text-lg md:text-xl font-bold text-slate-400 hover:text-primary transition-colors cursor-default">
                    {tech.name}
                </span>
            )}
        </div>
    );
});
