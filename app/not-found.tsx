import Link from 'next/link';
import { Home, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 text-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] right-[20%] w-[40%] h-[40%] bg-yellow-500/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="relative z-10">
        <h1
          className="text-9xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-400 mb-8 select-none"
          aria-label="Error 404"
        >
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
          Oops! The page you are looking for seems to have wandered off into the digital void.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Home size={20} aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            href="/support"
            className="inline-flex items-center justify-center gap-2 bg-background hover:bg-muted text-foreground px-8 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-1 border border-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <HelpCircle size={20} aria-hidden="true" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
