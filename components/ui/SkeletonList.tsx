import { memo } from "react";
import { Skeleton } from "@/components/ui/Skeleton";

interface SkeletonListProps {
  count: number;
  className?: string;
}

export const SkeletonList = memo(function SkeletonList({ count, className }: SkeletonListProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        // Optimization: Pass aria-hidden to prevent repetitive screen reader announcements
        <Skeleton key={i} className={className} aria-hidden="true" />
      ))}
      <span className="sr-only" role="status">Loading {count} items...</span>
    </>
  );
});
