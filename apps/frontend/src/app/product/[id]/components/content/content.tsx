import React from 'react';
import Images from './components/images/images';
import Details from './components/details/details';
import { Product } from '@/lib/interfaces/product/product.interfaces';
import { readProductByIdService } from '@/services/product/product.services';

interface Props {
  id: string;
}

export default async function Content({ id }: Props) {
  const product: Product = await readProductByIdService(id);

  return (
    <div className="w-full flex items-start gap-[2.5rem]">
      <Images images={product.images} />
      <Details product={product} />
    </div>
  );
}
