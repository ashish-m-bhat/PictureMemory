// Display the image for a given tile
// Get the tile with the matching id from tilesArray. This will be an object. Get the image key

import { tilesArray } from "./variables.js";

const showClickedTile = selectedTile =>{
    const backgroundImage = (tilesArray.filter(eachTile => eachTile.id === selectedTile.id))[0].image;

    // Display the image and then animate. The showing of image first matters on a live website where the loading of image has a slight delay
    selectedTile.style.backgroundImage = backgroundImage;
    selectedTile.style.backgroundSize = 'contain';

    selectedTile.style.transition= 'all 0.6s ease';
    selectedTile.style.transform = 'rotateY(360deg)';
}
export default showClickedTile;