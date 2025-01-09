import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer aria-label="Sitio principal pie de página">
      <div className="border-b border-gray-200" />
      <div className="max-w-[90rem] mx-auto py-10 flex justify-between">
        <section className="flex w-1/2">
          <p className="text-sm w-1/2">
            Frères es no conformarse con lo que existe, es crecer juntos
            siguiendo nuestras propias expectativas.
          </p>
        </section>
        <nav
          aria-label="Enlaces de ayuda"
          className="flex flex-col items-start gap-3 w-1/4"
        >
          <h2 className="text-sm font-bold">Ayuda</h2>
          <Link
            href="https://web.whatsapp.com/send?phone=5492216970223"
            target="_blank"
            className="text-xs"
            referrerPolicy="no-referrer"
            aria-label="Contactar por WhatsApp para atención al cliente"
          >
            WhatsApp
          </Link>
          <Link
            href="/"
            target="_blank"
            className="text-xs"
            aria-label="Ver preguntas frecuentes"
          >
            Preguntas Frecuentes
          </Link>
          <Link
            href="https://w.app/freresmayorista"
            target="_blank"
            className="text-xs"
            referrerPolicy="no-referrer"
            aria-label="Información sobre ventas mayoristas"
          >
            Ventas Mayoristas
          </Link>
          <Link
            href="https://goo.gl/maps/ZoAPsgwaCtLaPhWj8"
            target="_blank"
            className="text-xs"
            referrerPolicy="no-referrer"
            aria-label="Ubicación de Viamonte Store"
          >
            Viamonte Store
          </Link>
          <Link
            href="https://maps.app.goo.gl/cNcexv9RrejBzriR8"
            target="_blank"
            className="text-xs"
            referrerPolicy="no-referrer"
            aria-label="Ubicación de Cabrera Store"
          >
            Cabrera Store
          </Link>
        </nav>
        <nav
          className="flex flex-col items-start gap-3 w-1/4"
          aria-label="Redes sociales"
        >
          <h2 className="text-sm font-bold">Seguinos</h2>
          <Link
            href="https://instagram.com/freres"
            target="_blank"
            className="text-xs"
            referrerPolicy="no-referrer"
            aria-label="Síguenos en Instagram"
          >
            Instagram
          </Link>
          <Link
            href="https://www.tiktok.com/@freresok?lang=es"
            target="_blank"
            className="text-xs"
            referrerPolicy="no-referrer"
            aria-label="Síguenos en TikTok"
          >
            TikTok
          </Link>
        </nav>
      </div>
      <div className="border-b border-gray-200" />
      <div className="max-w-[90rem] mx-auto flex items-center gap-2 p-2">
        <Image
          width={20}
          height={20}
          alt="Frères - Tienda de ropa y accesorios"
          src="https://res.cloudinary.com/dhodvztdx/image/upload/v1734492147/freres_new/freres-logo-white_nxln1s.svg"
          priority={false}
        />
        <p className="text-xs text-gray-500">Frères Copyright © 2024</p>
        <div className="flex gap-1">
          <p className="text-xs text-gray-500">By</p>
          <Link
            target="_blank"
            className="text-xs text-blue-500"
            referrerPolicy="no-referrer"
            href="https://juanurani.vercel.app/"
            aria-label="Sitio web del desarrollador Juan Urani"
          >
            juan urani
          </Link>
        </div>
      </div>
    </footer>
  );
}
