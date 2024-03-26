import BottomNavigation from "../../components/navigation/BottomNavigation";
import TopNavigation from "../../components/navigation/TopNavigation";

export default function Layout({ children }: any) {
  return (
    <>
      <TopNavigation />

      {children}
      <BottomNavigation />
    </>
  );
}
