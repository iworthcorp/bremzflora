import Link from "next/link";
import { Building2, Phone, User } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/ContactForm";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TikTokIcon,
} from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/site-config";

const contactNumber = "0906 359 1597";
const contactTel = "+639063591597";

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedinIcon },
  { label: "Instagram", href: siteConfig.social.instagram, icon: InstagramIcon },
  { label: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
  { label: "TikTok", href: siteConfig.social.tiktok, icon: TikTokIcon },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mx-auto max-w-xl text-center">
          <SectionLabel>
            <span className="mx-auto">Contact</span>
          </SectionLabel>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-charcoal-soft">
            Interested in learning more about iWorth International
            Corporation?
          </p>
          <p className="mt-2 text-charcoal-soft">
            Contact Bremen Fomaneg-Flora for inquiries about the platform,
            packages, services, activities, and community.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <AnimatedSection className="lg:col-span-2">
            <div className="space-y-6 rounded-3xl border border-charcoal/8 bg-white/60 p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush/70 text-rose-dark">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-xs font-medium text-charcoal-soft">
                    Contact Number
                  </p>
                  <a
                    href={`tel:${contactTel}`}
                    className="text-sm font-medium text-charcoal hover:text-rose-dark"
                  >
                    {contactNumber}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lavender/70 text-charcoal">
                  <User size={18} />
                </span>
                <div>
                  <p className="text-xs font-medium text-charcoal-soft">
                    Contact Person
                  </p>
                  <p className="text-sm font-medium text-charcoal">
                    Bremen Fomaneg-Flora
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage/70 text-charcoal">
                  <Building2 size={18} />
                </span>
                <div>
                  <p className="text-xs font-medium text-charcoal-soft">
                    Branch
                  </p>
                  <p className="text-sm font-medium text-charcoal">
                    iWorth International Corporation – Baguio, Benguet
                    Branch
                  </p>
                </div>
              </div>

              <div className="border-t border-charcoal/10 pt-6">
                <p className="mb-3 text-xs font-medium text-charcoal-soft">
                  Follow along
                </p>
                <div className="flex gap-3">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:border-rose-dark hover:text-rose-dark"
                    >
                      <Icon size={18} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="lg:col-span-3">
            <div className="rounded-3xl border border-charcoal/8 bg-white/60 p-8 sm:p-10">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
