import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
      <h1 className="font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-charcoal-soft">Last updated: January 2026</p>

      <div className="prose-neutral mt-10 space-y-6 text-sm leading-relaxed text-charcoal-soft">
        <p>
          This Privacy Policy explains how {siteConfig.name} (&ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects
          information submitted through this website.
        </p>
        <div>
          <h2 className="mb-2 font-serif text-lg font-semibold text-charcoal">
            Information We Collect
          </h2>
          <p>
            When you use our contact form, we collect the information you
            provide, such as your name, email address, company or brand
            name, and message. We do not collect this information through
            any other means on this site.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-lg font-semibold text-charcoal">
            How We Use Your Information
          </h2>
          <p>
            Information submitted through the contact form is used solely to
            respond to your inquiry and to communicate about potential
            collaboration. We do not sell or share your information with
            third parties for marketing purposes.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-lg font-semibold text-charcoal">
            Contact
          </h2>
          <p>
            If you have questions about this policy, please reach out via{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-rose-dark hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
        <p className="text-xs">
          This is placeholder content. Replace with a policy reviewed by
          legal counsel before publishing to production.
        </p>
      </div>
    </div>
  );
}
