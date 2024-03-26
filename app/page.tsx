import lottieJson from "@/public/loti2.json";
import Link from "next/link";
import Lottie from "react-lottie-player";

// 메인페이지 계급도에 대한 소개 페이지로 작성하기.
// 첫 루트 페이지에선 안 보이게 조절
export default function Home() {
  return (
    <main className="h-screen">
      <section className="h-full flex flex-col items-center justify-center text-gray-600 body-font">
        <div className="flex flex-col center container mx-auto items-center justify-center ">
          <div className=" flex h-[40%] justify-center items-center w-[20%]">
            <Lottie loop animationData={lottieJson} play />
          </div>
          <div className="h-full text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 mt-5 font-medium text-black">
              계급도
            </h1>
            <p className="mb-8 leading-relaxed">계급을 조회해 보세요.</p>
            <div className="flex justify-around">
              <div className="flex justify-center">
                <Link href="/watch">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    시계 계급도
                  </button>
                </Link>
              </div>
              <div className="flex justify-center">
                <Link href="/wallet">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    지갑 계급도
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
