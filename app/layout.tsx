import { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const NotoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "계급도",
    template: "%s 계급도",
  },
  description: `순위와 등급을 알려드립니다. 계급도를 통해 ${new Date().getFullYear()} 최신 남자 여자 명품 시계 가방 구두 벨트 옷 외제차 자동차 음식 맛집 브랜드 군대 순위 및 계급 순위를 조회해 보세요.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={NotoSansKR.className}>
      <body className="mx-auto min-h-screen max-w-screen-xl">{children}</body>
    </html>
  );
}
