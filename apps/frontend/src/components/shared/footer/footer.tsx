import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer aria-label="Sitio principal pie de página">
      <div className="border-b border-gray-200" />
      <div className="max-w-[90rem] mx-auto py-6 sm:py-10 px-5 sm:px-10">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
          <section className="flex w-full lg:w-1/2">
            <p className="text-sm">
              En Frères celebramos la vida simple y auténtica. Diseñamos prendas
              atemporales que combinan confort y estilo, acompañándote en cada
              momento, desde el trabajo hasta el ocio. Somos una comunidad que
              comparte valores, pasiones y el espíritu del Bon Vivant.
            </p>
          </section>
          <div className="flex gap-8 sm:gap-16 lg:gap-8 w-full lg:w-1/2">
            <nav
              aria-label="Enlaces de ayuda"
              className="flex flex-col items-start gap-3 flex-1"
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
                href="https://freres.ar/pages/preguntas-frecuentes"
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
              className="flex flex-col items-start gap-3 flex-1"
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
        </div>
      </div>
      <div className="border-b border-gray-200" />
      <div className="max-w-[90rem] mx-auto flex flex-col sm:flex-row items-center gap-2 py-4 px-5 sm:px-10">
        <div className="flex items-center gap-2">
          <Image
            width={20}
            height={20}
            alt="Frères - Tienda de ropa y accesorios"
            src="https://res.cloudinary.com/dhodvztdx/image/upload/v1734492147/freres_new/freres-logo-white_nxln1s.svg"
            priority={false}
          />
          <p className="text-xs text-gray-500">Frères - Página no oficial.</p>
        </div>
        <div className="flex gap-1">
          <p className="text-xs text-gray-500">Creada by</p>
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
