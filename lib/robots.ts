import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://luxuryranking.net/sitemap.xml",
    host: "https://luxuryranking.net",
  };
}
