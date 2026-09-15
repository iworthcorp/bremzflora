import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
      <h1 className="font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
        Terms &amp; Conditions
      </h1>
      <p className="mt-2 text-sm text-charcoal-soft">Last updated: January 2026</p>

      <div className="mt-10 space-y-6 text-sm leading-relaxed text-charcoal-soft">
        <p>
          By accessing and using this website, you agree to the following
          terms and conditions.
        </p>
        <div>
          <h2 className="mb-2 font-serif text-lg font-semibold text-charcoal">
            Use of Content
          </h2>
          <p>
            All content on this site, including text, images, and branding,
            is the property of {siteConfig.name} unless otherwise noted, and
            may not be reproduced without permission.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-lg font-semibold text-charcoal">
            Bookings &amp; Inquiries
          </h2>
          <p>
            Submitting a booking or contact request does not guarantee
            availability. All engagements are subject to confirmation and a
            separate agreement outlining scope and terms.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-lg font-semibold text-charcoal">
            Limitation of Liability
          </h2>
          <p>
            This website and its content are provided &ldquo;as is&rdquo;
            without warranties of any kind, express or implied.
          </p>
        </div>
        <p className="text-xs">
          This is placeholder content. Replace with terms reviewed by legal
          counsel before publishing to production.
        </p>
      </div>
    </div>
  );
}
