import type { Metadata } from "next";
import { PlaceholderSection } from "@/components/PlaceholderSection";
import { AnchorSection } from "@/components/AnchorSection";

export const metadata: Metadata = {
  title: "Branches",
  description: "Branches — coming soon.",
};

const sections = [
  { id: "pampanga", title: "Pampanga" },
  { id: "baguio", title: "Baguio" },
  { id: "ncr", title: "NCR" },
  { id: "cebu", title: "Cebu" },
  { id: "bacolod", title: "Bacolod" },
  { id: "pangasinan", title: "Pangasinan" },
  { id: "rizal", title: "Rizal" },
];

export default function Page() {
  return (
    <>
      <PlaceholderSection eyebrow="Branches" title="Branches" />
      {sections.map((section) => (
        <AnchorSection
          key={section.id}
          id={section.id}
          eyebrow="Branches"
          title={section.title}
        />
      ))}
    </>
  );
}
