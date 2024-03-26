import { Metadata } from "next";
import BottomNavigation from "../_components/navigation/BottomNavigation";
import TopNavigation from "../_components/navigation/TopNavigation";
import { openGrapData } from "../_lib/shared-metadata";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "남자 여자 명품 시계",
  },
  description: `${new Date().getFullYear()} 남자 여자 명품 지갑 계급도 순위와 등급을 알아보고, 남자 여자 명품 지갑 계급도 상세 정보 및 가격 조회를 통해 본인의 지갑 등급을 확인해 보세요.`,
  openGraph: {
    ...openGrapData,
    title: "명품 지갑 계급도",
    siteName: "명품 지갑 계급도",
    description: `${new Date().getFullYear()} 남자 여자 명품 지갑 계급도 순위와 등급을 알아보고, 남자 여자 명품 지갑 계급도 상세 정보 및 가격 조회를 통해 본인의 지갑 등급을 확인해 보세요.`,
    url: "http://www.luxuryranking.net/wallet",
    images: "/images/rank.jpg",
  },
};

export default function Layout({ children }: any) {
  return (
    <>
      <TopNavigation />
      {children}
      <BottomNavigation />
    </>
  );
}
