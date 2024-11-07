"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AnnouncementBar(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const announcements: string[] = [
    "6 CUOTAS SIN INTERÉS",
    "ENVIO GRATIS > $140.000",
    "Seguí tu envío",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white h-9 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs font-light"
        >
          {announcements[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
