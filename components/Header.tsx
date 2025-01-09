import { ComponentChildren } from "preact";

interface HeaderParams {
  children?: ComponentChildren;
}

export function Header({ children }: HeaderParams) {
  return(
    <div class="bg-crystal w-full fixed top-0 z-10" style="padding-top: env(safe-area-inset-top);">
      <div class="h-16 flex items-center px-4">
        { children }
      </div>
    </div>
  );
}