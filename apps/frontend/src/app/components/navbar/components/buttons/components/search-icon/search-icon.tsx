'use client';

import { Icons } from '@/lib/shared/icons';
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useIsOnTopOfPage } from '@/hooks/shared/use-is-on-top-of-page/use-is-on-top-of-page';
import { useDebounce } from '@/hooks/shared/use-debounce/use-debounce';
import { SearchModal } from './components/search-modal';
import { useReadProducts } from '@/hooks/products/use-read-products';

const DEBOUNCE_DELAY = 1000;

export default function SearchIcon() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');

  const { isOnTopOfPage } = useIsOnTopOfPage();
  const { debouncedValue } = useDebounce({
    value: searchInput,
    delay: DEBOUNCE_DELAY
  });

  const { products, isLoading } = useReadProducts({
    title: debouncedValue
  });

  const handleEscapePress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscapePress);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="group p-2 relative rounded-full active:scale-95 transition-transform duration-150"
        onClick={() => setIsOpen(true)}
        aria-label="Open search"
      >
        <span className="sr-only">Buscar</span>
        <div className="absolute inset-0 rounded-full transition-colors group-hover:bg-gray-100" />
        <Icons.search
          className="h-5 w-5 stroke-[1.5] transition-colors relative group-hover:text-gray-600 cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </button>
      <AnimatePresence>
        {isOpen ? (
          <SearchModal
            products={products}
            isLoading={isLoading}
            searchInput={searchInput}
            isOnTopOfPage={isOnTopOfPage}
            onClose={() => setIsOpen(false)}
            onSearchChange={(value) => setSearchInput(value)}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
