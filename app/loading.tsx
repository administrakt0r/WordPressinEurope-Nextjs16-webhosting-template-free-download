import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col h-[50vh] w-full items-center justify-center gap-4" role="status" aria-label="Loading content">
      <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
      <span className="text-xl font-bold font-heading text-white tracking-wider">WPinEU</span>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
