import React from 'react';
import { Progress } from '@/components/ui/progress';
import { useProductCartContext } from '@/contexts/product/product-cart.context';

export default function CartShippingInfo() {
  const { getCartTotal, getFreeShippingRemaining } = useProductCartContext();

  const freeShippingRemaining: number = getFreeShippingRemaining();
  const progressValue: number = Math.min((getCartTotal() * 100) / 140000, 100);

  return (
    <div>
      {freeShippingRemaining > 0 ? (
        <p className="text-xs text-muted-foreground">
          Estás a{' '}
          <span className="font-bold">
            ${freeShippingRemaining.toLocaleString()}
          </span>{' '}
          de tener <span className="font-bold">envío gratis</span>
        </p>
      ) : (
        <p className="text-xs ">
          Tenés <span className="font-bold text-green-600">envío gratis</span>
        </p>
      )}
      <Progress value={progressValue} className="mt-2" />
    </div>
  );
}
