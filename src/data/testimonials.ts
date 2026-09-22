export type Testimonial = {
  id: string;
  quote: string;
  attribution: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Your success story could be featured here.",
    attribution: "iWorth Community Member",
  },
  {
    id: "t2",
    quote: "Share your experience and journey with the community.",
    attribution: "iWorth Entrepreneur",
  },
];
