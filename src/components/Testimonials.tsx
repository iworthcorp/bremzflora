"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Avatar } from "@/components/ui/Avatar";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.85;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="mt-4 max-w-lg font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
              Kind Words From People I&apos;ve Worked With
            </h2>
          </div>
          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:border-rose-dark hover:text-rose-dark lg:hidden"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:border-rose-dark hover:text-rose-dark lg:hidden"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </AnimatedSection>

        <StaggerGrid
          ref={scrollerRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 lg:grid lg:snap-none lg:grid-cols-3 lg:overflow-visible"
        >
          {testimonials.map((t, i) => (
            <StaggerItem
              key={t.id}
              data-card
              className="relative w-[85%] shrink-0 snap-start rounded-3xl border border-charcoal/8 bg-white/70 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-dark/25 hover:shadow-[0_25px_45px_-25px_rgba(114,74,88,0.3)] sm:w-[60%] lg:w-auto lg:shrink"
            >
              <Quote
                className="absolute top-6 right-6 text-blush-dark"
                size={32}
                strokeWidth={1.5}
              />
              <p className="pr-6 text-sm leading-relaxed text-charcoal-soft">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar initials={t.initials} seed={i} />
                <div>
                  <p className="text-sm font-semibold text-charcoal">
                    {t.name}
                  </p>
                  <p className="text-xs text-charcoal-soft">{t.position}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
