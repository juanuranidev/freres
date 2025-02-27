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
    <CarouselItem
      key={outfit.id}
      className="flex flex-col md:flex-row justify-center items-center md:gap-0"
    >
      <Image
        width={400}
        height={600}
        src={outfit.imageUrl}
        alt={outfit.imageUrl}
        className="aspect-[2/3] object-cover w-full max-w-[300px] md:max-w-[400px]"
      />
      <div className="w-full max-w-[300px] mt-[-2rem] md:w-80 shadow-[0_0_15px_rgba(0,0,0,0.1)] md:ml-[-3rem]">
        {outfit.products.map((product: any, index: number) => (
          <React.Fragment key={product.id}>
            <div className="h-[1px] bg-neutral-200" />
            <OutfitProduct product={product} />
            <div className="h-[1px] bg-neutral-200" />
          </React.Fragment>
        ))}
      </div>
    </CarouselItem>
  );
}
