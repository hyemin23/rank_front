import { Suspense } from "react";
import { getCardDetailInfo } from "../_lib/getCardDetailInfo";

export default async function DetailWatchPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const getData = await getCardDetailInfo(id);

  const splitContentByBr = (contents: string) => {
    return contents
      .split(/<br\s*\/?>/)
      .filter((content) => content.trim() !== "");
  };

  const splitData = splitContentByBr(getData[0].contents);

  const parseHTML = (htmlString: string) => {
    return { __html: htmlString };
  };

  const renderContent = (content: string, index: number) => {
    if (content.startsWith("<h2>")) {
      return (
        <h2
          dangerouslySetInnerHTML={parseHTML(content.replace(/<\/?h2>/g, ""))}
        />
      );
    } else {
      return <p dangerouslySetInnerHTML={parseHTML(content)} />;
    }
  };

  return (
    <Suspense fallback={<div>로딩중 . . .</div>}>
      <div className="bg-white p-4 mx-4 my-10 rounded-md px-10 mobile:my-4 mobile:p-4 ">
        <h1 className="font-semibold text-2xl text-center p-4 mobile:p-2 mobile:text-xl">{`${decodeURIComponent(
          id
        )} 시계`}</h1>
        {splitData.map((content: any, index) => (
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            key={index}
            className="inner-contents"
          />
        ))}
      </div>
    </Suspense>
  );
}
