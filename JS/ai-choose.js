import { hands } from "./consrtants.js";
export function aiChoose(mode = "easy") {
  const randomI = Math.trunc(Math.random() * (mode === "easy" ? 3 : 5));
  return hands[randomI];
}
