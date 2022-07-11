const evaluate = (currentStack, selectedTile) => {
    // Get the className and id of the selected Tile
    const selectedTileId = selectedTile.id;
    const selectedTileClassName = selectedTile.getAttribute('class');

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
        selectedTile.style.boxShadow ='green 0px 22px 70px 4px';
        topTile.style.boxShadow ='green 0px 22px 70px 4px';
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

export default evaluate;