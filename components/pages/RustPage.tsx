import { Page } from "../../islands/Page.tsx";
import { Header } from "../Header.tsx";
import { ProfileIcon } from "../ProfileIcon.tsx";
import { Signal } from "@preact/signals";

interface RustPageParams {
  activeTab: Signal<string>;
}

export default function RustPage({ activeTab}: RustPageParams) {
  return(
    <Page navid="rust" activeTab={activeTab}>
      <Header>
        <div class="body-bold color-primary w-full text-3xl">Rust Example</div>
        <ProfileIcon />
      </Header>
    </Page>
  );
}