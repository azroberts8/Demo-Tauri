import { Signal, computed } from "@preact/signals";
import { ComponentChildren } from "preact";

interface NavTabOptionParams {
  id: string;
  activeTab: Signal<string>;
  children?: ComponentChildren;
}

export function NavTabOption({
  id, activeTab, children
}: NavTabOptionParams) {
  const style = computed(() => {
    return activeTab.value === id ? "color: var(--primary-color); font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;" : "";
  });
  return (
    <div class="w-full flex justify-center h-full items-center" onMouseDown={() => { activeTab.value = id; console.log("Hello!")}}>
      <span class="material-symbols-outlined align-bottom text-3xl color-tertiary select-none" style={style}>{ children }</span>
    </div>
  );
}