import type { Metadata } from "next";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Bremz Flora — a digital marketing and business development professional helping brands grow with intention.",
};

export default function AboutPage() {
  return <About />;
}
