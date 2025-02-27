'use client';

import { useState } from 'react';
import { ImageModal } from '@/app/product/[slug]/components/content/components/images/components/image-modal/image-modal';
import { motion, AnimatePresence } from 'framer-motion';

interface ImagesProps {
  images: string[];
}

export function Images({ images }: ImagesProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:w-full lg:w-[70%]">
        {images.map((image: string, index: number) => (
          <motion.button
            key={index}
            layoutId={`product-image-${image}`}
            className="relative overflow-hidden cursor-pointer aspect-square"
            onClick={() => setSelectedImage(image)}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <img
              src={image}
              alt={`Product image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            imageUrl={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
