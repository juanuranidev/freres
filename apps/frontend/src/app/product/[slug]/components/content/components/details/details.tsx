'use client';

import { PRODUCTS_CONSTANTS } from '@/lib/constants/products/products.constants';
import {
  calculateInstallmentsLib,
  formatProductPriceLib
} from '@/lib/helpers/product/product.helpers';
import {
  Product,
  ProductSize
} from '@/lib/interfaces/product/product.interfaces';
import { Icons } from '@/lib/shared/icons';
import React, { useState } from 'react';
import Sizes from '@/app/product/[slug]/components/content/components/details/components/sizes/sizes';
import InformationItem from '@/app/product/[slug]/components/content/components/details/components/information-item/information-item';
import AddToCart from '@/app/product/[slug]/components/content/components/details/components/add-to-cart/add-to-cart';

interface Props {
  product: Product;
}

export default function Details({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number>(1);

  return (
    <div className="w-[30%] sticky top-20">
      <h1 className="text-lg font-semibold mb-2">{product.title}</h1>
      <div className="mb-6">
        <p className="text-md">{formatProductPriceLib(product.price)}</p>
        <p className="text-xs font-medium">
          {calculateInstallmentsLib(
            product.price,
            PRODUCTS_CONSTANTS.INSTALLMENTS['6_WHITOUHT_INTEREST']
          )}
        </p>
      </div>
      <div className="mb-6">
        <h3 className="uppercase text-xs font-medium mb-2">Colores</h3>
        <div className="flex gap-2">
          <button className="w-16 h-18 border hover:border-black">
            <img
              src={product.images[0]}
              alt="Color option"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
      <Sizes
        product={product}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <div className="mb-6 flex gap-1 items-center ">
        <p className="text-sm font-medium cursor-pointer hover:underline transition-all duration-200">
          Probar
        </p>
        <Icons.sparkles className="w-4 h-4 text-gray-500 cursor-pointer" />
      </div>
      <AddToCart
        product={product}
        selectedAmount={selectedAmount}
        setSelectedAmount={setSelectedAmount}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <div className="space-y-4">
        <InformationItem title="GUÍA DE TALLES" content="Content..." />
        <InformationItem title="ENVÍOS" content="Content..." />
        <InformationItem title="CAMBIOS Y DEVOLUCIONES" content="Content..." />
        <InformationItem title="DESCRIPCIÓN" content="Content..." />
      </div>
    </div>
  );
}
