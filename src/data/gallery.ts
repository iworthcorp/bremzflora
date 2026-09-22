export type GalleryCategory =
  | "Business Conferences"
  | "Entrepreneurial Events"
  | "Community Gatherings"
  | "Training Sessions"
  | "Team Activities"
  | "Product Presentations"
  | "Networking Events"
  | "Business Milestones"
  | "Benguet Branch Activities";

export type GalleryImage = {
  id: string;
  src: string;
  width: number;
  height: number;
  category: GalleryCategory;
  caption: string;
};

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/gallery-1.svg",
    width: 900,
    height: 1200,
    category: "Business Conferences",
    caption: "Business conference session with the iWorth community.",
  },
  {
    id: "g2",
    src: "/images/gallery-2.svg",
    width: 900,
    height: 700,
    category: "Entrepreneurial Events",
    caption: "Entrepreneurial event exploring digital business opportunities.",
  },
  {
    id: "g3",
    src: "/images/gallery-3.svg",
    width: 900,
    height: 900,
    category: "Community Gatherings",
    caption: "Community gathering with iWorth members and partners.",
  },
  {
    id: "g4",
    src: "/images/gallery-4.svg",
    width: 900,
    height: 1300,
    category: "Training Sessions",
    caption: "Hands-on training session for aspiring entrepreneurs.",
  },
  {
    id: "g5",
    src: "/images/gallery-5.svg",
    width: 900,
    height: 780,
    category: "Team Activities",
    caption: "Team activity with the Baguio, Benguet Branch.",
  },
  {
    id: "g6",
    src: "/images/gallery-6.svg",
    width: 900,
    height: 1000,
    category: "Product Presentations",
    caption: "Product presentation to the iWorth community.",
  },
  {
    id: "g7",
    src: "/images/gallery-7.svg",
    width: 900,
    height: 700,
    category: "Networking Events",
    caption: "Networking event with entrepreneurs and business owners.",
  },
  {
    id: "g8",
    src: "/images/gallery-8.svg",
    width: 900,
    height: 1150,
    category: "Business Milestones",
    caption: "Celebrating a business milestone with the community.",
  },
  {
    id: "g9",
    src: "/images/gallery-9.svg",
    width: 900,
    height: 900,
    category: "Benguet Branch Activities",
    caption: "Benguet Branch activity with iWorth members.",
  },
];

export const galleryCategories: (GalleryCategory | "All")[] = [
  "All",
  "Business Conferences",
  "Entrepreneurial Events",
  "Community Gatherings",
  "Training Sessions",
  "Team Activities",
  "Product Presentations",
  "Networking Events",
  "Business Milestones",
  "Benguet Branch Activities",
];
