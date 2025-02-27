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
      <div className="flex justify-center pt-20 pb-10 text-center sm:justify-start sm:pl-10">
        <p className="text-2xl font-medium">Novedades</p>
        <p className="text-2xl font-light mx-2">|</p>
        <p className="text-2xl font-light">Outfits</p>
      </div>
      <Carousel className="w-full select-none">
        <CarouselContent className="">
          {outfits.map((item: OutfitI) => (
            <Outfit key={item.id} outfit={item} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-5 sm:left-10" />
        <CarouselNext className="right-5 sm:right-10" />
        <Pagination totalSlides={outfits.length} />
      </Carousel>
    </div>
  );
}
