export type PlatformSection = {
  id: string;
  title: string;
  description: string | string[];
};

export const platformSections: PlatformSection[] = [
  {
    id: "ecommerce",
    title: "eCommerce",
    description:
      "Explore the world of eCommerce by learning how to showcase products, connect with customers, process online orders, and build a digital storefront. Whether you're starting a new online business or expanding an existing one, eCommerce provides a way to reach customers beyond a physical location.",
  },
  {
    id: "dropshipping",
    title: "Dropshipping",
    description: [
      "Start your online selling journey without the need to manage traditional inventory.",
      "With iWorth, dropshipping is presented as an online business model where sellers promote products through digital channels while product fulfillment can be handled through suppliers or other partners. It can give aspiring entrepreneurs an opportunity to learn online selling, product promotion, customer engagement, and digital marketing.",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: [
      "Digital marketing focuses on helping entrepreneurs, business owners, and aspiring online sellers understand how to promote their products, services, and personal brands through digital channels.",
      "Today, customers often discover businesses online before making a purchase. Digital marketing can help businesses increase visibility, reach specific audiences, communicate their value, and build long-term customer relationships.",
    ],
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Helps entrepreneurs and business owners use Artificial Intelligence and automated digital tools to make everyday business tasks faster, more organized, and more efficient.",
  },
  {
    id: "insurance",
    title: "Insurance",
    description:
      "Helps individuals, families, professionals, and business owners understand the importance of financial protection and risk management through insurance solutions.",
  },
  {
    id: "trading-community",
    title: "Trading Community",
    description:
      "A learning and community environment designed for individuals who want to develop their knowledge of financial markets, trading concepts, market analysis, and disciplined decision-making.",
  },
  {
    id: "personality-development",
    title: "Personality Development",
    description:
      "Focuses on helping individuals build confidence, communication skills, leadership qualities, positive habits, and a growth-oriented mindset for personal and professional life.",
  },
  {
    id: "services",
    title: "Services",
    description:
      "Provide practical digital, business, and entrepreneurial support designed to help individuals, entrepreneurs, online sellers, and business owners build, promote, and manage their businesses more effectively.",
  },
];
