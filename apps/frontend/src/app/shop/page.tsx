'use client';

import ProductsList from '@/components/shared/products-list/products-list';
import { useReadProducts } from '@/hooks/products/use-read-products';

interface ShopProps {
  searchParams: {
    category?: string;
    title?: string;
  };
}

export default function Shop({ searchParams }: ShopProps) {
  const { category, title } = searchParams;

  const handleFormatCategory = (category: string) => {
    return (
      category &&
      category.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
    );
  };

  const { products, isLoading, handleIncrementLimit, hasMoreProducts } =
    useReadProducts({
      category: handleFormatCategory(category!),
      title
    });

  return (
    <div className="max-w-[90rem] mx-auto px-2 py-10 min-h-screen">
      <ProductsList products={products} isLoading={isLoading} />
      {!isLoading && products.length > 0 && hasMoreProducts && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleIncrementLimit}
            className="px-6 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
