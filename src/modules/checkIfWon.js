import resetGame from "./resetGame.js";

export default function checkIfWon(currentStack, countOfTries){
    // If stack length is 12, game over
    // All the tiles are in the stack now
    if(currentStack.length === 12){
        setTimeout(()=>{
          alert(`You've won! with ${countOfTries} tries`);
          resetGame();
        },500)}
}