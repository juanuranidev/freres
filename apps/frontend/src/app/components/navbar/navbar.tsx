'use server';

import Link from 'next/link';
import Buttons from './components/buttons/buttons';
import Links from './components/links/links';

export async function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[90rem] mx-auto px-2 flex justify-between items-center h-14">
        <Links />
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-wider"
        >
          FRÈRES
        </Link>
        <Buttons />
      </div>
    </div>
  );
}
