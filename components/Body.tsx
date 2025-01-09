import { ComponentChildren } from "preact";

interface BodyParams {
  children?: ComponentChildren
}

export function Body({ children }: BodyParams) {
  return(
    <div class="bg z-0" style="margin-top: calc(4rem + env(safe-area-inset-top)); margin-bottom: calc(3rem + env(safe-area-inset-bottom));">
      { children }
    </div>
  );
}