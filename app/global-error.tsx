"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
});

export default function GlobalError({
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
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-slate-950 text-slate-50 min-h-screen flex items-center justify-center`}>
        <div className="relative flex flex-col items-center justify-center px-4 text-center overflow-hidden w-full">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[20%] w-[40%] h-[40%] bg-red-600/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-grid-pattern" />
            </div>

            <div className="relative z-10 bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-red-900/20 shadow-xl max-w-md w-full">
                <div className="bg-red-500/10 p-4 rounded-full mb-6 text-red-500 w-fit mx-auto">
                    <AlertTriangle size={48} aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white font-heading">Critical Error</h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    A critical error occurred that prevented the application from loading.
                </p>
                <button
                    onClick={() => reset()}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                    <RefreshCcw size={18} aria-hidden="true" />
                    Try again
                </button>
            </div>
        </div>
      </body>
    </html>
  );
}
