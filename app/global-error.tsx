"use client";

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
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-slate-950 text-slate-50 font-sans`}>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
             <div className="max-w-md space-y-6">
                <h1 className="text-4xl font-bold font-heading text-red-500">Critical Error</h1>
                <p className="text-lg text-slate-300">
                    A critical error occurred and the application could not run.
                </p>
                {/* Only show error message in development */}
                {process.env.NODE_ENV === 'development' && (
                    <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 text-left overflow-auto max-h-40">
                        <code className="text-sm text-red-400 font-mono">
                            {error.message || "Unknown error"}
                        </code>
                    </div>
                )}
                <button
                    onClick={() => reset()}
                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-all"
                >
                    Try Again
                </button>
            </div>
        </div>
      </body>
    </html>
  );
}
