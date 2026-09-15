import type { Metadata } from "next";
import { Conference } from "@/components/Conference";

export const metadata: Metadata = {
  title: "Conference",
  description:
    "Conferences, talks, and speaking engagements featuring Bremz Flora.",
};

export default function ConferencePage() {
  return <Conference />;
}
