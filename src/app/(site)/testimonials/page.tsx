import type { Metadata } from "next";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { VlogsSection } from "@/components/VlogsSection";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Real experiences and stories from iWorth International Corporation community members, entrepreneurs, clients, and partners.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Testimonials />
      <Gallery />
      <VlogsSection />
    </>
  );
}
