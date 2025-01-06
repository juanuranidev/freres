import React from 'react';
import ImagesSkeleton from '../content/components/images/components/images-skeleton/images-skeleton';

export default function Skeleton() {
  return (
    <div className="w-full flex items-start gap-8">
      <div className="w-[70%]">
        <ImagesSkeleton />
      </div>
      <div className="w-[30%]">Loading details...</div>
    </div>
  );
}
