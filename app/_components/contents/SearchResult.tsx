import DetailCard from "@/app/_components/DetailCard";

const SearchResult = ({ path, searchData }: any) => {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-10">
      {searchData && searchData.length > 0 ? (
        <>
          <div>
            <p
              className={`mb-4 px-4 py-1 rank-${searchData[0].fk_rank_star_id}`}
            >{`${searchData[0].title} 등급 입니다.`}</p>
          </div>
          <DetailCard data={searchData[0]} path={path} />
        </>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
    </div>
  );
};

export default SearchResult;
