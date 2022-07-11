import checkIfWon from "./modules/checkIfWon.js";
import createDivs from "./modules/createDivs.js";
import evaluate from "./modules/evaluate.js";
import showClickedTile from "./modules/showClickedTile.js";

const tilesArray = [
                    {'id':'one', 'image':'url("src/UI/images/dog.JPG")', 'class':'1'},
                    {'id':'two', 'image':'url("src/UI/images/dog.JPG")', 'class':'1'},
                    {'id':'three', 'image':'url("src/UI/images/cat.JPG")', 'class':'2'},
                    {'id':'four', 'image':'url("src/UI/images/cat.JPG")', 'class':'2'},
                    {'id':'five', 'image':'url("src/UI/images/lambo.JPG")', 'class':'3'},
                    {'id':'six', 'image':'url("src/UI/images/lambo.JPG")', 'class':'3'},
                    {'id':'seven', 'image':'url("src/UI/images/plane.JPG")', 'class':'4'},
                    {'id':'eight', 'image':'url("src/UI/images/plane.JPG")', 'class':'4'},
                    {'id':'nine', 'image':'url("src/UI/images/beach.JPG")', 'class':'5'},
                    {'id':'ten', 'image':'url("src/UI/images/beach.JPG")', 'class':'5'},
                    {'id':'eleven', 'image':'url("src/UI/images/ferrari.JPG")', 'class':'6'},
                    {'id':'twelve', 'image':'url("src/UI/images/ferrari.JPG")', 'class':'6'}
                  ];

createDivs(tilesArray);
document.querySelector('#wrapperDiv').addEventListener('click', startGame);
const countOfTriesLabel = document.querySelector('#countOfTriesLabel');
const currentStack = [];
let countOfTries=0;

function startGame(event){
  // getClickedTile
  const selectedTile = event.target;

  // If the wrapperDiv is clicked or a has already been selected
  if(selectedTile.id === 'wrapperDiv' || selectedTile.style.backgroundImage !== "")
    return;

  //set the counter
  countOfTries++;
  countOfTriesLabel.textContent = countOfTries;

  // show the clicked tile. Display the image
  showClickedTile(selectedTile, tilesArray);

  // Main code
  evaluate(currentStack, selectedTile);

  // Check if the game is over
  checkIfWon(currentStack, countOfTries);

}
