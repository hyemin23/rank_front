import Image from "next/image";
import Link from "next/link";
type TitleColorType = {
  [key: string]: string;
};

export default function DetailCard({ data, path }: { data: any; path: any }) {
  // 테일윈드 css는 동적 style이 적용이 안되므로 객체로 만들어야함.
  const titleColor: TitleColorType = {
    "0": "bg-[#fff7e6] text-[#d46b08]",
    "1": "bg-[#fff2e8] text-[#d4380d]",
    "2": "bg-[#e6f4ff] text-[#1677ff]",
    "3": "bg-[#f9f0ff] text-[#531dab]",
  };

  const tagContents = (title: string, key: number) => {
    const randomIndex = Math.floor(
      Math.random() * Object.keys(titleColor).length
    );
    const randomColorClass = titleColor[randomIndex];

    return (
      <div
        key={key}
        className={`font-semibold my-2 py-[2px] px-[2px] ml-2 text-xs ${randomColorClass}`}
      >
        <p>{`#${title}`}</p>
      </div>
    );
  };

  return (
    data && (
      <div className="max-w-screen-xl m-4 rounded-xl shadow-lg xl:w-1/6 lg:w-1/6 mobile:w-[40%] bg-white mobile:m-2 border">
        <Link href={`${path}/${data.name}`}>
          <div className="h-[230px] w-full mobile:h-[120px]">
            <Image
              src={`/images/${data.eng_name.toLowerCase()}.${data.extend}`}
              loading="lazy"
              width={250}
              height={230}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px 10px 0 0 ",
              }}
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4 mobile:px-0 mobile:py-2">
            <div className="font-bold  mb-2 text-center ">
              <p className="text-xs mobile:text-sm  md:text-xl lg:text-xl whitespace-pre font-semibold">
                {data.name}
              </p>
            </div>
          </div>
          <div className="text-center">
            <p
              className="inline-flex items-center px-6 py-2 text-sm font-medium
            text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800
            focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600
            dark:hover:bg-blue-700 dark:focus:ring-blue-800 >
             "
            >
              자세히
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </p>
          </div>

          <div className="flex w-full flex-wrap">
            {["가격너무비쌈", "귀족용", "사다죽음"].map((data, key) =>
              tagContents(data, key)
            )}
          </div>
        </Link>
      </div>
    )
  );
}
