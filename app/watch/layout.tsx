import BottomNavigation from "../_components/navigation/BottomNavigation";
import TopNavigation from "../_components/navigation/TopNavigation";

export default function WatchLayout({ children }: any) {
  return (
    <>
      <TopNavigation />

      {children}
      <BottomNavigation />
    </>
  );
}
