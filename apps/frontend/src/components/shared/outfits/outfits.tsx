import request from '@/services/request';
import React from 'react';
import Outfit from './components/outfit/outfit';
import { CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Carousel } from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

export default async function Outfits({}: Props) {
  const outfits: any = await request({
    method: 'GET',
    url: '/outfits'
  });

  console.log(outfits.data);

  return (
    <div>
      <Carousel
        opts={{
          align: 'center'
        }}
        // className="w-[600px]"
      >
        <CarouselContent>
          {outfits.data.map((item: any, index: any) => (
            <CarouselItem
              key={item.id}
              className="flex justify-center items-center"
            >
              <Image
                src={item.imageUrl}
                alt={`Outfit inspiration ${index + 1}`}
                width={600}
                height={900}
                className="aspect-[2/3] object-cover"
              />
              <div className="w-72 space-y-4 ml-[-5rem]">
                {item.products.map((product: any) => (
                  <Link
                    key={product.id}
                    href={`/productos/${product.id}`}
                    className="flex items-center gap-4 bg-white p-2 hover:bg-neutral-50"
                  >
                    <div className="relative h-16 w-16 flex-shrink-0 bg-neutral-100">
                      <Image
                        src={product.imageUrls[0]}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{product.title}</h3>
                      {product.price && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">
                            ${product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-neutral-400 line-through">
                              ${product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-opacity ${
                    currentSlide === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))} */}
        {/* </div> */}
      </Carousel>
    </div>
  );
}