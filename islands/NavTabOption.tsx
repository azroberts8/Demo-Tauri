import { Signal, computed } from "@preact/signals";
import { ComponentChildren } from "preact";

interface NavTabOptionParams {
  navid: string;
  activeTab: Signal<string>;
  children?: ComponentChildren;
}

export function NavTabOption({
  navid, activeTab, children
}: NavTabOptionParams) {
  const style = computed(() => {
    return activeTab.value === navid ? "color: var(--primary-color); font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;" : "";
  });
  return (
    <div class="w-full flex justify-center h-full items-center" onMouseDown={() => { activeTab.value = navid }}>
      <span class="material-symbols-outlined align-bottom text-3xl color-tertiary select-none" style={style}>{ children }</span>
    </div>
  );
}