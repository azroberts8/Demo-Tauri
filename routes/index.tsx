import { useSignal } from "@preact/signals";
import { NavTabBar } from "../components/NavTabBar.tsx";
import { NavTabOption } from "../islands/NavTabOption.tsx";
import DiscoverPage from "../components/pages/DiscoverPage.tsx";
import RustPage from "../components/pages/RustPage.tsx";
import StocksPage from "../components/pages/StocksPage.tsx";

export default function Home() {
  const selectedTab = useSignal("discover");

  return(
    <>
      <DiscoverPage activeTab={selectedTab} />
      <RustPage activeTab={selectedTab} />
      <StocksPage activeTab={selectedTab} />

      <NavTabBar>
        <NavTabOption navid="discover" activeTab={selectedTab}>explore</NavTabOption>
        <NavTabOption navid="rust" activeTab={selectedTab}>terminal</NavTabOption>
        <NavTabOption navid="stocks" activeTab={selectedTab}>trending_up</NavTabOption>
      </NavTabBar>
    </>
  );
}
