'use client';

import ENVS from '@/lib/shared/envs';
import Store from './store/store';
import { useState } from 'react';
import { StoreI } from './lib/interfaces/stores.interfaces';
import { LoadScript } from '@react-google-maps/api';

export default function Stores() {
  const [activeMap, setActiveMap] = useState<string | null>(null);

  const locations: StoreI[] = [
    {
      lat: -34.5995283,
      lng: -58.3701637,
      name: 'Viamonte Store',
      adress: 'José A. Cabrera 5801',
      image:
        'https://res.cloudinary.com/dhodvztdx/image/upload/v1734482878/freres_new/image_1_dz32yn.webp'
    },
    {
      lat: -34.584015,
      lng: -58.4402,
      name: 'Cabrera Store',
      adress: 'Viamonte 174 A',
      image:
        'https://res.cloudinary.com/dhodvztdx/image/upload/v1734482878/freres_new/image_2_wr1u5p.webp'
    }
  ];

  return (
    <LoadScript googleMapsApiKey={ENVS.GOOGLE_MAP_API_KEY!}>
      <div className="pt-10 md:pt-20">
        <div className="flex justify-center pt-10 md:pt-20 pb-6 md:pb-10 text-center sm:justify-start sm:pl-10">
          <p className="text-xl md:text-2xl font-medium">Novedades</p>
          <p className="text-xl md:text-2xl font-light mx-2">|</p>
          <p className="text-xl md:text-2xl font-light">Locales</p>
        </div>
        <div className="flex flex-col w-full md:flex-row h-auto md:h-[90dvh]">
          {locations.map((store, index) => (
            <Store
              key={index}
              store={store}
              isActive={activeMap === index.toString()}
              onToggle={() =>
                setActiveMap(
                  activeMap === index.toString() ? null : index.toString()
                )
              }
            />
          ))}
        </div>
      </div>
    </LoadScript>
  );
}
