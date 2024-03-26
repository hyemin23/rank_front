"use client";
import Image from "next/image";
import Link from "next/link";

// async function getCateData() {
//   const res = await fetch(`https://allinfoquestion.com/category`);
//   if (!res.ok) {
//     console.log("데이터 없음");
//   }
//   return res.json();
// }

const TopNavigation = () => {
  return (
    <header className="h-[20%] body-font">
      <div className="flex flex-col items-center content-center mb-4">
        <Link
          href="/"
          className="mt-4 flex flex-col items-center content-center mb-4"
        >
          <Image
            src={"/images/rank_title.png"}
            width={"40"}
            height={"40"}
            alt="계급도"
          />
          <div>
            <p className="text-2xl font-bold pt-4">계급도</p>
          </div>
        </Link>
      </div>

      <div className="px-4 py-6 flex items-center justify-center bg-gray-900 text-white border-gray-200">
        <nav>
          <ul className="flex items-center justify-center font-semibold mobile:text-sm">
            <li className="relative group px-3 py-2">
              <button className="hover:opacity-50 cursor-default">
                명품계급조회
              </button>
              <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[60px] transform">
                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                  <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                  <div className="relative z-10">
                    <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                      종류
                    </p>
                    <ul className="mt-3 text-[15px]">
                      <li>
                        <Link
                          href="/watch"
                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                        >
                          시계계급
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="wallet"
                          className="bg-transparent bg-clip-text
                          text-transparent bg-gradient-to-br from-indigo-400
                          to-pink-700 via-blue-500 font-semibold
                          hover:from-blue-600 hover:to-indigo-600
                          hover:via-pink-400 py-1 block"
                        >
                          지갑계급
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="belt"
                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                        >
                          벨트계급
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                  <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                  <div className="relative z-10">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          The Suite
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <a
                              href="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Course Editor
                              <p className="text-gray-500 font-normal">
                                All-in-one editor
                              </p>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Accept payments
                              <p className="text-gray-500 font-normal">
                                Pre-build payments page
                              </p>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Closed Captioning
                              <p className="text-gray-500 font-normal">
                                Use AI to generate captions
                              </p>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          Extensions
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <a
                              href="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Plugins
                              <p className="text-gray-500 font-normal">
                                Tweak existing functionality
                              </p>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Batch uploads
                              <p className="text-gray-500 font-normal">
                                Get your time back
                              </p>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Social sharing
                              <p className="text-gray-500 font-normal">
                                Generate content for socials
                              </p>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </li>
            <li className="relative group px-3 py-2">
              <button className="hover:opacity-50 cursor-default">
                공무원계급
              </button>
              <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[120px] transform">
                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                  <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                  <div className="relative z-10">
                    <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                      종류
                    </p>
                    <ul className="mt-3 text-[15px]">
                      <li>
                        <a
                          href="#"
                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                        >
                          준비중입니다...
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative group px-3 py-2">
              <button className="hover:opacity-50 cursor-default">
                대학교계급
              </button>
              <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[60px] transform">
                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                  <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm"></div>

                  <div className="relative z-10">
                    <a
                      href="#"
                      className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                    >
                      준비중
                      <p className="text-gray-500 font-normal">준비중</p>
                    </a>
                    <div className="mt-6 grid grid-cols-2 gap-6">
                      <div>
                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          BETA Test
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              준비중입니다. . .
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative group px-3 py-2">
              <button className="hover:opacity-50 cursor-default">
                체인점계급
              </button>
              <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[60px] transform">
                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                  <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                  <div className="relative z-10">
                    <ul className="text-[15px]">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                        >
                          준비중입니다...
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        {/* <nav>
          <ul>
            <li>
              <a
                href="#"
                className="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group"
              >
                <span className="mr-2">Sign in</span>
                <svg
                  className="stroke-current"
                  width="10"
                  height="10"
                  stroke-width="2"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                >
                  <g fill-rule="evenodd">
                    <path
                      className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200"
                      d="M0 5h7"
                    ></path>
                    <path
                      className="opacity-100 group-hover:transform group-hover:translate-x-1 transition ease-in-out duration-200"
                      d="M1 1l4 4-4 4"
                    ></path>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default TopNavigation;
