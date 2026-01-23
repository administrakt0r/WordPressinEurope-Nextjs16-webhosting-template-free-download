import Image from "next/image";

export interface TechnologyLogoProps {
    name: string;
    logo?: string;
    width?: number;
    height?: number;
}

export function TechnologyLogo({ name, logo, width, height }: TechnologyLogoProps) {
    return (
        <div className="group flex items-center justify-center">
            {logo && width && height ? (
                <div className="relative h-10 md:h-12 w-auto">
                        <Image
                        src={logo}
                        alt={name}
                        width={width}
                        height={height}
                        // ⚡ Performance: Optimized sizes to handle wide logos (like cPanel) correctly
                        // Previous 100px/150px was too small for ~225px wide logos on high DPI
                        sizes="(max-width: 768px) 200px, 300px"
                        className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                        unoptimized={logo?.endsWith('.svg')}
                    />
                </div>
            ) : (
                <span className="text-lg md:text-xl font-bold text-slate-400 hover:text-primary transition-colors cursor-default">
                    {name}
                </span>
            )}
        </div>
    );
}
