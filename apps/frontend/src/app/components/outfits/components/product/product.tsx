import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { OutfitProductI } from '@/lib/interfaces/outfit/outfit.interfaces';
import { formatProductPriceLib } from '@/lib/helpers/product/product.helpers';

interface ProductProps {
  product: OutfitProductI;
}

export default function Product({ product }: ProductProps) {
  return (
    <Link
      key={product.id}
      href={`/productos/${product.slug}`}
      className="flex items-center gap-4 bg-white p-2 hover:bg-neutral-50 transition-all duration-300 ease-in-out"
    >
      <div className="relative h-16 w-16 flex-shrink-0 bg-neutral-100">
        <Image
          width={64}
          height={64}
          alt={product.title}
          src={product.imageUrls[0]}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">{product.title}</h3>
        <p className="text-xs font-small">
          {formatProductPriceLib(product.price)}
        </p>
      </div>
    </Link>
  );
}
