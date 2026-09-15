import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { BrandStatement } from "@/components/BrandStatement";
import { BookingCTA } from "@/components/BookingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <BrandStatement />
      <BookingCTA />
    </>
  );
}
