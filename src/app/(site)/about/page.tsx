import type { Metadata } from "next";
import { About } from "@/components/About";
import { AnchorSection } from "@/components/AnchorSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Bremz Flora — a digital marketing and business development professional helping brands grow with intention.",
};

const sections = [
  { id: "profile", title: "Profile" },
  { id: "what-we-do", title: "What We Do" },
  { id: "who-we-serve", title: "Who We Serve" },
  { id: "mission", title: "Mission" },
  { id: "vision", title: "Vision" },
];

export default function AboutPage() {
  return (
    <>
      <About />
      {sections.map((section) => (
        <AnchorSection
          key={section.id}
          id={section.id}
          eyebrow="About"
          title={section.title}
        />
      ))}
    </>
  );
}
