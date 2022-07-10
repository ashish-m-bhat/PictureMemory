const start = document.querySelector('#start');
var countOfBlocks = 5;

function createDivs(){

  const outerDiv = document.createElement('div');

  outerDiv.setAttribute('id', 'outerDiv');
  outerDiv.style.cssText = "border:5px solid red;height:50vh;width:100vw;display:flex;justify-content:center";
  document.body.appendChild(outerDiv);

  for(let i=1;i<=countOfBlocks;i++){
    const innerDiv = document.createElement('div');
    innerDiv.setAttribute('id', i.toString());
    const width = 100/countOfBlocks + 'vw';
    innerDiv.style.cssText="border:3px solid blue;height:50vh;cursor:pointer"
    innerDiv.style.width = width;
    outerDiv.append(innerDiv);
  }
}


document.querySelector('#wrapper').addEventListener('click', startGame);
const currentStack = [];
let countOfTries=0;

function startGame(event){


  // getClickedTile
  const selectedTile = event.target;
  if(selectedTile.id === 'wrapper')
    return;
  countOfTries++;
  const selectedTileClassName = selectedTile.getAttribute('class');
  const selectedTileId = selectedTile.id;

  // showClickedTile
  selectedTile.textContent = selectedTileClassName;

  //  selectedTile.style.backgroundColor = 'red';

  // Check if there's a matching pair
  if(currentStack.length %2 ===0){
    currentStack.push(selectedTile);
    selectedTile.style.backgroundColor = 'yellow';
  }
  else{
    // check
    const topTile = currentStack.pop();
    const topClassName = topTile.getAttribute('class'), topId = topTile.id;

    // check if same element has been clicked. Ids must be different
    if(topId !== selectedTileId){

      // If classNames match, it's a match!
      if(topClassName === selectedTileClassName){
        currentStack.push(topTile, selectedTile);
        selectedTile.style.backgroundColor = 'green';
        topTile.style.backgroundColor = 'green';

        if(currentStack.length === 6){
          setTimeout(()=>{
            alert(`You've won! with ${countOfTries} tries`);
            location.reload();
          },500)

        }

      }
      else{
        selectedTile.style.backgroundColor = 'red';
        topTile.style.backgroundColor = 'red';
        setTimeout(()=>{
          selectedTile.textContent="";
          topTile.textContent="";

        selectedTile.style.backgroundColor = '#67cdfc';
        topTile.style.backgroundColor = '#67cdfc';

        }, 1000);

      }
    }
  }
}
