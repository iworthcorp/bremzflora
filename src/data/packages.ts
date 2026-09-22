export type Package = {
  id: string;
  title: string;
  price: string;
  description: string;
  inclusions: string[];
  closingLine: string;
  thumbnail: string;
  fullImage: string;
  fullImageWidth?: number;
  fullImageHeight?: number;
  imageAlt: string;
};

export const packages: Package[] = [
  {
    id: "i-seller",
    title: "i-Seller Package",
    price: "₱599",
    description:
      "A starter package for individuals who want to explore online selling and dropshipping.",
    inclusions: [
      "10 – 20% Product Profit",
      "Ready Product Stocks",
      "Dropshipping System",
      "eCommerce Website",
      "Free iWorth Product",
      "Free Digital Marketing Training",
    ],
    closingLine: "Start Small. Start Smart.",
    thumbnail: "/images/packages/i-seller/portrait/image1.png",
    fullImage: "/images/packages/i-seller/landscape/image1.png",
    imageAlt:
      "i-Seller Dropshipper Package details: complete system, marketing tools, training and support, and business benefits for ₱599.",
  },
  {
    id: "gold-seller",
    title: "Gold Seller Package",
    price: "₱8,880",
    description:
      "A more comprehensive package for individuals ready to develop their online selling journey and explore additional opportunities.",
    inclusions: [
      "100% iWorth Products",
      "25% Product Discount",
      "10% Group Sales Commission",
      "Quick Start Sales Commission",
      "1st to 3rd Unilevel Sales Commission",
      "Access on your Online Store",
      "Access on your Replicated Website E-com with Dropshipping Platform",
      "Basic Digital Marketing Training",
    ],
    closingLine: "Build Your Online Business.",
    thumbnail: "/images/packages/i-seller/portrait/image2.png",
    fullImage: "/images/packages/i-seller/landscape/image2.png",
    imageAlt:
      "Gold Seller Package inclusions: affiliate profit, group sales bonus, digital marketing training, and insurance for ₱8,880.",
  },
  {
    id: "elite-seller",
    title: "Elite Seller Package",
    price: "₱35,999",
    description:
      "A premium package for entrepreneurs who want to explore a broader online business opportunity.",
    inclusions: [
      "100% iWorth Products",
      "40% Product Discount",
      "20% Group Sales Commission",
      "Quick Start Sales Commission",
      "Generational Sales Commission",
      "5th Cycles Sales Commission",
      "1st to 8th Unilevel Sales Commission",
      "Access on your Replicated Website",
      "E-Com with Dropshipping Platform",
      "Advanced Digital Marketing Training",
      "Access on your Online Store",
    ],
    closingLine: "Think Big. Build Bigger.",
    thumbnail: "/images/packages/i-seller/portrait/image3.png",
    fullImage: "/images/packages/i-seller/landscape/image3.png",
    fullImageWidth: 1670,
    fullImageHeight: 942,
    imageAlt:
      "Elite Seller Package inclusions: generation bonus, car and travel incentive, elite training, and trading community access for ₱35,999.",
  },
];
