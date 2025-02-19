'use client';

import { useProductCartContext } from '@/contexts/product/product-cart.context';
import { Icons } from '@/lib/shared/icons';
import React, { useState } from 'react';
import CartDrawer from './cart-drawer/cart-drawer';

export default function CartIcon() {
  const { cart } = useProductCartContext();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="group p-2 relative rounded-full active:scale-95 transition-transform duration-150"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Cart</span>
        <div className="absolute inset-0 rounded-full transition-colors group-hover:bg-gray-100" />
        <Icons.cart className="h-5 w-5 stroke-[1.5] transition-colors relative group-hover:text-gray-600" />
        <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
          {cart.length}
        </span>
      </button>

      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
