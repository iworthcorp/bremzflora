import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PlatformIntro() {
  return (
    <section className="px-6 pt-16 pb-8 lg:px-10 lg:pt-24 lg:pb-12">
      <div className="mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <SectionLabel>
            <span className="mx-auto">All-in-1 Platform</span>
          </SectionLabel>
          <h1 className="mt-4 font-serif text-3xl font-semibold text-balance text-charcoal sm:text-4xl lg:text-5xl">
            Everything Connected in One Ecosystem
          </h1>
        </AnimatedSection>
      </div>
    </section>
  );
}
