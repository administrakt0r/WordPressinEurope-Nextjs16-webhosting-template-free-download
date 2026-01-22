'use client';

import { useEffect } from 'react';
import { Inter, Outfit } from "next/font/google";
import { AlertTriangle, RotateCcw } from 'lucide-react';
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
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-slate-950 text-slate-50`}>
        <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-red-600/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-[20%] right-[20%] w-[40%] h-[40%] bg-yellow-500/5 rounded-full blur-[100px]" />
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          </div>

          <div className="relative z-10" role="alert" aria-live="assertive">
            <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-8">
              <AlertTriangle size={48} className="text-red-500" aria-hidden="true" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              Something went wrong!
            </h1>
            <p className="text-lg text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed">
              We apologize for the inconvenience. A critical error occurred.
              {error.digest && <span className="block mt-2 text-sm font-mono text-slate-500">Error ID: {error.digest}</span>}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => reset()}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 cursor-pointer"
              >
                <RotateCcw size={20} aria-hidden="true" />
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-1 border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 cursor-pointer"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
