"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function Error({
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
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
      <div className="bg-red-500/10 p-4 rounded-full mb-4 text-red-500">
        <AlertTriangle size={48} aria-hidden="true" />
      </div>
      <h2 className="text-2xl font-bold mb-2 text-white">Something went wrong!</h2>
      <p className="text-slate-400 mb-6 max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        Try again
      </button>
    </div>
  );
}
