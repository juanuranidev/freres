import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export default function ProductCardSkeleton() {
  return (
    <div>
      {/* Image skeleton */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Skeleton className="h-full w-full" />
      </div>

      {/* Content skeleton */}
      <div className="mt-2 space-y-1">
        {/* Title skeleton */}
        <Skeleton className="h-4 w-3/4" />
        {/* Price skeleton */}
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
}
