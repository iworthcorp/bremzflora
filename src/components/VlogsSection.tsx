import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const vlogTopics = [
  "eCommerce",
  "Dropshipping",
  "Digital Marketing",
  "AI Automation",
  "Entrepreneurship",
  "Business Development",
  "Personality Development",
  "Community Activities",
  "Events & Conferences",
  "Benguet Branch Updates",
];

export function VlogsSection() {
  return (
    <section
      id="vlogs"
      className="scroll-mt-24 border-t border-charcoal/8 px-6 py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <AnimatedSection>
          <SectionLabel>
            <span className="mx-auto">Vlogs</span>
          </SectionLabel>
          <h2 className="mt-4 font-serif text-2xl font-semibold text-charcoal sm:text-3xl">
            Learn • Connect • Grow
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal-soft">
            Follow the iWorth journey through videos featuring:
          </p>

          <ul className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-x-6 gap-y-2 text-left text-sm text-charcoal-soft">
            {vlogTopics.map((topic) => (
              <li key={topic} className="flex items-center gap-2">
                <span className="h-1 w-1 shrink-0 rounded-full bg-rose-dark" />
                {topic}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-charcoal px-7 py-3 text-sm font-medium text-ivory transition-transform duration-200 hover:-translate-y-0.5 hover:bg-rose-dark"
          >
            Watch Our Vlogs
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
