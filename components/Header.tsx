import { ComponentChildren } from "preact";

interface HeaderParams {
  children?: ComponentChildren;
}

export function Header({ children }: HeaderParams) {
  return(
    <div class="bg border-b border-color h-16 flex items-center px-4">
      { children }
    </div>
  );
}