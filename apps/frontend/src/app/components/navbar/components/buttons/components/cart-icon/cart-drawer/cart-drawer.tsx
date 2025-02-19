import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter
} from '@/components/ui/drawer';
import { useProductCartContext } from '@/contexts/product/product-cart.context';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Product,
  ProductSize
} from '@/lib/interfaces/product/product.interfaces';
import { formatProductPriceLib } from '@/lib/helpers/product/product.helpers';
import { Progress } from '@/components/ui/progress';
import { Icons } from '@/lib/shared/icons';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: Props) {
  const { cart, getFreeShippingRemaining, getCartTotal } =
    useProductCartContext();

  console.log(cart);

  const handleGetAvailablesUnitsBySize = (product: Product) => {
    const size: ProductSize | undefined = product.sizes.find(
      (size) => size.id === product?.size?.id
    );

    return size?.stock;
  };

  const subtotal = cart.reduce((total, item) => {
    return total + (item.price ?? 0) * (item.quantity ?? 0);
  }, 0);

  const freeShippingRemaining = getFreeShippingRemaining();
  const cartTotal = getCartTotal();
  const progressValue = Math.min((cartTotal * 100) / 140000, 100);

  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="flex items-center justify-between">
            Carrito ({cart.length})
            <Icons.close />
          </DrawerTitle>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto px-4">
          {cart.length === 0 ? (
            <p className="text-center text-muted-foreground py-8 font-bold">
              Tu carrito está vacío
            </p>
          ) : (
            <div className="space-y-4">
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
                    Tenés{' '}
                    <span className="font-bold text-green-600">
                      envío gratis
                    </span>
                  </p>
                )}
                <Progress value={progressValue} className="mt-2" />
              </div>

              {cart.map((item: Product) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex flex-col border-b py-2"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 bg-muted rounded">
                      <Image
                        fill
                        alt={item.title}
                        className="object-cover rounded"
                        src={item.images[0]}
                      />
                    </div>

                    <div className="flex-1 flex justify-between items-center">
                      <div>
                        <h3 className="font-bold">
                          {item.title} x {item.quantity}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Talle: {item.size?.name}
                        </p>
                        <p className="text-xs text-green-400">
                          {handleGetAvailablesUnitsBySize(item)} unidades
                          disponibles
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium">
                          {formatProductPriceLib(
                            item.price * (item.quantity ?? 1)
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <p className="text-xs text-red-600">Eliminar</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <DrawerFooter className="border-t">
          <div className="flex justify-between py-4">
            <span className="font-medium">Subtotal</span>
            <span className="font-medium">
              {formatProductPriceLib(subtotal)}
            </span>
          </div>
          <Button className="w-full" size="lg" disabled={cart.length === 0}>
            Finalizar compra
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
