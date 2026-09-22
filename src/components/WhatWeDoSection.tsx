import {
  ShoppingBag,
  Truck,
  Megaphone,
  Bot,
  ShieldCheck,
  LineChart,
  Sparkles,
  Briefcase,
  GraduationCap,
  Users,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import { offerings, whatWeDoSummary } from "@/data/about";

const icons: LucideIcon[] = [
  ShoppingBag,
  Truck,
  Megaphone,
  Bot,
  ShieldCheck,
  LineChart,
  Sparkles,
  Briefcase,
  GraduationCap,
  Users,
];

export function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="scroll-mt-24 border-t border-charcoal/8 px-6 py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <SectionLabel>
            <span className="mx-auto">About</span>
          </SectionLabel>
          <h2 className="mt-4 font-serif text-2xl font-semibold text-charcoal sm:text-3xl">
            What We Do
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal-soft">
            We provide an integrated platform where individuals can explore:
          </p>
        </AnimatedSection>

        <StaggerGrid className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {offerings.map((offering, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={offering}>
                <SpotlightCard className="group relative flex h-full flex-col items-center gap-3 rounded-2xl border border-charcoal/8 bg-white/60 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-rose-dark/30 hover:shadow-[0_20px_35px_-20px_rgba(114,74,88,0.35)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blush/70 text-rose-dark transition-colors duration-300 group-hover:bg-rose-dark group-hover:text-white">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-medium text-charcoal">
                    {offering}
                  </p>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerGrid>

        <AnimatedSection delay={0.1} className="mx-auto mt-10 max-w-2xl text-center">
          <p className="leading-relaxed text-charcoal-soft">
            {whatWeDoSummary}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
