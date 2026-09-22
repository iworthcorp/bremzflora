import type { Metadata } from "next";
import { About } from "@/components/About";
import { AnchorSection } from "@/components/AnchorSection";
import { ProfileSection } from "@/components/ProfileSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { WhoWeServeSection } from "@/components/WhoWeServeSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Bremz Flora — a digital marketing and business development professional helping brands grow with intention.",
};

const sections = [
  {
    id: "mission",
    title: "Mission",
    description:
      "To connect individuals with modern digital-business opportunities, practical resources, services, and communities that support entrepreneurship, continuous learning, and personal growth.",
  },
  {
    id: "vision",
    title: "Vision",
    description:
      "To build a connected community of empowered entrepreneurs and individuals who use digital technology, innovation, and continuous learning to create new possibilities for their future.",
  },
];

export default function AboutPage() {
  return (
    <>
      <About />
      <ProfileSection />
      <WhatWeDoSection />
      <WhoWeServeSection />
      {sections.map((section) => (
        <AnchorSection
          key={section.id}
          id={section.id}
          eyebrow="About"
          title={section.title}
          description={section.description}
        />
      ))}
    </>
  );
}
