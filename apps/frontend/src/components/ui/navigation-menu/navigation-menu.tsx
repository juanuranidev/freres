"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import NavigationButtons from "./components/navigation-buttons/navigation-buttons";

type MenuItem = {
  label: string;
  href: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const shopMenuSections: MenuSection[] = [
  {
    title: "Prendas",
    items: [
      { label: "Ver Todo", href: "#" },
      { label: "Remeras", href: "#" },
      { label: "Hoodies y Buzos", href: "#" },
      { label: "Abrigos", href: "#" },
      { label: "Denim", href: "#" },
      { label: "Pantalones", href: "#" },
      { label: "Deportivo", href: "#" },
      { label: "Shorts", href: "#" },
      { label: "Camisas", href: "#" },
      { label: "Polos", href: "#" },
    ],
  },
  {
    title: "Calzado y Accesorios",
    items: [
      { label: "Calzado", href: "#" },
      { label: "Accesorios", href: "#" },
    ],
  },
  {
    title: "Destacados",
    items: [
      { label: "Nuevos Ingresos", href: "#" },
      { label: "Otoño Invierno '24", href: "#" },
      { label: "Eternos", href: "#" },
    ],
  },
];

export function NavigationMenu() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsAtTop(scrollPosition < 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [window.scrollY]);

  console.log(isAtTop);

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[90rem] mx-auto px-2 flex justify-between items-center h-14">
        <nav className="flex space-x-8">
          {["PRIMAVERA VERANO '25", "ETERNOS", "SHOP"].map((item) => (
            <div key={item} className="relative group/nav">
              <Link
                href="#"
                className="text-xs font-medium transition-all duration-300 inline-block transform-gpu backface-visibility-hidden group-hover/nav:translate-y-[0.0625rem]"
              >
                {item}
              </Link>
              {item === "SHOP" && (
                <div
                  className={`fixed left-0 right-0 ${
                    isAtTop ? "top-[5.75rem]" : "top-[3.25rem]"
                  } invisible group-hover/nav:visible opacity-0 group-hover/nav:opacity-100 hover:visible hover:opacity-100 transition-all duration-200`}
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
              )}
            </div>
          ))}
          <div className="relative group">
            <Link
              href="#"
              className="text-xs font-medium text-red-500 hover:text-red-600 transition-all duration-300 inline-block transform-gpu backface-visibility-hidden group-hover:translate-y-[0.0625rem]"
            >
              SALE
            </Link>
          </div>
        </nav>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-wider"
        >
          FRÈRES
        </Link>

        <NavigationButtons />
      </div>
    </div>
  );
}
