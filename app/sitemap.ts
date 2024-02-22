import { MetadataRoute } from "next";

const domain = "https://www.luxuryranking.net";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${domain}/watch`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    // {
    //   url: `${domain}/watch`,
    //   lastModified: new Date(),
    //   changeFrequency: "daily",
    //   priority: 1,
    // },
    // {
    //   url: `${domain}/watch`,
    //   lastModified: new Date(),
    //   changeFrequency: "daily",
    //   priority: 1,
    // },
  ];
}
