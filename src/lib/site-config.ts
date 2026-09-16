export const siteConfig = {
  name: "Bremz Flora",
  brand: "BREMZ FLORA",
  tagline: "Digital Marketing • Branding • Strategy • Growth",
  title: "Bremz Flora | Digital Marketing, Branding & Business Development",
  description:
    "Bremz Flora helps businesses and personal brands grow through digital marketing, social media strategy, branding, content marketing, and business development.",
  url: "https://bremzflora.example.com",
  email: "hello@example.com",
  location: "Philippines",
  bookingUrl: "https://calendly.com/bremzflora/session",
  social: {
    linkedin: "https://linkedin.com/in/bremzflora",
    instagram: "https://instagram.com/bremzflora",
    facebook: "https://facebook.com/bremzflora",
    tiktok: "https://tiktok.com/@bremzflora",
  },
  nav: [
    {
      label: "About",
      href: "/about",
      children: [
        { label: "Profile", href: "/about#profile" },
        { label: "What we do", href: "/about#what-we-do" },
        { label: "Who we serve", href: "/about#who-we-serve" },
        { label: "Mission", href: "/about#mission" },
        { label: "Vision", href: "/about#vision" },
      ],
    },
    {
      label: "All-in-1 platform",
      href: "/platform",
      children: [
        { label: "eCommerce", href: "/platform#ecommerce" },
        { label: "Dropshipping", href: "/platform#dropshipping" },
        { label: "Digital marketing", href: "/platform#digital-marketing" },
        { label: "AI automation", href: "/platform#ai-automation" },
        { label: "Insurance", href: "/platform#insurance" },
        { label: "Trading community", href: "/platform#trading-community" },
        {
          label: "Personality development",
          href: "/platform#personality-development",
        },
        { label: "Services", href: "/platform#services" },
      ],
    },
    {
      label: "Branches",
      href: "/branches",
      children: [
        { label: "Pampanga", href: "/branches#pampanga" },
        { label: "Baguio", href: "/branches#baguio" },
        { label: "NCR", href: "/branches#ncr" },
        { label: "Cebu", href: "/branches#cebu" },
        { label: "Bacolod", href: "/branches#bacolod" },
        { label: "Pangasinan", href: "/branches#pangasinan" },
        { label: "Rizal", href: "/branches#rizal" },
      ],
    },
    {
      label: "Dropshipping packages",
      href: "/dropshipping-packages",
      children: [
        { label: "i-Seller package", href: "/dropshipping-packages#i-seller" },
        {
          label: "Gold Seller package",
          href: "/dropshipping-packages#gold-seller",
        },
        {
          label: "Elite Seller package",
          href: "/dropshipping-packages#elite-seller",
        },
      ],
    },
    {
      label: "Testimonials",
      href: "/testimonials",
      children: [
        { label: "Gallery", href: "/gallery" },
        { label: "Vlogs", href: "/testimonials#vlogs" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ],
} as const;
