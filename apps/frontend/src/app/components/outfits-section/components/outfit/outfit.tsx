import Image from 'next/image';
import React from 'react';
import { OutfitI } from '@/lib/interfaces/outfit/outfit.interfaces';
import OutfitProduct from '../product/product';
import { CarouselItem } from '@/components/ui/carousel';

interface OutfitProps {
  outfit: OutfitI;
}

export default function Outfit({ outfit }: OutfitProps) {
  return (
    <CarouselItem key={outfit.id} className="flex justify-center items-center">
      <Image
        width={400}
        height={600}
        src={outfit.imageUrl}
        alt={outfit.imageUrl}
        className="aspect-[2/3] object-cover"
      />
      <div className="w-80 shadow-[0_0_15px_rgba(0,0,0,0.1)] ml-[-3rem]">
        {outfit.products.map((product: any, index: number) => (
          <React.Fragment key={product.id}>
            {index === 1 && <div className="h-[1px] bg-neutral-200" />}
            <OutfitProduct product={product} />
            {index === 1 && <div className="h-[1px] bg-neutral-200" />}
          </React.Fragment>
        ))}
      </div>
    </CarouselItem>
  );
}
