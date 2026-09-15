"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/data/gallery";

type LightboxProps = {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const isOpen = index !== null;
  const current = index !== null ? images[index] : null;

  const goTo = useCallback(
    (next: number) => {
      const total = images.length;
      onIndexChange(((next % total) + total) % total);
    },
    [images.length, onIndexChange]
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index !== null) goTo(index + 1);
      if (e.key === "ArrowLeft" && index !== null) goTo(index - 1);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, index, goTo, onClose]);

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery image"
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo(index! - 1);
            }}
            aria-label="Previous image"
            className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo(index! + 1);
            }}
            aria-label="Next image"
            className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={22} />
          </button>

          <motion.figure
            key={current.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="max-h-[85vh] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] overflow-hidden rounded-2xl">
              <Image
                src={current.src}
                alt={current.caption}
                width={current.width}
                height={current.height}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-white/80">
              {current.caption}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
