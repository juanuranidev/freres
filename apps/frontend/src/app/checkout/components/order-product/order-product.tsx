import React from 'react';
import { Product } from '@/lib/interfaces/product/product.interfaces';
import { formatProductPriceLib } from '@/lib/helpers/product/product.helpers';

interface Props {
  product: Product;
}

export default function OrderProduct({ product }: Props) {
  return (
    <div key={product.id}>
      <div className="flex items-center space-x-4 py-4">
        <div className="relative h-16 w-16 flex-shrink-0 rounded-md border border-gray-200">
          <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center opacity-80">
            <span className="text-xs font-medium text-white">
              {product.quantity || 1}
            </span>
          </div>
          <img
            alt={product.title}
            src={product.images[0]}
            className="h-full w-full object-cover object-center border border-gray-200 rounded-md"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                {product.title}
              </h3>
              <p className="text-xs font-light text-gray-900 ">
                Talle: {product.size?.name}
              </p>
            </div>
            <p className="text-xs font-medium text-gray-900">
              {formatProductPriceLib(product.price)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
