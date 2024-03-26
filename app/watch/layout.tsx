import { Metadata } from "next";
import BottomNavigation from "../../components/navigation/BottomNavigation";
import TopNavigation from "../../components/navigation/TopNavigation";
import { openGrapData } from "../../lib/shared-metadata";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "남자 여자 명품 시계",
  },
  description: `${new Date().getFullYear()} 남자 여자 명품 시계 계급도 순위와 등급을 알아보고, 남자 여자 명품 시계 계급도 상세 정보 및 가격 조회를 통해 본인의 시계 등급을 평가해보세요.`,
  openGraph: {
    ...openGrapData,
    title: "명품 시계 계급도",
    siteName: "명품 시계 계급도",
    description: `${new Date().getFullYear()} 남자 여자 명품 시계 계급도 순위와 등급을 알아보고, 남자 여자 명품 시계 계급도 상세 정보 및 가격 조회를 통해 본인의 시계 등급을 평가해보세요.`,
    url: "http://www.luxuryranking.net/watch",
    images: "/images/rank.jpg",
  },
};
export default function WatchLayout({ children }: any) {
  return (
    <>
      <TopNavigation />
      {children}
      <BottomNavigation />
    </>
  );
}
