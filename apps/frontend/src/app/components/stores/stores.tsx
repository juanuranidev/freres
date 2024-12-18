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
      <div className="">
        <div className="flex justify-start p-10">
          <p className="text-2xl font-medium">Locales</p>
          <p className="text-2xl font-light mx-2">|</p>
          <p className="text-2xl font-light">Viamonte & Cabrera</p>
        </div>
        <div className="flex w-full h-[90dvh]">
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
