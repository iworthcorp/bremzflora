import type { Metadata } from "next";
import { PlaceholderSection } from "@/components/PlaceholderSection";
import { AnchorSection } from "@/components/AnchorSection";

export const metadata: Metadata = {
  title: "Dropshipping Packages",
  description: "Dropshipping Packages — coming soon.",
};

const sections = [
  { id: "i-seller", title: "i-Seller Package" },
  { id: "gold-seller", title: "Gold Seller Package" },
  { id: "elite-seller", title: "Elite Seller Package" },
];

export default function Page() {
  return (
    <>
      <PlaceholderSection
        eyebrow="Dropshipping Packages"
        title="Dropshipping Packages"
      />
      {sections.map((section) => (
        <AnchorSection
          key={section.id}
          id={section.id}
          eyebrow="Dropshipping Packages"
          title={section.title}
        />
      ))}
    </>
  );
}
