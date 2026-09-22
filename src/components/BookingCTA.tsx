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
          Your Next Step Starts Here
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-charcoal-soft">
          Explore digital business, entrepreneurship, personal development,
          and community opportunities through iWorth International
          Corporation.
        </p>

        <p className="mt-10 text-xs font-semibold tracking-[0.25em] text-rose-dark uppercase">
          Ready to Get Started?
        </p>
        <a
          href="tel:+639063591597"
          className="mt-3 inline-block font-serif text-2xl font-semibold text-charcoal transition-colors hover:text-rose-dark"
        >
          0906 359 1597
        </a>

        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="w-full rounded-full bg-charcoal px-9 py-4 text-sm font-medium text-ivory transition-transform duration-200 hover:-translate-y-0.5 hover:bg-rose-dark sm:w-auto"
          >
            Book Now
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
