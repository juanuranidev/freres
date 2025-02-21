import React from 'react';
import ProductCard from '../product-card/product-card';
import { Product } from '@/lib/interfaces/product/product.interfaces';
import ProductCardSkeleton from '../product-card/components/product-card-skeleton/product-card-skeleton';
import { PRODUCTS_CONSTANTS } from '@/lib/constants/products/products.constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Props {
  products: Product[];
  isLoading: boolean;
}

export default function ProductsList({ products, isLoading }: Props) {
  return (
    <div>
      {products.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {products.map((product, index) => (
            <ProductCard key={product.id} index={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full">
          <p className="font-bold text-gray-500 text-xl">
            Sin productos para esta categoría
          </p>
          <Link href="/shop">
            <Button variant="default" className="mt-4">
              Volver a la tienda
            </Button>
          </Link>
        </div>
      )}
      {isLoading &&
        Array.from({ length: PRODUCTS_CONSTANTS.INCREMENT_AMOUNT_LIMIT }).map(
          (_, index) => <ProductCardSkeleton key={`skeleton-${index}`} />
        )}
    </div>
  );
}
