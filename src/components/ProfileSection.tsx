import { Building2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { profile } from "@/data/about";

export function ProfileSection() {
  return (
    <section
      id="profile"
      className="scroll-mt-24 border-t border-charcoal/8 px-6 py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-3xl">
        <AnimatedSection className="text-center">
          <SectionLabel>
            <span className="mx-auto">About</span>
          </SectionLabel>
          <h2 className="mt-4 font-serif text-2xl font-semibold text-charcoal sm:text-3xl">
            Profile
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10 text-center">
          <h3 className="font-serif text-2xl font-semibold text-charcoal sm:text-3xl">
            {profile.name}
          </h3>
          <p className="mt-2 text-sm font-semibold tracking-[0.2em] text-rose-dark uppercase">
            {profile.roles.join(" • ")}
          </p>
        </AnimatedSection>

        <AnimatedSection
          delay={0.15}
          className="mx-auto mt-8 max-w-2xl space-y-4 text-center"
        >
          {profile.bio.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-charcoal-soft">
              {paragraph}
            </p>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-8 flex justify-center">
          <div className="flex max-w-xl items-start gap-4 rounded-3xl border border-charcoal/10 bg-white/60 p-6 text-left">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blush/70 text-rose-dark">
              <Building2 size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-serif text-lg font-semibold text-charcoal">
                {profile.affiliation.org}
              </p>
              <p className="text-xs font-semibold tracking-[0.15em] text-rose-dark uppercase">
                {profile.affiliation.branch}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                {profile.affiliation.description}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
