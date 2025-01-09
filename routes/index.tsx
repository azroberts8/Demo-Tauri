import { useSignal } from "@preact/signals";
import { Event } from "../components/Event.tsx";
import { Header } from "../components/Header.tsx";
import { ProfileIcon } from "../components/ProfileIcon.tsx";
import { NavTabBar } from "../components/NavTabBar.tsx";
import { NavTabOption } from "../islands/NavTabOption.tsx";
import { Page } from "../islands/Page.tsx";
import { Body } from "../components/Body.tsx";

export default function Home() {
  const concerts = [
    {
      title: "Audien Live @ The Ave",
      host: "The Ave Live",
      location: "The Ave, Philadelphia",
      time: new Date(2025, 0, 17, 21, 0),
      thumbnail: "/images/audien.png"
    },
    {
      title: "Alan Walker @ Echostage",
      host: "Insomniac Productions",
      location: "Echostage, Washington DC",
      time: new Date(2025, 0, 31, 21, 0),
      thumbnail: "/images/alan-walker.png"
    },
    {
      title: "Odd Mob Live @ The Ave",
      host: "The Ave Live",
      location: "The Ave, Philadelphia",
      time: new Date(2025, 1, 1, 21, 0),
      thumbnail: "/images/odd-mob.png"
    },
    {
      title: "Gryffin @ Echostage",
      host: "Insomniac Productions",
      location: "Echostage, Washington DC",
      time: new Date(2025, 1, 14, 21, 0),
      thumbnail: "/images/gryffin.png"
    },
    {
      title: "Crankdat Live @ The Ave",
      host: "The Ave Live",
      location: "The Ave, Philadelphia",
      time: new Date(2025, 1, 15, 21, 0),
      thumbnail: "/images/crankdat.png"
    },
    {
      title: "Vintage Culture Live @ NOTO",
      host: "NOTO Philly",
      location: "NOTO, Philadelphia",
      time: new Date(2025, 1, 21, 21, 0),
      thumbnail: "/images/vintage-culture.jpg"
    },
  ];

  const selectedTab = useSignal("discover");

  return(
    <>
      <Page navid="discover" activeTab={selectedTab}>
        <Header>
          <div class="body-bold color-primary w-full text-3xl">Discover</div>
          <ProfileIcon />
        </Header>
        <Body>
          <div class="">
            {
              concerts.map(({ title, host, location, time, thumbnail }) => (
                <Event title={title} host={host} location={location} time={time} thumbnail={thumbnail} />
              ))
            }
          </div>
        </Body>
      </Page>
      <Page navid="rust" activeTab={selectedTab}>
        <Header>
          <div class="body-bold color-primary w-full text-3xl">Rust Example</div>
          <ProfileIcon />
        </Header>
      </Page>
      <Page navid="stocks" activeTab={selectedTab}>
        <Header>
          <div class="body-bold color-primary w-full text-3xl">Stocks</div>
          <ProfileIcon />
        </Header>
      </Page>
      <NavTabBar>
        <NavTabOption navid="discover" activeTab={selectedTab}>explore</NavTabOption>
        <NavTabOption navid="rust" activeTab={selectedTab}>terminal</NavTabOption>
        <NavTabOption navid="stocks" activeTab={selectedTab}>trending_up</NavTabOption>
      </NavTabBar>
    </>
  );
}
