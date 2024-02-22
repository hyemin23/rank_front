import { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const NotoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export const metadata: Metadata = {
  metadataBase: new URL("https://luxuryranking.net"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "https://www.luxuryranking.net",
  },
  verification: {
    google: "hY_xPD5an6sg633v7lovEHn9aQRALNJ9dJwNrl5M3vI",
    other: {
      naver: "a565785944352230f84d2e43238abd8293530989",
    },
  },
  authors: { name: "rank", url: "http://www.luxuryranking.net" },
  title: {
    absolute: `${new Date().getFullYear()}남자 여자 명품 시계 가방 구두 벨트 옷 외제차 자동차 음식 맛집 차 국산차 브랜드 군대 순위 및 당신의 계급을 알려드립니다. 계급도 조회해 보세요.`,
    default: "계급도",
    template: "%s 계급도",
  },

  openGraph: {
    locale: "ko_KR",
    title: "계급도",
    description: `${new Date().getFullYear()}남자 여자 명품 시계 가방 구두 벨트 옷 외제차 자동차 음식 맛집 차 국산차 브랜드 군대 순위 및 당신의 계급을 알려드립니다. 계급도 조회해 보세요.`,
    type: "website",
    url: "http://www.luxuryranking.net",
    images: "/rank.jpg",
    siteName: "계급도",
  },
  twitter: {
    description: `${new Date().getFullYear()}남자 여자 명품 시계 가방 구두 벨트 옷 외제차 자동차 음식 맛집 차 국산차 브랜드 군대 순위 및 당신의 계급을 알려드립니다. 계급도 조회해 보세요.`,
    title: "계급도",
    card: "summary",
    site: "http://www.luxuryranking.net",
    creator: "rank",
    images: "/rank.jpg",
  },
  keywords: `${new Date().getFullYear()} 남자 여자 명품 시계 가방 구두 벨트 옷 외제차 자동차 음식 맛집 차 국산차 브랜드 군대 순위 계급 계급도`,
  description: `명품 계급 순위와 등급을 알려드립니다. 계급도를 통해 ${new Date().getFullYear()} 최신 남자 여자 명품 시계 가방 구두 벨트 옷 외제차 자동차 음식 맛집 브랜드 군대 순위 및 계급도 순위를 조회해 보세요.`,
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
