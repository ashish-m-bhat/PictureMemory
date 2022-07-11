import resetGame from "./modules/resetGame.js";
import startGame from "./modules/startGame.js";
import createDivs from './modules/createDivs.js';
import shuffleTilesArray from "./modules/shuffleTilesArray.js";
import { tilesArray } from "./modules/variables.js";

document.querySelector('#startGameButton').addEventListener('click', startGame);
document.querySelector('#resetGameButton').addEventListener('click', resetGame);

createDivs(shuffleTilesArray(tilesArray));
