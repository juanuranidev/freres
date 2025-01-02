'use client';

import { ProductCartProvider } from './product/product-cart.context';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return <ProductCartProvider>{children}</ProductCartProvider>;
}
