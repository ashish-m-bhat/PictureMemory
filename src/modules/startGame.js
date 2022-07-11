import checkIfWon from "./checkIfWon.js";
import evaluate from "./evaluate.js";
import showClickedTile from "./showClickedTile.js";
import { countOfTriesLabel, currentStack } from "./variables.js";


// Gets called when player clicks the Start button
  const startGame = () =>{

    // Track and display number of tries/clicks
    let countOfTries=0;

    // Hide the start Button
    document.querySelector('#startGameButton').hidden = 'true';

    // Illuminate the tiles and change the cursor type to pointer
    [...document.body.querySelector('#wrapperDiv').children].forEach(eachTile => eachTile.classList.add('gameOn'));

    // start listening to clicks
    document.querySelector('#wrapperDiv').addEventListener('click', event =>{
            // getClickedTile
            const selectedTile = event.target;

            // If the wrapperDiv is clicked or a has already been selected
            if(selectedTile.id === 'wrapperDiv' || selectedTile.style.backgroundImage !== "")
                return;

            //set the counter
            countOfTries++;
            countOfTriesLabel.textContent = countOfTries;

            // Display the image
            showClickedTile(selectedTile);

            // Main code calculation
            evaluate(currentStack, selectedTile);

            // Check if the game is over. If yes, resetGame
            checkIfWon(currentStack, countOfTries);
    });


}

export default startGame;