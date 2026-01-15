import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-9xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-400 mb-8">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
        Page Not Found
      </h2>
      <p className="text-lg text-slate-400 mb-10 max-w-lg">
        Oops! The page you are looking for seems to have wandered off into the digital void.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-1"
        >
          <Home size={20} />
          Back to Home
        </Link>
        <Link
          href="/support"
          className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-1 border border-slate-700"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}
