import { Signal, computed } from "@preact/signals";
import { ComponentChildren } from "preact";

interface PageParams {
  navid: string;
  activeTab: Signal<string>;
  children?: ComponentChildren;
}

export function Page({
  navid, activeTab, children
}: PageParams) {
  const baseStyle = "overflow-y: scroll; -webkit-overflow-scrolling: touch;"
  const style = computed(() => {
    return activeTab.value === navid ? `${baseStyle} display: block;` : `${baseStyle} display: none;`;
  })
  return(
    <div class="bg w-full h-full fixed top-0 left-0" style={style}>
      { children }
    </div>
  );
}