import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AnchorSection({
  id,
  eyebrow,
  title,
}: {
  id: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-charcoal/8 px-6 py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <AnimatedSection>
          <SectionLabel>
            <span className="mx-auto">{eyebrow}</span>
          </SectionLabel>
          <h2 className="mt-4 font-serif text-2xl font-semibold text-charcoal sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal-soft">
            This section is coming soon. Check back shortly for more details.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full border border-charcoal/15 px-6 py-2.5 text-sm font-medium text-charcoal transition-colors hover:border-rose-dark hover:text-rose-dark"
          >
            Get in Touch
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
