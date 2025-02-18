import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export default function DetailsSkeleton() {
  return (
    <div className="sticky top-20">
      <Skeleton className="h-6 w-48 bg-gray-200 rounded-md mb-2" />
      <div className="mb-6">
        <Skeleton className="h-5 w-24 bg-gray-200 rounded-md mb-1" />
        <Skeleton className="h-4 w-36 bg-gray-200 rounded-md" />
      </div>
      <div className="mb-6">
        <Skeleton className="h-4 w-20 bg-gray-200 rounded-md mb-2" />
        <Skeleton className="h-[6rem] w-16 bg-gray-200 rounded-md" />
      </div>
      <div className="mb-6">
        <Skeleton className="h-4 w-20 bg-gray-200 rounded-md mb-2" />
        <div className="flex gap-2">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-12 w-12 bg-gray-200 rounded-md" />
          ))}
        </div>
      </div>
      <div className="mb-6">
        <Skeleton className="h-5 w-16 bg-gray-200 rounded-md" />
      </div>
      <div className="mb-6">
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-12 w-36 bg-gray-200 rounded-md" />
          <Skeleton className="h-12 flex-1 bg-gray-200 rounded-md" />
        </div>
      </div>
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <Skeleton className="h-4 w-40 bg-gray-200 rounded-md mb-2" />
            <Skeleton className="h-4 w-full bg-gray-200 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
