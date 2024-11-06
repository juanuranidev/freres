import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProductImages.scss";

interface ProductImagesProps {
  images: string[];
}

const ProductImages = ({ images }: ProductImagesProps) => {
  const [mainImage, setMainImage] = useState<number>(0);

  return (
    <div className="product_images">
      <div className="product_images_div">
        {images.map((image: string, index: number) => (
          <motion.div
            key={index}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: "-5%" }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={image}
              key={index}
              alt="Imágenes del producto"
              className="product_images_div_img"
              onClick={() => setMainImage(index)}
            />
          </motion.div>
        ))}
      </div>
      <div className="product_images_main">
        <AnimatePresence exitBeforeEnter>
          <motion.img
            key={mainImage}
            exit={{ opacity: 0 }}
            src={images[mainImage]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="product_images_main_img"
            alt="Imágen principal del producto"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductImages;
