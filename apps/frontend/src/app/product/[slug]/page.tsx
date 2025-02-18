import Content from '@/app/product/[slug]/components/content/content';
import Skeleton from '@/app/product/[slug]/components/skeleton/skeleton';
import { Suspense } from 'react';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function Product({ params }: ProductPageProps) {
  const { slug } = params;

  return (
    <main className="relative w-full">
      <div className="max-w-[90rem] mx-auto px-2 py-10 min-h-screen">
        <Suspense fallback={<Skeleton />}>
          <Content slug={slug} />
        </Suspense>
      </div>
    </main>
  );
}
