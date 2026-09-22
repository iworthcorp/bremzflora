import type { Metadata } from "next";
import { PackagesIntro } from "@/components/PackagesIntro";
import { PackageShowcase } from "@/components/PackageShowcase";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Dropshipping Packages",
  description:
    "Explore the i-Seller, Gold Seller, and Elite Seller dropshipping packages and choose an option that matches your goals and business plans.",
};

export default function Page() {
  return (
    <>
      <PackagesIntro />
      {packages.map((pkg) => (
        <PackageShowcase
          key={pkg.id}
          id={pkg.id}
          eyebrow="Dropshipping Packages"
          title={pkg.title}
          price={pkg.price}
          description={pkg.description}
          inclusions={pkg.inclusions}
          closingLine={pkg.closingLine}
          thumbnail={pkg.thumbnail}
          fullImage={pkg.fullImage}
          fullImageWidth={pkg.fullImageWidth}
          fullImageHeight={pkg.fullImageHeight}
          imageAlt={pkg.imageAlt}
        />
      ))}
      <section className="border-t border-charcoal/8 px-6 py-10 lg:px-10">
        <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-charcoal-soft">
          Package inclusions, requirements, availability, and terms should be
          confirmed before purchase.
        </p>
      </section>
    </>
  );
}
