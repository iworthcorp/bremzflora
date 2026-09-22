import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mx-auto max-w-xl text-center">
          <SectionLabel>
            <span className="mx-auto">Testimony</span>
          </SectionLabel>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
            Real Experiences • Real Stories
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal-soft">
            Discover the experiences and journeys of iWorth community
            members, entrepreneurs, clients, and partners.
          </p>
        </AnimatedSection>

        <StaggerGrid className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <StaggerItem
              key={t.id}
              className="relative rounded-3xl border border-charcoal/8 bg-white/70 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-dark/25 hover:shadow-[0_25px_45px_-25px_rgba(114,74,88,0.3)]"
            >
              <Quote
                className="text-blush-dark"
                size={28}
                strokeWidth={1.5}
              />
              <p className="mt-4 font-serif text-lg leading-relaxed text-charcoal">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-medium text-rose-dark">
                — {t.attribution}
              </p>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <p className="mx-auto mt-10 max-w-xl text-center text-xs leading-relaxed text-charcoal-soft">
          Testimonials should reflect genuine experiences and be published
          with the permission of the person quoted.
        </p>
      </div>
    </section>
  );
}
