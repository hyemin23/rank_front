"use client";
import { useCallback, useState } from "react";
import SearchResult from "./SearchResult";

const SearchComponents = ({ cardData, path }: any) => {
  const [searchVal, setSearchVal] = useState<any>("");
  const [searchData, setSearchData] = useState<any>(null);

  // debounce를 적용한 함수
  const onChangeVal = useCallback((value: any) => setSearchVal(value), []);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = cardData.filter((data: any, index: number) => {
      const korName = data.name.toLowerCase().includes(searchVal.toLowerCase());
      const engName = data.eng_name
        .toLowerCase()
        .includes(searchVal.toLowerCase());

      return korName || engName;
    });

    if (result.length > 0) {
      setSearchData(result);
    } else {
      setSearchData(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <form onSubmit={onSubmitForm}>
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative w-[250px] h-[60px]">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          {/* 다크모드 */}
          {/* <input
            type="search"
            id="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="브랜드 입력"
            required
          /> */}
          <input
            type="search"
            id="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400"
            placeholder="브랜드 입력"
            onChange={(e) => {
              onChangeVal(e.target.value);
            }}
            value={searchVal}
          />

          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-3.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            검색
          </button>
        </div>
      </form>
      {searchData && <SearchResult path={path} searchData={searchData} />}
    </div>
  );
};

export default SearchComponents;
