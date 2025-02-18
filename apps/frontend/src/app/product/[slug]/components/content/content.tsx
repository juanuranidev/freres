import React from 'react';
import { Images } from '@/app/product/[slug]/components/content/components/images/images';
import Details from '@/app/product/[slug]/components/content/components/details/details';
import { Product } from '@/lib/interfaces/product/product.interfaces';
import { readProductByIdService } from '@/services/product/product.services';

interface Props {
  slug: string;
}

export default async function Content({ slug }: Props) {
  const product: Product = await readProductByIdService(slug);

  return (
    <div className="w-full flex items-start gap-[2.5rem]">
      <Images images={product.images} />
      <Details product={product} />
    </div>
  );
}
