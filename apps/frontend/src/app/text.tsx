"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const outfitImages = [
  "https://freres.ar/wp-content/uploads/2024/10/FRERES-ESHOP-SS25_0091-1280x1920.jpg",
  "https://freres.ar/wp-content/uploads/2024/10/FRERES-ESHOP-SS25_0097-1280x1920.jpg",
  "https://freres.ar/wp-content/uploads/2024/10/FRERES-ESHOP-SS25_0091-1280x1920.jpg",
].map((src) => ({
  src: "https://freres.ar/wp-content/uploads/2024/10/FRERES-ESHOP-SS25_0091-1280x1920.jpg",
  alt: "Outfit inspiration",
}));

export function OutfitCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      if (newDirection === 1) {
        return prev === outfitImages.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? outfitImages.length - 1 : prev - 1;
    });
  };

  return (
    <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction < 0 ? 1000 : -1000 }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          <Image
            src={outfitImages[currentSlide].src}
            alt={outfitImages[currentSlide].alt}
            fill
            className="object-cover"
            priority
            draggable="false"
          />
        </motion.div>
      </AnimatePresence>

      <motion.button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </motion.button>

      <motion.button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </motion.button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {outfitImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              const newDirection = index > currentSlide ? 1 : -1;
              setDirection(newDirection);
              setCurrentSlide(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
