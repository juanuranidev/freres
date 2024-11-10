"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselItems = [
  {
    id: 1,
    image:
      "https://freres.ar/wp-content/uploads/2024/10/FRERES-ESHOP-SS25_0091-1280x1920.jpg",
    products: [
      {
        id: 1,
        name: "Camisa de Bambula Cal",
        price: 71000,
        originalPrice: 75000,
        image:
          "https://freres.ar/wp-content/uploads/2024/10/FRERES-ESHOP-SS25_0091-1280x1920.jpg",
      },
      {
        id: 2,
        name: "Jean Wide Marron",
        price: 85000,
        originalPrice: 95000,
        image:
          "https://freres.ar/wp-content/uploads/2024/10/FRERES-ESHOP-SS25_0091-1280x1920.jpg",
      },
      {
        id: 3,
        name: "Privado: Mocasin Antifaz",
        price: null,
        originalPrice: null,
        image:
          "https://freres.ar/wp-content/uploads/2024/10/FRERES-ESHOP-SS25_0091-1280x1920.jpg",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://freres.ar/wp-content/uploads/2024/10/FRERES-ESHOP-SS25_0097-1280x1920.jpg",
    products: [
      {
        id: 4,
        name: "Remera Basic Negra",
        price: 35000,
        originalPrice: 45000,
        image:
          "https://freres.ar/wp-content/uploads/2024/10/FRERES-ESHOP-SS25_0097-1280x1920.jpg",
      },
      // Add more products for this outfit
    ],
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <main className="relative w-full">
      <Image
        src="https://freres.ar/wp-content/uploads/2024/11/cyber-freres-24-header-desktop-_1_-_2_-scaled.webp"
        alt="Cyber FRÈRES"
        priority
        width={1000}
        height={1000}
        className="w-full h-[100dvh]"
        style={{ objectFit: "cover" }}
      />
      <Image
        src="https://freres.ar/wp-content/uploads/2024/11/cyber-freres-24-header-desktop-_1_-_2_-scaled.webp"
        alt="Cyber FRÈRES"
        priority
        width={1000}
        height={1000}
        className="w-full h-[100dvh]"
        style={{ objectFit: "cover" }}
      />
      <Image
        src="https://freres.ar/wp-content/uploads/2024/11/cyber-freres-24-header-desktop-_1_-_2_-scaled.webp"
        alt="Cyber FRÈRES"
        priority
        width={1000}
        height={1000}
        className="w-full h-[100dvh]"
        style={{ objectFit: "cover" }}
      />
      <Image
        src="https://freres.ar/wp-content/uploads/2024/11/cyber-freres-24-header-desktop-_1_-_2_-scaled.webp"
        alt="Cyber FRÈRES"
        priority
        width={1000}
        height={1000}
        className="w-full h-[100dvh]"
        style={{ objectFit: "cover" }}
      />
      <div className="mx-auto px-2 py-4">
        <div className="relative mx-auto w-full max-w-[90rem]">
          <h2 className="mb-6 text-xl font-medium text-center">
            <span className="text-neutral-950">Inspiración</span>
            <span className="mx-2 text-neutral-400">|</span>
            <span className="text-neutral-400">Outfits</span>
          </h2>

          <div className="flex justify-center gap-8">
            <Carousel
              opts={{
                align: "center",
              }}
              // className="w-[600px]"
            >
              <CarouselContent>
                {carouselItems.map((item, index) => (
                  <CarouselItem
                    key={item.id}
                    className="flex justify-center items-center"
                  >
                    <Image
                      src={item.image}
                      alt={`Outfit inspiration ${index + 1}`}
                      width={600}
                      height={900}
                      className="aspect-[2/3] object-cover"
                    />
                    <div className="w-72 space-y-4 ml-[-5rem]">
                      {item.products.map((product) => (
                        <Link
                          key={product.id}
                          href={`/productos/${product.id}`}
                          className="flex items-center gap-4 bg-white p-2 hover:bg-neutral-50"
                        >
                          <div className="relative h-16 w-16 flex-shrink-0 bg-neutral-100">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-medium">
                              {product.name}
                            </h3>
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

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full transition-opacity ${
                      currentSlide === index ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

              {/* <CarouselPrevious className="absolute left-4 border-none bg-transparent hover:bg-transparent" /> */}
              {/* <CarouselNext className="absolute right-4 border-none bg-transparent hover:bg-transparent" /> */}
            </Carousel>
          </div>
        </div>
      </div>
      <Image
        src="https://freres.ar/wp-content/uploads/2024/11/cyber-freres-24-header-desktop-_1_-_2_-scaled.webp"
        alt="Cyber FRÈRES"
        priority
        width={1000}
        height={1000}
        className="w-full h-[100dvh]"
        style={{ objectFit: "cover" }}
      />
    </main>
  );
}
