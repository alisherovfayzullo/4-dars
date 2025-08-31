import { paper, rock, scissors } from "./consrtants.js";

export function checkWinner(ai, player) {
  if (ai === player) {
    return "draw";
  } else if (ai === paper && player === rock) {
    return "you lose";
  } else if (ai === rock && player === scissors) {
    return "you lose";
  } else if (ai === scissors && player === paper) {
    return "you lose";
  } else {
    return "you win";
  }
}
console.log(checkWinner("paper", "rock"));
