import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Mic } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
import { conferences } from "@/data/conferences";

export function Conference() {
  const [featured, ...rest] = conferences;

  return (
    <section id="conference" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mx-auto max-w-xl text-center">
          <SectionLabel>
            <span className="mx-auto">Conference</span>
          </SectionLabel>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
            Conferences, Talks &amp; Conversations
          </h2>
        </AnimatedSection>

        <AnimatedSection
          delay={0.1}
          className="mt-14 grid overflow-hidden rounded-[2rem] border border-charcoal/8 bg-white/60 lg:grid-cols-2"
        >
          <div className="relative aspect-[16/10] lg:aspect-auto">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <span className="w-fit rounded-full bg-blush/70 px-3 py-1 text-xs font-semibold tracking-wide text-rose-dark uppercase">
              Featured
            </span>
            <h3 className="mt-4 font-serif text-2xl font-semibold text-charcoal sm:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-4 leading-relaxed text-charcoal-soft italic">
              &ldquo;{featured.description}&rdquo;
            </p>
            <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-charcoal-soft">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-rose-dark" />
                <dd>{featured.date}</dd>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-rose-dark" />
                <dd>{featured.location}</dd>
              </div>
              <div className="flex items-center gap-2">
                <Mic size={16} className="text-rose-dark" />
                <dd>{featured.topic}</dd>
              </div>
            </dl>
            <Link
              href="/contact"
              className="mt-8 w-fit rounded-full bg-charcoal px-7 py-3 text-sm font-medium text-ivory transition-transform duration-200 hover:-translate-y-0.5 hover:bg-rose-dark"
            >
              Invite Bremz to Speak
            </Link>
          </div>
        </AnimatedSection>

        <StaggerGrid className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((event) => (
            <StaggerItem
              key={event.id}
              className="group overflow-hidden rounded-3xl border border-charcoal/8 bg-white/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-dark/25 hover:shadow-[0_25px_45px_-25px_rgba(114,74,88,0.35)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold text-charcoal">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                  {event.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-charcoal-soft">
                  <span>{event.date}</span>
                  <span aria-hidden="true">•</span>
                  <span>{event.location}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
