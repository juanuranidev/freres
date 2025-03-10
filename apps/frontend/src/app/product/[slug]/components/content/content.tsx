import React from 'react';
import { Images } from '@/app/product/[slug]/components/content/components/images/images';
import Details from '@/app/product/[slug]/components/content/components/details/details';
import { Product } from '@/lib/interfaces/product/product.interfaces';
import { readProductBySlugService } from '@/services/product/product.services';

interface Props {
  slug: string;
}

export default async function Content({ slug }: Props) {
  const product: Product = await readProductBySlugService(slug);

  return (
    <div className="w-full flex flex-col lg:flex-row items-start gap-5 sm:gap-10">
      <Images images={product.images} />
      <Details product={product} />
    </div>
  );
}
