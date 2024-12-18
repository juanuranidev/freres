'use client';

import React, { useEffect, useState } from 'react';
import { useCarousel } from '@/components/ui/carousel';

interface PaginationProps {
  totalSlides: number;
}

export default function Pagination({ totalSlides }: PaginationProps) {
  const carousel = useCarousel();
  const [current, setCurrent] = useState<number>(0);

  const handleSelect = (): void => {
    setCurrent(carousel?.api?.selectedScrollSnap() ?? 0);
  };

  useEffect(() => {
    if (!carousel) return;

    carousel.api?.on('select', handleSelect);
    return () => {
      carousel.api?.off('select', handleSelect);
    };
  }, [carousel]);

  return (
    <div className="flex justify-center gap-2 mt-10">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-colors ${
            current === index ? 'bg-gray-800' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}
