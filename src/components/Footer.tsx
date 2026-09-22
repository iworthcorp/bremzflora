import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TikTokIcon,
} from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Conference", href: "/conference" },
  { label: "Gallery", href: "/testimonials#gallery" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedinIcon },
  { label: "Instagram", href: siteConfig.social.instagram, icon: InstagramIcon },
  { label: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
  { label: "TikTok", href: siteConfig.social.tiktok, icon: TikTokIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-cream/60 px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-serif text-lg font-semibold tracking-[0.18em] text-charcoal"
            >
              iWorth International Corporation
            </Link>
            <p className="mt-1 text-xs font-semibold tracking-[0.2em] text-rose-dark uppercase">
              Baguio, Benguet Branch
            </p>
            <p className="mt-3 text-sm font-medium text-charcoal-soft">
              Bremen Fomaneg-Flora
            </p>
            <p className="mt-3 font-serif text-sm text-charcoal italic">
              One Platform. Many Possibilities.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-charcoal-soft">
              eCommerce • Dropshipping • Digital Marketing • AI Automation •
              Insurance • Trading Community • Personality Development •
              Services
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:border-rose-dark hover:text-rose-dark"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm text-charcoal-soft sm:flex sm:flex-col">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-rose-dark">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="hover:text-rose-dark">
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-charcoal/10 pt-8 text-xs text-charcoal-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 iWorth International Corporation – Baguio, Benguet
            Branch. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-rose-dark">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-rose-dark">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
