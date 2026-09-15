import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { BookingCTA } from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bremz Flora to strengthen your brand, improve your digital presence, or explore a collaboration.",
};

export default function ContactPage() {
  return (
    <>
      <Contact />
      <BookingCTA />
    </>
  );
}
