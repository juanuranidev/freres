import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Product as ProductInterface,
  ProductSize
} from '@/lib/interfaces/product/product.interfaces';
import { formatProductPriceLib } from '@/lib/helpers/product/product.helpers';
import { useProductCartContext } from '@/contexts/product/product-cart.context';

interface ProductCardProps {
  product: ProductInterface;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [hoveredSize, setHoveredSize] = useState<string | null>(null);
  const { handleAddProductToCart } = useProductCartContext();

  const handleAddToCart = (size: ProductSize, e: React.MouseEvent) => {
    e.preventDefault();
    handleAddProductToCart({
      id: product.id,
      size: size,
      quantity: 1
    });
  };

  return (
    <div className="relative group">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <Image
            fill
            alt={product.title}
            src={product.images[0]}
            className="object-cover object-center group-hover:opacity-0 transition-all duration-1000"
          />
          <Image
            fill
            alt={`${product.title} - alternate view`}
            src={product.images[1]}
            className="object-cover object-center absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000"
          />
        </div>
        <div className="mt-4 mb-2">
          <h3 className="text-xs font-medium text-gray-900">{product.title}</h3>
          <p className="text-xs text-gray-600">
            {formatProductPriceLib(product.price)}
          </p>
        </div>
      </Link>

      <div className="absolute bottom-14 left-0 right-0 p-2">
        <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-1000 bg-white">
          <span className="text-xs font-medium uppercase">
            AGREGAR AL CARRITO
          </span>
        </div>
        <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-1000">
          {product.sizes.map((size) => (
            <button
              key={size.id}
              className={`w-8 h-8 flex-1 text-xs font-medium transition-colors
                         ${
                           hoveredSize === size.id
                             ? 'bg-black text-white'
                             : 'bg-white hover:bg-gray-100'
                         }
                         ${
                           size.stock === 0
                             ? 'opacity-50 cursor-not-allowed'
                             : 'cursor-pointer'
                         }`}
              onMouseEnter={() => setHoveredSize(size.id)}
              onMouseLeave={() => setHoveredSize(null)}
              onClick={(e) => size.stock > 0 && handleAddToCart(size, e)}
              disabled={size.stock === 0}
            >
              {size.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
