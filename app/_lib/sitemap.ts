import { getCardData } from "../watch/_lib/getCardData";

const domain = "https://www.luxuryranking.net";
export default async function sitemap() {
  const data = await getCardData("watch");

  const cate = ["watch"].map((cdata) => ({
    url: `${domain}/${cdata}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  let routes: any = [];
  if (data) {
    routes = data?.map((dedata: any) => ({
      url: `${domain}/watch/${dedata.name}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    }));

    return routes;
  }

  return [...cate, ...routes];
}
