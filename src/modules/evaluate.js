const evaluate = (currentStack, selectedTile) => {
    // Get the className and id of the selected Tile
    const selectedTileId = selectedTile.id;
    const selectedTileClassName = selectedTile.getAttribute('class');

  // Check if there's a matching pair
  if(currentStack.length %2 ===0){
    currentStack.push(selectedTile);
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
        selectedTile.style.boxShadow ='green 0px 22px 70px 4px';
        topTile.style.boxShadow ='green 0px 22px 70px 4px';
      }
      // Wrong match
      else{
          // Put this in a setTimeout, else the 2nd wrongly chosen tile will not show the image, sice the removal of image & setting of red background takes place immedietly
          setTimeout(()=>{

            //  After 500ms:
            // remove the backgroundImage
            selectedTile.style.backgroundImage = '';
            topTile.style.backgroundImage = '';

            // Set the backgroundColor and box-shadow as red and shake it!
            selectedTile.style.backgroundColor = 'red';
            topTile.style.backgroundColor = 'red';
            selectedTile.style.boxShadow = 'red 0px 22px 70px 4px';
            topTile.style.boxShadow = 'red 0px 22px 70px 4px';

            selectedTile.classList.add('shake');
            topTile.classList.add('shake');

            // After the 1s, change the backgroundColor to blue and remove shadow

            setTimeout(()=>{
              selectedTile.style.backgroundColor = '#67cdfc';
              topTile.style.backgroundColor = '#67cdfc';

              selectedTile.style.boxShadow = '#005780 0px 22px 70px 4px';
              topTile.style.boxShadow = '#005780 0px 22px 70px 4px';

              selectedTile.classList.remove('shake');
              topTile.classList.remove('shake');

            }, 1000);
          },500);


      }
    }
  }
}

export default evaluate;