import React from 'react';
import ImagesSkeleton from '@/app/product/[slug]/components/skeleton/components/images-skeleton/images-skeleton';
import DetailsSkeleton from '@/app/product/[slug]/components/skeleton/components/details-skeleton/details-skeleton';

export default function Skeleton() {
  return (
    <div className="w-full flex items-start gap-8">
      <div className="w-[70%]">
        <ImagesSkeleton />
      </div>
      <div className="w-[30%]">
        <DetailsSkeleton />
      </div>
    </div>
  );
}
