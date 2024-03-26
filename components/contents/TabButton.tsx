"use client";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
const items = [
  { key: "1", label: "🙋🏻‍♂️ 남자" },
  { key: "2", label: "💁🏻‍♀️ 여자" },
];

const TabButton = () => {
  const path: string = usePathname();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRadio, setSelectedRadio] = useState<string>("남자");

  useEffect(() => {
    const pathName = path.replace("/", "");
    setSelectedCategory(
      pathName === "watch" ? "시계" : pathName === "wallet" ? "지갑" : "벨트"
    );
  }, [path]);

  const getCurrentYear = () => new Date().getFullYear();

  const onClickActive = (value: string) => {
    setSelectedRadio(value === "1" ? "남자" : "여자");
  };

  const getBtnClass = useMemo(
    () => (selectedRadio: string, key: string) => {
      const chageKeyyName = key === "1" ? "남자" : "여자";

      return `px-4 pb-4 text-black hover:text-[#ADB7BE]  ${
        selectedRadio === chageKeyyName
          ? "font-semibold text-blue-700 border-b border-purple-500 transition duration-500 ease-in-out"
          : ""
      }`;
    },
    []
  );

  return (
    <div className="mt-10">
      <div className="flex items-center justify-center font-semibold">
        <h1>{`${getCurrentYear()} ${selectedRadio} ${selectedCategory} 계급도`}</h1>
      </div>

      <div className="flex items-center justify-center mt-6">
        <ul className="flex">
          {items.map((data) => {
            return (
              <li key={data.key} className="border-b border-gray-200">
                <div>
                  <button
                    className={getBtnClass(selectedRadio, data.key)}
                    onClick={() => onClickActive(data.key)}
                    value={data.key === "1" ? "남자" : "여자"}
                    type="button"
                    name={`${data.label}`}
                    defaultValue={
                      data.key === "1" && selectedRadio === "남자"
                        ? "남자"
                        : "여자"
                    }
                    defaultChecked={selectedRadio === "남자"}
                  >
                    <span>{data.label}</span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TabButton;
