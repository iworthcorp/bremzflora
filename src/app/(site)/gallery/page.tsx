import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Moments and milestones from conferences, workshops, and behind the scenes with Bremz Flora.",
};

export default function GalleryPage() {
  return <Gallery />;
}
