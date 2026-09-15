export type GalleryCategory =
  | "Conferences"
  | "Speaking"
  | "Branding"
  | "Workshops"
  | "Behind the Scenes"
  | "Events";

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
    category: "Speaking",
    caption: "Opening keynote at the Digital Transformation & Brand Growth Summit.",
  },
  {
    id: "g2",
    src: "/images/gallery-2.svg",
    width: 900,
    height: 700,
    category: "Behind the Scenes",
    caption: "Prepping talking points before a client strategy session.",
  },
  {
    id: "g3",
    src: "/images/gallery-3.svg",
    width: 900,
    height: 900,
    category: "Branding",
    caption: "Moodboarding a brand identity refresh with the design team.",
  },
  {
    id: "g4",
    src: "/images/gallery-4.svg",
    width: 900,
    height: 1300,
    category: "Conferences",
    caption: "Panel discussion on personal branding for business leaders.",
  },
  {
    id: "g5",
    src: "/images/gallery-5.svg",
    width: 900,
    height: 780,
    category: "Workshops",
    caption: "Leading a content strategy workshop for founders.",
  },
  {
    id: "g6",
    src: "/images/gallery-6.svg",
    width: 900,
    height: 1000,
    category: "Events",
    caption: "Networking after the Women in Business Leadership Forum.",
  },
  {
    id: "g7",
    src: "/images/gallery-7.svg",
    width: 900,
    height: 700,
    category: "Behind the Scenes",
    caption: "Reviewing campaign analytics ahead of a client presentation.",
  },
  {
    id: "g8",
    src: "/images/gallery-8.svg",
    width: 900,
    height: 1150,
    category: "Speaking",
    caption: "Closing remarks at the Startup Growth Roundtable.",
  },
  {
    id: "g9",
    src: "/images/gallery-9.svg",
    width: 900,
    height: 900,
    category: "Workshops",
    caption: "Hands-on brand voice exercise with workshop attendees.",
  },
];

export const galleryCategories: (GalleryCategory | "All")[] = [
  "All",
  "Conferences",
  "Speaking",
  "Branding",
  "Workshops",
  "Behind the Scenes",
  "Events",
];
