import type { Metadata } from "next";
import { PlatformIntro } from "@/components/PlatformIntro";
import { AnchorSection } from "@/components/AnchorSection";
import { platformSections } from "@/data/platform";

export const metadata: Metadata = {
  title: "All-in-1 Platform",
  description:
    "Everything connected in one ecosystem — eCommerce, dropshipping, digital marketing, AI automation, insurance, trading community, personality development, and services.",
};

export default function Page() {
  return (
    <>
      <PlatformIntro />
      {platformSections.map((section) => (
        <AnchorSection
          key={section.id}
          id={section.id}
          eyebrow="All-in-1 Platform"
          title={section.title}
          description={section.description}
        />
      ))}
    </>
  );
}
