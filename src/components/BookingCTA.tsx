import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { OrganicShape } from "@/components/ui/OrganicShape";

export function BookingCTA() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-gradient-to-b from-blush/60 via-cream to-ivory px-6 py-28 lg:px-10 lg:py-36"
    >
      <OrganicShape
        color="lavender"
        className="-top-16 -left-16 h-80 w-80 opacity-50"
      />
      <OrganicShape
        color="sage"
        className="-right-16 -bottom-16 h-80 w-80 opacity-50"
      />

      <AnimatedSection className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl font-semibold text-balance text-charcoal sm:text-4xl lg:text-5xl">
          Ready to Grow Your Brand?
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-charcoal-soft">
          Let&apos;s talk about your goals, challenges, and
          opportunities—and explore how strategy, creativity, and digital
          marketing can move your business forward.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="w-full rounded-full bg-charcoal px-9 py-4 text-sm font-medium text-ivory transition-transform duration-200 hover:-translate-y-0.5 hover:bg-rose-dark sm:w-auto"
          >
            Book a Session
          </Link>
          <Link
            href="/contact"
            className="w-full rounded-full border border-charcoal/25 px-9 py-4 text-sm font-medium text-charcoal transition-colors duration-200 hover:border-rose-dark hover:text-rose-dark sm:w-auto"
          >
            Send Me a Message
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
