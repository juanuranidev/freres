import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import { StoreI } from '../lib/interfaces/stores.interfaces';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { motion, AnimatePresence } from 'framer-motion';

interface StoreProps {
  store: StoreI;
  isActive: boolean;
  onToggle: () => void;
}

export default function Store({ store, isActive, onToggle }: StoreProps) {
  const { ref } = useInView({
    threshold: 0.2,
    onChange: (inView: boolean) => {
      if (!inView && isActive) {
        onToggle();
      }
    }
  });

  const mapOptions = {
    disableDefaultUI: false,
    zoomControl: true,
    scrollwheel: true,
    gestureHandling: 'cooperative'
  };

  return (
    <div ref={ref} className="w-full md:w-1/2 relative h-[50vh] md:h-full">
      <Image fill alt={store.name} src={store.image} className="object-cover" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ y: 0 }}
          className="text-center px-4"
          transition={{ duration: 0.3 }}
          animate={{
            y: isActive ? -100 : 0
          }}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">
            {store.name}
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-sm md:text-base text-white text-center">
              {store.adress}
            </p>
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                onToggle();
              }}
              variant="link"
              className="text-white underline text-sm md:text-base"
            >
              {isActive ? 'cerrar' : 'cómo llegar'}
            </Button>
          </div>
        </motion.div>
        <AnimatePresence>
          {isActive && (
            <motion.div
              key="map"
              exit={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 50 }}
              className="absolute bottom-0 left-0 right-0 h-[50%] md:h-[60%] z-10"
            >
              <GoogleMap
                mapContainerStyle={{
                  width: '100%',
                  height: '100%'
                }}
                zoom={18}
                center={{ lat: store.lat, lng: store.lng }}
                options={mapOptions}
              >
                <Marker position={{ lat: store.lat, lng: store.lng }} />
              </GoogleMap>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
