"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Sparkles } from "lucide-react";
import { OrganicShape } from "@/components/ui/OrganicShape";

const expertiseList = [
  "Digital Marketing",
  "Brand Strategy",
  "Content",
  "Social Media",
  "Business Development",
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const parallaxFast = useTransform(scrollYProgress, [0, 1], [0, -90]);

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden px-6 pt-16 pb-24 lg:px-10 lg:pt-24 lg:pb-32"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={shouldReduceMotion ? undefined : { y: parallaxSlow }}
      >
        <OrganicShape
          color="blush"
          className="-top-24 -left-24 h-72 w-72 opacity-70"
        />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={shouldReduceMotion ? undefined : { y: parallaxFast }}
      >
        <OrganicShape
          color="lavender"
          className="top-40 -right-16 h-80 w-80 opacity-60"
        />
      </motion.div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div>
          <motion.p
            {...fadeUp(0)}
            className="text-xs font-semibold tracking-[0.25em] text-rose-dark uppercase"
          >
            Digital Marketing • Branding • Business Development
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 font-serif text-4xl leading-[1.1] font-semibold text-balance text-charcoal sm:text-5xl lg:text-6xl"
          >
            Building Brands That Connect, Grow &amp; Make an Impact.
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-soft"
          >
            Helping businesses and personal brands turn ideas into meaningful
            digital experiences through strategic marketing, compelling
            content, and intentional brand building.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#booking"
              className="rounded-full bg-charcoal px-8 py-3.5 text-sm font-medium text-ivory transition-transform duration-200 hover:-translate-y-0.5 hover:bg-rose-dark"
            >
              Book a Session
            </Link>
            <Link
              href="#expertise"
              className="rounded-full border border-charcoal/20 px-8 py-3.5 text-sm font-medium text-charcoal transition-colors duration-200 hover:border-rose-dark hover:text-rose-dark"
            >
              Explore My Work
            </Link>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.15)}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <OrganicShape
            color="sage"
            className="-top-10 -right-10 h-40 w-40 opacity-80"
          />
          <OrganicShape
            color="rose"
            className="-bottom-8 -left-10 h-48 w-48 opacity-60"
          />

          <div className="relative overflow-hidden rounded-[3rem] rounded-tr-[6rem] border border-white/60 shadow-[0_30px_60px_-20px_rgba(114,74,88,0.35)]">
            <Image
              src="/images/hero-portrait.svg"
              alt="Portrait of Bremz Flora"
              width={900}
              height={1100}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <motion.div
            {...fadeUp(0.5)}
            className="absolute -bottom-8 left-1/2 w-64 -translate-x-1/2 rounded-2xl border border-charcoal/5 bg-white/95 p-5 shadow-[0_20px_40px_-15px_rgba(114,74,88,0.3)] backdrop-blur sm:-right-8 sm:left-auto sm:translate-x-0"
          >
            <div className="mb-2 flex items-center gap-2">
              <Sparkles size={16} className="text-rose-dark" />
              <p className="font-serif text-sm font-semibold text-charcoal">
                5+ Areas of Expertise
              </p>
            </div>
            <ul className="space-y-1 text-xs text-charcoal-soft">
              {expertiseList.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-rose-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
