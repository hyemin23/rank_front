import { Suspense } from "react";
import MainCard from "../_components/MainCard";
import TabButton from "../_components/contents/TabButton";
import { getCardData } from "../_lib/getCardData";

const getData = async (path: string) => {
  const cardData = await getCardData(path);
  return cardData;
};

export default async function WatchPage() {
  const path = "watch";
  const cardData = await getData(path);

  return (
    <Suspense fallback={<div>로딩중 . . .</div>}>
      <TabButton />
      <MainCard path={path} cardData={cardData} />
    </Suspense>
  );
}
