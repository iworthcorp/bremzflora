"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import { Lightbox } from "@/components/Lightbox";
import {
  galleryCategories,
  galleryImages,
  type GalleryCategory,
} from "@/data/gallery";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<
    GalleryCategory | "All"
  >("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="gallery" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mx-auto max-w-xl text-center">
          <SectionLabel>
            <span className="mx-auto">Gallery</span>
          </SectionLabel>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
            Moments &amp; Milestones
          </h2>
        </AnimatedSection>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-colors ${
                activeCategory === category
                  ? "bg-charcoal text-ivory"
                  : "bg-white/60 text-charcoal-soft hover:bg-blush/60"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <StaggerGrid className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filtered.map((image, i) => (
            <StaggerItem key={image.id} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-[0_0_0_0_rgba(114,74,88,0)] transition-shadow duration-300 hover:shadow-[0_25px_45px_-20px_rgba(114,74,88,0.4)] focus-visible:outline-2 focus-visible:outline-rose-dark"
              >
                <Image
                  src={image.src}
                  alt={image.caption}
                  width={image.width}
                  height={image.height}
                  className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute right-4 bottom-4 left-4 translate-y-3 text-left text-xs leading-snug text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {image.caption}
                </p>
              </button>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>

      <Lightbox
        images={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </section>
  );
}
