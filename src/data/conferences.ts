export type ConferenceEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  topic: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const conferences: ConferenceEvent[] = [
  {
    id: "c1",
    title: "Digital Transformation & Brand Growth Summit",
    date: "March 14, 2026",
    location: "Manila, Philippines",
    topic: "Building Digital Experiences That Last",
    description:
      "Exploring how businesses can build meaningful digital experiences while staying relevant in an increasingly connected world.",
    image: "/images/conference-1.svg",
    featured: true,
  },
  {
    id: "c2",
    title: "Women in Business Leadership Forum",
    date: "November 8, 2025",
    location: "Cebu City, Philippines",
    topic: "Personal Branding for Business Leaders",
    description:
      "A conversation on how founders and executives can build a personal brand that reinforces, rather than competes with, their company's brand.",
    image: "/images/conference-2.svg",
  },
  {
    id: "c3",
    title: "Content & Community Conference",
    date: "August 22, 2025",
    location: "Davao City, Philippines",
    topic: "Content Strategy for Long-Term Growth",
    description:
      "A workshop on building content systems that compound over time instead of chasing short-lived trends.",
    image: "/images/conference-3.svg",
  },
  {
    id: "c4",
    title: "Startup Growth Roundtable",
    date: "May 3, 2025",
    location: "Virtual Event",
    topic: "Marketing on a Founder's Budget",
    description:
      "Practical frameworks for early-stage founders to market with intention before scaling their budgets.",
    image: "/images/conference-4.svg",
  },
];
