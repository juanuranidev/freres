'use client';

import { useProductCartContext } from '@/contexts/product/product-cart.context';
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
import Sizes from './components/sizes/sizes';

interface Props {
  product: Product;
}

export default function Details({ product }: Props) {
  const { cart, handleAddProductToCart } = useProductCartContext();

  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number>(1);

  const handleIncreaseAmount = () => {
    if (selectedAmount < (selectedSize?.stock ?? 0)) {
      setSelectedAmount(selectedAmount + 1);
    }
  };

  const handleDecreaseAmount = () => {
    if (selectedAmount > 1) {
      setSelectedAmount(selectedAmount - 1);
    }
  };

  const handleAddToCart = () => {
    handleAddProductToCart({
      id: product.id,
      size: selectedSize!,
      quantity: selectedAmount
    });

    handleResetValues();
  };

  const handleResetValues = () => {
    setSelectedSize(null);
    setSelectedAmount(1);
  };

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

      <div className="flex gap-4 items-center mb-6">
        <div className="flex border">
          <button className="px-4 py-2 border-r" onClick={handleDecreaseAmount}>
            -
          </button>
          <input
            min="1"
            readOnly
            type="number"
            value={selectedAmount}
            disabled={!selectedSize}
            className="w-10 text-center"
          />
          <button className="px-4 py-2 border-l" onClick={handleIncreaseAmount}>
            +
          </button>
        </div>
        <button
          className="flex-1 bg-black text-white py-3 uppercase"
          disabled={!selectedSize}
          onClick={handleAddToCart}
        >
          Agregar al carrito
        </button>
      </div>

      <div className="space-y-4">
        <button className="w-full text-left flex justify-between items-center py-2 border-t">
          <span>GUÍA DE TALLES</span>
          <span>+</span>
        </button>
        <button className="w-full text-left flex justify-between items-center py-2 border-t">
          <span>ENVÍOS</span>
          <span>+</span>
        </button>
        <button className="w-full text-left flex justify-between items-center py-2 border-t">
          <span>CAMBIOS Y DEVOLUCIONES</span>
          <span>+</span>
        </button>
        <button className="w-full text-left flex justify-between items-center py-2 border-t">
          <span>DESCRIPCIÓN</span>
          <span>+</span>
        </button>
      </div>
    </div>
  );
}
