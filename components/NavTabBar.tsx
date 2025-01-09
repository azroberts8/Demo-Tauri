import { ComponentChildren } from "preact";

interface NavTabBarParams {
  children?: ComponentChildren;
}

export function NavTabBar({ children }: NavTabBarParams) {
  return(
    <div class="bg-crystal w-full fixed bottom-0 z-10" style="padding-bottom: env(safe-area-inset-bottom);">
      <nav class="h-12 flex items-center">
        { children }
      </nav>
    </div>
  );
}