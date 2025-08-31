import { elGameZone, elProcessZone } from "./html-el.js";

export function switchZone(boolean) {
  if (boolean) {
    elGameZone.classList.add("hidden");
    elProcessZone.classList.remove("hidden");
  } else {
    elProcessZone.classList.remove("hidden");
    elGameZone.classList.add("hidden");
  }
}
