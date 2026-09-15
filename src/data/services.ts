export type Service = {
  number: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Digital Marketing",
    description:
      "Strategic digital marketing solutions designed to increase visibility, engagement, and business growth.",
  },
  {
    number: "02",
    title: "Social Media Strategy",
    description:
      "Building intentional social media strategies that create meaningful conversations and stronger communities.",
  },
  {
    number: "03",
    title: "Branding",
    description:
      "Helping brands define their identity, positioning, voice, and visual direction.",
  },
  {
    number: "04",
    title: "Content Marketing",
    description:
      "Creating strategic content that educates, connects, engages, and converts.",
  },
  {
    number: "05",
    title: "Business Development",
    description:
      "Identifying opportunities, strengthening relationships, and developing strategies that support sustainable growth.",
  },
];

export const stats = [
  { value: 5, suffix: "+", label: "Core Expertise Areas" },
  { value: 100, suffix: "+", label: "Creative & Strategic Projects" },
  { value: 50, suffix: "+", label: "Brands & Businesses Supported" },
];
