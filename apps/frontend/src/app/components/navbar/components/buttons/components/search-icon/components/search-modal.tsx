import { motion } from 'framer-motion';
import { Icons } from '@/lib/shared/icons';
import { Input } from '@/components/ui/input';
import { Product } from '@/lib/interfaces/product/product.interfaces';
import ProductCard from '@/components/shared/product-card/product-card';
import ProductCardSkeleton from '@/components/shared/product-card/components/product-card-skeleton/product-card-skeleton';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SearchModalProps {
  onClose: () => void;
  searchInput: string;
  onSearchChange: (value: string) => void;
  products: Product[];
  isLoading: boolean;
  isOnTopOfPage: boolean;
}

export function SearchModal({
  onClose,
  searchInput,
  onSearchChange,
  products,
  isLoading,
  isOnTopOfPage
}: SearchModalProps) {
  const handleRenderContent = (): ReactNode => {
    if (!products.length)
      return (
        <div>
          <p>¡Ups! No se encontraron productos</p>
        </div>
      );

    if (isLoading)
      return Array.from({ length: 10 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ));

    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
          {products?.map((product, index) => (
            <ProductCard index={index} key={product.id} product={product} />
          ))}
        </div>
        <div className="flex flex-1 justify-center w-full">
          <Link
            href={`/shop${searchInput ? `?title=${searchInput}` : ''}`}
            onClick={onClose}
          >
            <Button variant="default" className="mt-4">
              Ver todos los resultados
            </Button>
          </Link>
        </div>
      </>
    );
  };

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      aria-labelledby="search-modal-title"
      className="fixed inset-0 bg-white z-50"
    >
      <motion.div
        animate={{ y: 0 }}
        exit={{ y: '-100%' }}
        initial={{ y: '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className={cn(
          'w-full bg-white flex items-center',
          isOnTopOfPage ? 'h-32' : 'h-14'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-[83rem] mx-auto flex items-center justify-center">
          <Input
            value={searchInput}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="¿Qué estás buscando?"
            aria-label="Search products"
            autoFocus
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="ml-1 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Icons.close className="h-5 w-5 stroke-[1.5]" />
          </button>
        </div>
      </motion.div>
      <div className="mx-auto p-4 overflow-y-auto h-[calc(100vh-56px)]">
        <motion.div initial="hidden" animate="show">
          {handleRenderContent()}
        </motion.div>
      </div>
    </motion.div>
  );
}
