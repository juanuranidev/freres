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
    <div ref={ref} className="w-1/2 relative">
      <Image fill alt={store.name} src={store.image} className="object-cover" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ y: 0 }}
          className="text-center"
          transition={{ duration: 0.3 }}
          animate={{
            y: isActive ? -250 : 0
          }}
        >
          <h2 className="text-3xl font-medium text-white">{store.name}</h2>
          <div className="flex items-center">
            <p className="text-white">{store.adress}</p>
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                onToggle();
              }}
              variant="link"
              className="text-white underline"
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
              className="absolute bottom-0 left-0 right-0 h-[60%] z-10"
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
