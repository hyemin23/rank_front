import { Suspense } from "react";
import TabButton from "../_components/contents/TabButton";

export default function WatchPage() {
  const path: string = "watch";
  return (
    <Suspense fallback={<div>로딩중 . . .</div>}>
      <TabButton />
      {/* <MainCard path={path} /> */}
    </Suspense>
  );
}
