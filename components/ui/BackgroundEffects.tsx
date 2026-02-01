import { cn } from "@/lib/utils";

interface BackgroundEffectsProps {
  className?: string;
  variant?: "default" | "error" | "support";
}

export function BackgroundEffects({ className, variant = "default" }: BackgroundEffectsProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)} aria-hidden="true">
      {variant === "default" && (
        <>
          <div
            className="absolute top-[20%] left-[20%] w-[40%] h-[40%]"
            style={{ background: 'radial-gradient(closest-side, rgba(37, 99, 235, 0.1), transparent)' }}
          />
          <div
            className="absolute bottom-[20%] right-[20%] w-[40%] h-[40%]"
            style={{ background: 'radial-gradient(closest-side, rgba(234, 179, 8, 0.05), transparent)' }}
          />
        </>
      )}
      {variant === "error" && (
        <div
          className="absolute top-[20%] right-[20%] w-[40%] h-[40%]"
          style={{ background: 'radial-gradient(closest-side, rgba(220, 38, 38, 0.05), transparent)' }}
        />
      )}
      {variant === "support" && (
        <>
            <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-blue-600/20 rounded-full blur-[120px]" />
            <div className="absolute top-[20%] -left-[10%] w-[60%] h-[60%] bg-yellow-500/10 rounded-full blur-[100px]" />
        </>
      )}
      <div className="absolute inset-0 bg-grid-pattern" />
    </div>
  );
}
