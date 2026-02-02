"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In a real production app, you would log this to Sentry or similar
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[50vh] px-4 text-center overflow-hidden py-20">
       <BackgroundEffects variant="error" />

      <div
        className="relative z-10 bg-background/50 backdrop-blur-sm p-8 rounded-3xl border border-red-900/20 shadow-xl max-w-md w-full"
        role="alert"
        aria-live="assertive"
      >
        <div className="bg-red-500/10 p-4 rounded-full mb-6 text-red-500 w-fit mx-auto">
            <AlertTriangle size={48} aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-bold mb-3 text-foreground">Something went wrong!</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
            We apologize for the inconvenience. An unexpected error has occurred while loading this page.
        </p>
        <button
            onClick={() => reset()}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
            <RefreshCcw size={18} aria-hidden="true" />
            Try again
        </button>
      </div>
    </div>
  );
}
