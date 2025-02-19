import { Button } from '@/components/ui/button';
import { useProductCartContext } from '@/contexts/product/product-cart.context';
import {
  Product,
  ProductSize
} from '@/lib/interfaces/product/product.interfaces';
import React from 'react';

interface Props {
  product: Product;
  selectedAmount: number;
  setSelectedAmount: (amount: number) => void;
  selectedSize: ProductSize | null;
  setSelectedSize: (size: ProductSize | null) => void;
}

export default function AddToCart({
  product,
  selectedAmount,
  setSelectedAmount,
  selectedSize,
  setSelectedSize
}: Props) {
  const { handleAddProductToCart, handleOpenCart } = useProductCartContext();

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
      ...product,
      quantity: selectedAmount,
      size: selectedSize!
    });

    handleResetValues();
    handleOpenCart();
  };

  const handleResetValues = () => {
    setSelectedSize(null);
    setSelectedAmount(1);
  };

  return (
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
          className="w-12 text-center m-0 p-0"
        />
        <button className="px-4 py-2 border-l" onClick={handleIncreaseAmount}>
          +
        </button>
      </div>
      <Button
        className="flex-1"
        disabled={!selectedSize}
        onClick={handleAddToCart}
      >
        AGREGAR AL CARRITO
      </Button>
    </div>
  );
}
