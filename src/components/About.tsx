import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { OrganicShape } from "@/components/ui/OrganicShape";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/services";

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
              alt="Bremz Flora working at her desk"
              width={900}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-6 -rotate-1 font-serif text-lg text-rose-dark italic">
            strategy, with heart.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionLabel>About Bremz</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
            Strategy meets creativity.
          </h2>

          <p className="mt-6 font-serif text-xl text-charcoal">
            Hi, I&apos;m Bremz Flora.
          </p>

          <p className="mt-4 leading-relaxed text-charcoal-soft">
            I&apos;m a digital marketing and business development
            professional who helps businesses build stronger brands,
            communicate with clarity online, and create strategies that
            drive meaningful growth. My work sits at the intersection of
            creative thinking and business strategy, translating big
            ideas into plans that actually move the needle.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal-soft">
            Whether I&apos;m shaping a brand&apos;s voice, building a
            content roadmap, or opening the door to a new partnership, my
            goal stays the same: help people and businesses grow in a way
            that feels authentic and intentional.
          </p>

          <blockquote className="mt-6 border-l-2 border-rose-dark/40 pl-5 font-serif text-lg text-charcoal italic">
            &ldquo;Good marketing isn&apos;t just about being seen.
            It&apos;s about being remembered.&rdquo;
          </blockquote>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-rose-dark uppercase underline decoration-rose-dark/30 underline-offset-4 transition-colors hover:text-charcoal"
          >
            Let&apos;s Work Together
          </Link>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-charcoal/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </dd>
                <p className="mt-1 text-xs leading-snug text-charcoal-soft">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </AnimatedSection>
      </div>
    </section>
  );
}
