import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PlaceholderSection({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <section className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <AnimatedSection>
          <SectionLabel>
            <span className="mx-auto">{eyebrow}</span>
          </SectionLabel>
          <h1 className="mt-4 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-charcoal-soft">
            This page is coming soon. Check back shortly for more details.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-charcoal px-7 py-3 text-sm font-medium text-ivory transition-transform duration-200 hover:-translate-y-0.5 hover:bg-rose-dark"
          >
            Get in Touch
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
