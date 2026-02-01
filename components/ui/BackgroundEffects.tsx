import { memo } from "react";
import { cn } from "@/lib/utils";

interface BackgroundEffectsProps {
    /**
     * The variant of the background.
     * - 'default': Blue/Yellow/Dark Blue blobs + Noise + Grid (Used in Hero)
     * - 'error': Red/Yellow blobs + Grid (Used in Global Error)
     */
    variant?: "default" | "error";
    className?: string;
}

export const BackgroundEffects = memo(function BackgroundEffects({ variant = "default", className }: BackgroundEffectsProps) {
    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)} aria-hidden="true">
            {/* Gradient Orbs */}
            <div
                className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] gpu-accelerated"
                style={{
                    background: variant === "error"
                        ? 'radial-gradient(closest-side, rgba(220, 38, 38, 0.1), transparent)'
                        : 'radial-gradient(closest-side, rgba(37, 99, 235, 0.2), transparent)'
                }}
            />
            <div
                className="absolute top-[20%] -left-[10%] w-[60%] h-[60%] gpu-accelerated"
                style={{
                    background: variant === "error"
                         ? 'radial-gradient(closest-side, rgba(234, 179, 8, 0.05), transparent)'
                         : 'radial-gradient(closest-side, rgba(234, 179, 8, 0.1), transparent)'
                }}
            />
            {variant === "default" && (
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] gpu-accelerated"
                    style={{ background: 'radial-gradient(closest-side, rgba(30, 58, 138, 0.2), transparent)' }}
                />
            )}

            {/* Textures */}
            {variant === "default" && <div className="absolute inset-0 bg-noise opacity-20 gpu-accelerated" />}
            <div className={cn("absolute inset-0 bg-grid-pattern gpu-accelerated", variant === "error" && "opacity-20")} />
        </div>
    );
});
