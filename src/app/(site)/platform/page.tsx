import type { Metadata } from "next";
import { PlaceholderSection } from "@/components/PlaceholderSection";
import { AnchorSection } from "@/components/AnchorSection";

export const metadata: Metadata = {
  title: "All-in-1 Platform",
  description: "All-in-1 Platform — coming soon.",
};

const sections = [
  { id: "ecommerce", title: "eCommerce" },
  { id: "dropshipping", title: "Dropshipping" },
  { id: "digital-marketing", title: "Digital Marketing" },
  { id: "ai-automation", title: "AI Automation" },
  { id: "insurance", title: "Insurance" },
  { id: "trading-community", title: "Trading Community" },
  { id: "personality-development", title: "Personality Development" },
  { id: "services", title: "Services" },
];

export default function Page() {
  return (
    <>
      <PlaceholderSection eyebrow="All-in-1 Platform" title="All-in-1 Platform" />
      {sections.map((section) => (
        <AnchorSection
          key={section.id}
          id={section.id}
          eyebrow="All-in-1 Platform"
          title={section.title}
        />
      ))}
    </>
  );
}
