"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Maximize2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { OrganicShape } from "@/components/ui/OrganicShape";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Lightbox } from "@/components/Lightbox";

export function PackageShowcase({
  id,
  eyebrow,
  title,
  tagline,
  thumbnail,
  fullImage,
  fullImageWidth = 1672,
  fullImageHeight = 941,
  imageAlt,
}: {
  id: string;
  eyebrow: string;
  title: string;
  tagline: string;
  thumbnail: string;
  fullImage: string;
  fullImageWidth?: number;
  fullImageHeight?: number;
  imageAlt: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id={id}
      className="relative scroll-mt-24 overflow-hidden border-t border-charcoal/8 px-6 py-20 lg:px-10 lg:py-28"
    >
      <OrganicShape
        color="sage"
        className="-top-10 -left-16 h-56 w-56 opacity-50"
      />
      <OrganicShape
        color="lavender"
        duration={11}
        className="-right-10 -bottom-16 h-64 w-64 opacity-40"
      />

      <div className="relative mx-auto max-w-xl text-center">
        <AnimatedSection>
          <SectionLabel>
            <span className="mx-auto">{eyebrow}</span>
          </SectionLabel>
          <h2 className="mt-4 font-serif text-2xl font-semibold text-charcoal sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-charcoal-soft">
            {tagline}
          </p>
        </AnimatedSection>
      </div>

      <AnimatedSection
        delay={0.1}
        className="relative mx-auto mt-12 max-w-sm"
      >
        <SpotlightCard className="group relative rounded-[2rem] border border-charcoal/10 shadow-[0_25px_50px_-25px_rgba(114,74,88,0.35)] transition-shadow duration-300 hover:shadow-[0_35px_70px_-25px_rgba(114,74,88,0.5)]">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label={`View full ${title} details`}
            className="relative block aspect-[2/3] w-full overflow-hidden rounded-[2rem] focus-visible:outline-2 focus-visible:outline-rose-dark"
          >
            <Image
              src={thumbnail}
              alt={imageAlt}
              fill
              sizes="(min-width: 640px) 384px, 80vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <Maximize2 size={16} />
            </span>
            <span className="absolute right-4 bottom-4 left-4 translate-y-2 text-left text-xs font-medium tracking-wide text-white uppercase opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View full package details
            </span>
          </button>
        </SpotlightCard>
      </AnimatedSection>

      <div className="relative mt-10 flex justify-center">
        <Link
          href="/contact"
          className="rounded-full bg-charcoal px-7 py-3 text-sm font-medium text-ivory transition-transform duration-200 hover:-translate-y-0.5 hover:bg-rose-dark"
        >
          Get Started
        </Link>
      </div>

      <Lightbox
        images={[
          {
            id,
            src: fullImage,
            width: fullImageWidth,
            height: fullImageHeight,
            caption: imageAlt,
          },
        ]}
        index={isOpen ? 0 : null}
        onClose={() => setIsOpen(false)}
        onIndexChange={() => {}}
      />
    </section>
  );
}
