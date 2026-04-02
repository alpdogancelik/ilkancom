import type { MetadataRoute } from "next";

import { getAbsoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: getAbsoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "tr-TR": getAbsoluteUrl("/"),
          "en-US": getAbsoluteUrl("/?lang=en"),
        },
      },
    },
    {
      url: getAbsoluteUrl("/izmir-erkek-berberi"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: getAbsoluteUrl("/balcova-berber"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
