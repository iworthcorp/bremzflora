import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PackagesIntro() {
  return (
    <section className="px-6 pt-16 pb-8 lg:px-10 lg:pt-24 lg:pb-12">
      <div className="mx-auto max-w-2xl text-center">
        <AnimatedSection>
          <SectionLabel>
            <span className="mx-auto">Dropshipping Packages</span>
          </SectionLabel>
          <h1 className="mt-4 font-serif text-3xl font-semibold text-balance text-charcoal sm:text-4xl lg:text-5xl">
            Start Your Online Selling Journey
          </h1>
          <p className="mt-6 text-base leading-relaxed text-charcoal-soft">
            Explore the available dropshipping packages and choose an option
            that matches your goals and business plans.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
