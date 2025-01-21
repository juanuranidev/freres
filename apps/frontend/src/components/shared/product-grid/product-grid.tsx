import React from 'react';
import ProductCard from '../product-card/product-card';
import { Product } from '@/lib/interfaces/product/product.interfaces';
import { motion } from 'framer-motion';

interface ProductGridProps {
  products: Product[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProductGrid({ products }: ProductGridProps) {
  const gridKey = products.map((p) => p.id).join('-');

  return (
    <motion.div
      key={gridKey}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </motion.div>
  );
}
