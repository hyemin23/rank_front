import { Suspense } from "react";
import MainCard from "../../components/MainCard";
import TabButton from "../../components/contents/TabButton";
import { getCardData } from "../../lib/getCardData";

const getData = async (path: string) => {
  const cardData = await getCardData(path);
  return cardData;
};

const WatchPage = async () => {
  const path = "watch";
  const cardData = await getData(path);

  return (
    <Suspense fallback={<div>로딩중 . . .</div>}>
      <TabButton />
      <MainCard path={path} cardData={cardData} />
    </Suspense>
  );
};

export default WatchPage;
