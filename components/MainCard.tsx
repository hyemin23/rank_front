import SearchComponents from "@/components/contents/SearchComponents";

import DetailCard from "./DetailCard";

// 서버 컴포넌트
export default async function MainCard({ cardData, path }: any) {
  // categoryData에서 중복 등급 정리
  const uniqueRanks = Array.from(
    new Set(cardData?.map((data: any) => data.fk_rank_star_id))
  );

  return (
    <>
      {/* 클라이언트 컴포넌트 */}
      {cardData && <SearchComponents path={path} cardData={cardData} />}

      <section className="mb-[74px] m-10 mobile:m-4 space-y-4">
        {uniqueRanks &&
          uniqueRanks.map((rank: any, index) => {
            return (
              <div className={`shadow-2xl bg-white rounded`} key={index}>
                <div
                  className={`px-6 py-3 mr-4 ml-4
              dark:border-neutral-600 dark:text-neutral-50 flex items-center justify-center `}
                  style={{
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <p className={`border-b-red-200 py-2 px-4 rank-${rank}`}>
                    {rank} 등급
                  </p>
                </div>

                <div className="flex w-full flex-wrap items-center justify-center py-15 mobile:py-2 mobile:gap-[5px]">
                  {cardData &&
                    cardData
                      ?.filter(
                        (filterData: any) => filterData.fk_rank_star_id === rank
                      )
                      ?.map((data: any, index: number) => (
                        <DetailCard key={index} data={data} path={path} />
                      ))}
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
}
