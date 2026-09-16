import type { Metadata } from "next";
import { PlaceholderSection } from "@/components/PlaceholderSection";
import { PackageShowcase } from "@/components/PackageShowcase";

export const metadata: Metadata = {
  title: "Dropshipping Packages",
  description: "Dropshipping Packages — coming soon.",
};

export default function Page() {
  return (
    <>
      <PlaceholderSection
        eyebrow="Dropshipping Packages"
        title="Dropshipping Packages"
      />
      <PackageShowcase
        id="i-seller"
        eyebrow="Dropshipping Packages"
        title="i-Seller Package"
        tagline="Your complete online business system in one package — everything you need to start, run, and grow."
        thumbnail="/images/packages/i-seller/portrait/image1.png"
        fullImage="/images/packages/i-seller/landscape/image1.png"
        imageAlt="i-Seller Dropshipper Package details: complete system, marketing tools, training and support, and business benefits for ₱599."
      />
      <PackageShowcase
        id="gold-seller"
        eyebrow="Dropshipping Packages"
        title="Gold Seller Package"
        tagline="More tools, more opportunities — everything in i-Seller, plus affiliate management and advanced training."
        thumbnail="/images/packages/i-seller/portrait/image2.png"
        fullImage="/images/packages/i-seller/landscape/image2.png"
        imageAlt="Gold Seller Package inclusions: affiliate profit, group sales bonus, digital marketing training, and insurance for ₱8,880."
      />
      <PackageShowcase
        id="elite-seller"
        eyebrow="Dropshipping Packages"
        title="Elite Seller Package"
        tagline="Build bigger, go further — everything in Gold, plus generation bonuses, car incentives, and elite training."
        thumbnail="/images/packages/i-seller/portrait/image3.png"
        fullImage="/images/packages/i-seller/landscape/image3.png"
        fullImageWidth={1670}
        fullImageHeight={942}
        imageAlt="Elite Seller Package inclusions: generation bonus, car and travel incentive, elite training, and trading community access for ₱35,999."
      />
    </>
  );
}
