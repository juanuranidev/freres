import Content from './components/content/content';
import Skeleton from './components/skeleton/skeleton';
import { Suspense } from 'react';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function Product({ params }: ProductPageProps) {
  const { id } = params;

  return (
    <main className="relative w-full">
      <div className="max-w-[90rem] mx-auto px-2 py-10 min-h-screen">
        <Suspense fallback={<Skeleton />}>
          <Content id={id} />
        </Suspense>
      </div>
    </main>
  );
}
