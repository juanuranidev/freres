import {
  Drawer,
  DrawerTitle,
  DrawerFooter,
  DrawerHeader,
  DrawerContent
} from '@/components/ui/drawer';
import React from 'react';
import { Icons } from '@/lib/shared/icons';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/interfaces/product/product.interfaces';
import CartProduct from '@/app/components/navbar/components/buttons/components/cart-icon/components/cart-product/cart-product';
import CartShippingInfo from '@/app/components/navbar/components/buttons/components/cart-icon/components/cart-shipping-info/cart-shipping-info';
import { useProductCartContext } from '@/contexts/product/product-cart.context';
import { formatProductPriceLib } from '@/lib/helpers/product/product.helpers';

export default function CartDrawer() {
  const { cart, isOpenCart, getCartTotal, handleCloseCart } =
    useProductCartContext();

  const cartTotal: number = getCartTotal();

  return (
    <Drawer open={isOpenCart} onOpenChange={handleCloseCart}>
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
              <CartShippingInfo />
              {cart.map((product: Product) => (
                <CartProduct key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
        <DrawerFooter className="border-t">
          <div className="flex justify-between py-4">
            <span className="font-medium">Subtotal</span>
            <span className="font-medium">
              {formatProductPriceLib(cartTotal)}
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
