import { Page } from "../../islands/Page.tsx";
import { Header } from "../Header.tsx";
import { ProfileIcon } from "../ProfileIcon.tsx";
import { Signal } from "@preact/signals";

interface StocksPageParams {
  activeTab: Signal<string>;
}

export default function StocksPage({ activeTab}: StocksPageParams) {
  return(
    <Page navid="stocks" activeTab={activeTab}>
      <Header>
        <div class="body-bold color-primary w-full text-3xl">Investments</div>
        <ProfileIcon />
      </Header>
    </Page>
  );
}