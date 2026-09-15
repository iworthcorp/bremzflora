import {
  Megaphone,
  Share2,
  PenTool,
  FileText,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import { services } from "@/data/services";

const icons: LucideIcon[] = [Megaphone, Share2, PenTool, FileText, Handshake];

export function Expertise() {
  return (
    <section id="expertise" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mx-auto max-w-xl text-center">
          <SectionLabel>
            <span className="mx-auto">What I Offer</span>
          </SectionLabel>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
            What I Do
          </h2>
        </AnimatedSection>

        <StaggerGrid className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={service.number}>
                <SpotlightCard className="group relative rounded-3xl border border-charcoal/8 bg-white/60 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-dark/30 hover:shadow-[0_25px_45px_-25px_rgba(114,74,88,0.35)]">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush/70 text-rose-dark transition-colors duration-300 group-hover:bg-rose-dark group-hover:text-white">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="font-serif text-3xl font-semibold text-charcoal/10">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-charcoal">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                    {service.description}
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
