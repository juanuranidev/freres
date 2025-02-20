import React from 'react';
import { useProductCartContext } from '@/contexts/product/product-cart.context';
import { formatProductPriceLib } from '@/lib/helpers/product/product.helpers';
import {
  Product,
  ProductSize
} from '@/lib/interfaces/product/product.interfaces';
import Image from 'next/image';

interface Props {
  product: Product;
}

export default function CartProduct({ product }: Props) {
  const { handleRemoveProductFromCart } = useProductCartContext();

  const handleGetAvailablesUnitsBySize = (product: Product) => {
    const size: ProductSize | undefined = product.sizes.find(
      (size) => size.id === product?.size?.id
    );

    return size?.stock;
  };

  return (
    <div
      key={`${product.id}-${product.size}`}
      className="flex flex-col border-b py-2"
    >
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 bg-muted rounded">
          <Image
            fill
            alt={product.title}
            className="object-cover rounded"
            src={product.images[0]}
          />
        </div>
        <div className="flex-1 flex justify-between items-start">
          <div>
            <h3 className="font-bold">
              {product.title} x {product.quantity}
            </h3>
            <p className="text-xs text-muted-foreground">
              Talle: {product.size?.name}
            </p>
            <p className="text-xs text-green-400">
              {handleGetAvailablesUnitsBySize(product)} unidades disponibles
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">
              {formatProductPriceLib(product.price * (product.quantity ?? 1))}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <p
          className="text-xs text-red-600 cursor-pointer"
          onClick={() => handleRemoveProductFromCart(product.id, product.size!)}
        >
          Eliminar
        </p>
      </div>
    </div>
  );
}
