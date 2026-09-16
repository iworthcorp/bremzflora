import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...siteConfig.nav.flatMap((item) => [
      {
        url: `${siteConfig.url}${item.href}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      ...("children" in item
        ? item.children
            .filter((child) => !child.href.includes("#"))
            .map((child) => ({
              url: `${siteConfig.url}${child.href}`,
              lastModified: now,
              changeFrequency: "monthly" as const,
              priority: 0.5,
            }))
        : []),
    ]),
    {
      url: `${siteConfig.url}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
