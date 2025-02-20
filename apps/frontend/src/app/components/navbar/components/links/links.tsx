'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useIsOnTopOfPage } from '@/hooks/shared/use-is-on-top-of-page/use-is-on-top-of-page';

interface MenuItem {
  label: string;
  href: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const shopMenuSections: MenuSection[] = [
  {
    title: 'Prendas',
    items: [
      { label: 'Ver Todo', href: '/shop' },
      { label: 'Remeras', href: '/shop?category=remeras' },
      { label: 'Hoodies y Buzos', href: '/shop?category=hoodies-y-buzos' },
      { label: 'Abrigos', href: '/shop?category=abrigos' },
      { label: 'Denim', href: '/shop?category=denim' },
      { label: 'Pantalones', href: '/shop?category=pantalones' },
      { label: 'Deportivo', href: '/shop?category=deportivo' },
      { label: 'Shorts', href: '/shop?category=shorts' },
      { label: 'Camisas', href: '/shop?category=camisas' },
      { label: 'Polos', href: '/shop?category=polos' }
    ]
  },
  {
    title: 'Calzado y Accesorios',
    items: [
      { label: 'Calzado', href: '/shop?category=calzado' },
      { label: 'Accesorios', href: '/shop?category=accesorios' }
    ]
  },
  {
    title: 'Destacados',
    items: [
      { label: 'Nuevos Ingresos', href: '/shop?category=nuevos-ingresos' },
      {
        label: "Otoño Invierno '24",
        href: '/shop?category=otonio-invierno-24'
      },
      { label: 'Eternos', href: '/shop?category=eternos' }
    ]
  }
];

export default function Links() {
  const { isOnTopOfPage } = useIsOnTopOfPage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex space-x-8">
      <div
        className="relative group/nav"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <Link
          href="/shop"
          className="text-xs font-medium transition-all duration-300 inline-block transform-gpu backface-visibility-hidden group-hover/nav:translate-y-[0.0625rem]"
          onClick={handleLinkClick}
        >
          SHOP
        </Link>
        <div
          className={`fixed left-0 right-0 ${
            isOnTopOfPage ? 'top-[5.75rem]' : 'top-[3.25rem]'
          } ${
            isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
          } transition-all duration-200`}
        >
          <div className="w-full bg-white shadow-lg border-t">
            <div className="max-w-[90rem] mx-auto py-6 px-2">
              <div className="grid grid-cols-4 gap-x-8">
                {shopMenuSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-md font-bold text-gray-900 mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="text-sm text-gray-600 hover:text-gray-900"
                            onClick={handleLinkClick}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div>
                  <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop"
                      alt="Nueva Colección"
                      className="object-center object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-white">
                        Nueva Colección
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative group">
        <Link
          href="/shop?category=sale"
          className="text-xs font-medium text-red-500 hover:text-red-600 transition-all duration-300 inline-block transform-gpu backface-visibility-hidden group-hover:translate-y-[0.0625rem]"
          onClick={handleLinkClick}
        >
          SALE
        </Link>
      </div>
    </nav>
  );
}
