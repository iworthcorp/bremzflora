import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
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
            Let&apos;s Create Something Meaningful
          </h2>
          <p className="mt-4 text-charcoal-soft">
            Whether you&apos;re looking to strengthen your brand, improve
            your digital presence, develop a marketing strategy, or explore
            a collaboration, I&apos;d love to hear from you.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <AnimatedSection className="lg:col-span-2">
            <div className="space-y-6 rounded-3xl border border-charcoal/8 bg-white/60 p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush/70 text-rose-dark">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-xs font-medium text-charcoal-soft">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm font-medium text-charcoal hover:text-rose-dark"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lavender/70 text-charcoal">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs font-medium text-charcoal-soft">Location</p>
                  <p className="text-sm font-medium text-charcoal">
                    {siteConfig.location}
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
