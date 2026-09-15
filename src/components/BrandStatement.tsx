import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { OrganicShape } from "@/components/ui/OrganicShape";

export function BrandStatement() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blush via-cream to-lavender px-6 py-28 lg:px-10 lg:py-36">
      <OrganicShape
        color="rose"
        className="top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 opacity-30"
      />
      <AnimatedSection className="relative mx-auto max-w-3xl text-center">
        <p className="font-serif text-3xl leading-tight font-semibold text-balance text-charcoal sm:text-4xl lg:text-5xl">
          &ldquo;Your brand has a story.
          <br />
          Let&apos;s make it worth remembering.&rdquo;
        </p>
        <div className="mx-auto mt-8 h-px w-16 bg-charcoal/20" />
      </AnimatedSection>
    </section>
  );
}
