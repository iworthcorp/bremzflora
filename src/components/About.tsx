import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { OrganicShape } from "@/components/ui/OrganicShape";

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-20">
        <AnimatedSection className="relative mx-auto w-full max-w-md">
          <OrganicShape
            color="sage"
            className="-top-8 -left-8 h-32 w-32 opacity-70"
          />
          <div className="relative overflow-hidden rounded-[2.5rem] rounded-bl-[6rem] shadow-[0_30px_60px_-25px_rgba(114,74,88,0.3)]">
            <Image
              src="/images/about-portrait.svg"
              alt="iWorth International Corporation, Baguio, Benguet Branch"
              width={900}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-6 -rotate-1 font-serif text-lg text-rose-dark italic">
            community, with purpose.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionLabel>About</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
            Welcome to iWorth International Corporation
          </h2>

          <p className="mt-6 font-serif text-xl text-charcoal">
            Baguio, Benguet Branch
          </p>

          <p className="mt-4 leading-relaxed text-charcoal-soft">
            iWorth International Corporation (Baguio, Benguet Branch)
            brings together entrepreneurs, aspiring business owners,
            professionals, online sellers, and growth-minded individuals
            through an integrated business and development platform.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal-soft">
            Led by Bremen Fomaneg-Flora, the Baguio, Benguet Branch
            provides access to different areas of digital business,
            entrepreneurship, learning, networking, and personal
            development.
          </p>

          <blockquote className="mt-6 border-l-2 border-rose-dark/40 pl-5 font-serif text-lg font-semibold tracking-wide text-charcoal uppercase">
            One Platform. Multiple Possibilities.
          </blockquote>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-rose-dark uppercase underline decoration-rose-dark/30 underline-offset-4 transition-colors hover:text-charcoal"
          >
            Get in Touch
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
