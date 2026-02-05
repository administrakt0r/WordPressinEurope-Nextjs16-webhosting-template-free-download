import { Skeleton } from "@/components/ui/Skeleton";

interface SkeletonListProps {
  count: number;
  className?: string;
}

export function SkeletonList({ count, className }: SkeletonListProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className={className} />
      ))}
    </>
  );
}
