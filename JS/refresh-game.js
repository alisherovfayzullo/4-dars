import { elAi } from "./html-el.js";
import { switchZone } from "./switch.zone.js";

export function refreshGame() {
  switchZone(false);
  elAi.src = `/img/hand-load.svg`;
}
