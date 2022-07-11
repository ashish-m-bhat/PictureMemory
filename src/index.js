import checkIfWon from "./modules/checkIfWon.js";
import createDivs from "./modules/createDivs.js";
import evaluate from "./modules/evaluate.js";

createDivs();
document.querySelector('#wrapperDiv').addEventListener('click', startGame);
const countOfTriesLabel = document.querySelector('#countOfTriesLabel');
const currentStack = [];
let countOfTries=0;

function startGame(event){
  // getClickedTile
  const selectedTile = event.target;

  // If the wrapperDiv is clicked or a has already been selected
  if(selectedTile.id === 'wrapperDiv' || selectedTile.textContent !== '')
    return;

  //set the counter
  countOfTries++;
  countOfTriesLabel.textContent = countOfTries;

  // showClickedTile
  selectedTile.textContent = selectedTile.getAttribute('class');

  // Main code
  evaluate(currentStack, selectedTile);

  // Check if the game is over
  checkIfWon(currentStack, countOfTries);

}
