import {
  Rocket,
  Building2,
  ShoppingCart,
  Briefcase,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import { audiences } from "@/data/about";

const icons: LucideIcon[] = [Rocket, Building2, ShoppingCart, Briefcase, Sprout];

export function WhoWeServeSection() {
  return (
    <section
      id="who-we-serve"
      className="scroll-mt-24 border-t border-charcoal/8 px-6 py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mx-auto max-w-xl text-center">
          <SectionLabel>
            <span className="mx-auto">About</span>
          </SectionLabel>
          <h2 className="mt-4 font-serif text-2xl font-semibold text-charcoal sm:text-3xl">
            Who We Serve
          </h2>
        </AnimatedSection>

        <StaggerGrid className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={audience.title}>
                <SpotlightCard className="group relative h-full rounded-3xl border border-charcoal/8 bg-white/60 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-dark/30 hover:shadow-[0_25px_45px_-25px_rgba(114,74,88,0.35)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush/70 text-rose-dark transition-colors duration-300 group-hover:bg-rose-dark group-hover:text-white">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-charcoal">
                    {audience.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                    {audience.description}
                  </p>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
