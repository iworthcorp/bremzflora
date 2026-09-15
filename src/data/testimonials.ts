export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  position: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Bremz didn't just manage our social channels, she rebuilt how we think about our brand. Within two quarters our engagement tripled and, more importantly, the right clients started finding us.",
    name: "Andrea Villanueva",
    position: "Founder, Casa Marbella Interiors",
    initials: "AV",
  },
  {
    id: "t2",
    quote:
      "What stood out was how strategic she is. Every content decision was tied back to a business goal, not just what looked good. That mindset shift changed how our whole team approaches marketing.",
    name: "Marco Dela Peña",
    position: "Business Development Lead, Northbridge Logistics",
    initials: "MD",
  },
  {
    id: "t3",
    quote:
      "We came in needing a rebrand and left with a full growth strategy. Bremz has a rare ability to make big ideas feel executable, and her follow-through is just as strong as her thinking.",
    name: "Isabel Cruz",
    position: "CEO, Lumine Skincare",
    initials: "IC",
  },
  {
    id: "t4",
    quote:
      "Working with Bremz felt less like hiring a consultant and more like gaining a strategic partner who genuinely cared about our long-term growth, not just quick wins.",
    name: "Jonathan Reyes",
    position: "Director, Reyes & Co. Law Group",
    initials: "JR",
  },
  {
    id: "t5",
    quote:
      "She has an incredible instinct for brand voice. Our messaging finally sounds like us, confident, warm, and consistent across every platform we use.",
    name: "Patricia Lim",
    position: "Co-Founder, The Wander Collective",
    initials: "PL",
  },
];
