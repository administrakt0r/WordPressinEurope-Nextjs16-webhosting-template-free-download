import Link from "next/link";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="bg-blue-500/10 p-6 rounded-full mb-6 text-blue-500">
        <FileQuestion size={64} aria-hidden="true" />
      </div>
      <h1 className="text-4xl font-bold font-heading mb-4 text-white">Page Not Found</h1>
      <p className="text-xl text-slate-400 mb-8 max-w-lg">
        Sorry, we couldn&apos;t find the page you were looking for. It might have been moved or doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        <ArrowLeft size={20} aria-hidden="true" />
        Back to Home
      </Link>
    </div>
  );
}
