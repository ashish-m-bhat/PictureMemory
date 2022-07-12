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
        // Helper array
        const pairsArray = [selectedTile, topTile];

          // Put this in a setTimeout, else the 2nd wrongly chosen tile will not show the image, since the removal of image & setting of red background takes place immedietly
          setTimeout(()=>{
            // After 500ms

            pairsArray.forEach(eachTile => {

            // remove the backgroundImage
            eachTile.style.backgroundImage = '';

            // Reset the transtion and transfrom. Skipping this will lead animation not showing up the 2nd time onwards a tile has been clicked
            eachTile.style.transition = 'all 0s ease 0s';
            eachTile.style.transform = 'none';

            // Set the backgroundColor and box-shadow as red and shake it!
            eachTile.style.backgroundColor = 'red';
            eachTile.style.boxShadow = 'red 0px 22px 70px 4px';

            eachTile.classList.add('shake');
            })


            // After the 1s, change the backgroundColor to blue and remove shadow

            setTimeout(()=>{
              pairsArray.forEach(eachTile => {
                eachTile.style.backgroundColor = '#67cdfc';
                eachTile.style.boxShadow = '#005780 0px 22px 70px 4px';
                eachTile.classList.remove('shake');
              });
            }, 500);

          },1000);


      }
    }
  }
}

export default evaluate;