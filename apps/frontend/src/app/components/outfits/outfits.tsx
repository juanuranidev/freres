import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import React from 'react';
import Outfit from './components/outfit/outfit';
import { OutfitI } from '@/lib/interfaces/outfit/outfit.interfaces';
import { readOutfitsService } from '@/services/outfit/outfit.services';
import Pagination from './components/pagination/pagination';

export default async function Outfits() {
  const outfits: OutfitI[] = await readOutfitsService();

  return (
    <div className="relative overflow-hidden pt-20">
      <div className="flex justify-start pl-10 pb-10">
        <p className="text-2xl font-medium">Inspiración</p>
        <p className="text-2xl font-light mx-2">|</p>
        <p className="text-2xl font-light"> Outfits</p>
      </div>
      <Carousel className="w-full select-none">
        <CarouselContent className="">
          {outfits.map((item: OutfitI) => (
            <Outfit key={item.id} outfit={item} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
        <Pagination totalSlides={outfits.length} />
      </Carousel>
    </div>
  );
}
