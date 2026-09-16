import type { Metadata } from "next";
import { Testimonials } from "@/components/Testimonials";
import { AnchorSection } from "@/components/AnchorSection";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Kind words from the brands and businesses Bremz Flora has worked with.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Testimonials />
      <AnchorSection id="vlogs" eyebrow="Testimonials" title="Vlogs" />
    </>
  );
}
