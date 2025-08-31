import { aiChoose } from "./ai-choose.js";
import { mode } from "./consrtants.js";
import { elHands, elPlayer, elRefreshGame, elAi } from "./html-el.js";
import { refreshGame } from "./refresh-game.js";
import { switchZone } from "./switch.zone.js";

elHands.forEach((hand) => {
  hand.addEventListener("click", (evt) => {
    const player = evt.target.alt;
    const playerSrc = evt.target.src;
    switchZone(true);
    elPlayer.src = playerSrc;

    setTimeout(() => {
      const ai = aiChoose(mode);
      elAi.src = `/img/${ai}.svg`;
    }, 1000);
  });
});

elRefreshGame.addEventListener("click", refreshGame);
