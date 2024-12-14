'use server';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import ProductsList from '@/components/shared/products-list/products-list';
import Outfits from '@/components/shared/outfits/outfits';

// const carouselItems = [
//   {
//     id: 1,
//     image:
//       'https://freres.ar/wp-content/uploads/2024/10/FRERES-ESHOP-SS25_0091-1280x1920.jpg',
//     products: [
//       {
//         id: 1,
//         name: 'Camisa de Bambula Cal',
//         price: 71000,
//         originalPrice: 75000,
//         image:
//           'https://freres.ar/wp-content/uploads/2024/10/FRERES-ESHOP-SS25_0091-1280x1920.jpg'
//       },
//       {
//         id: 2,
//         name: 'Jean Wide Marron',
//         price: 85000,
//         originalPrice: 95000,
//         image:
//           'https://freres.ar/wp-content/uploads/2024/10/FRERES-ESHOP-SS25_0091-1280x1920.jpg'
//       }
//     ]
//   },
//   {
//     id: 2,
//     image:
//       'https://freres.ar/wp-content/uploads/2024/10/FRERES-ESHOP-SS25_0097-1280x1920.jpg',
//     products: [
//       {
//         id: 4,
//         name: 'Remera Basic Negra',
//         price: 35000,
//         originalPrice: 45000,
//         image:
//           'https://freres.ar/wp-content/uploads/2024/10/FRERES-ESHOP-SS25_0097-1280x1920.jpg'
//       }
//       // Add more products for this outfit
//     ]
//   }
// ];

export default async function Home() {
  return (
    <main className="relative w-full">
      <div className="relative w-full h-[100dvh]">
        <video
          className="w-full h-full object-cover"
          src="https://freres.ar/wp-content/uploads/2024/11/BANNERWEBVIDEO21-1.webm"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* <Image
        src="https://freres.ar/wp-content/uploads/2024/11/cyber-freres-24-header-desktop-_1_-_2_-scaled.webp"
        alt="Cyber FRÈRES"
        priority
        width={1000}
        height={1000}
        className="w-full h-[100dvh]"
        style={{ objectFit: 'cover' }}
      /> */}
      <ProductsList />
      <Outfits />
    </main>
  );
}
