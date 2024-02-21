import { Suspense } from "react";
import TabButton from "../_components/contents/TabButton";
import MainCard from "./_components/MainCard";

export default function WatchPage() {
  const path: string = "watch";
  return (
    <Suspense fallback={<div>로딩중 . . .</div>}>
      <TabButton />
      <MainCard path={path} />
    </Suspense>
  );
}
