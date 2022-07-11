// Shuffle the array of tiles
/*
    1. Map thorugh the array and add a random value as the sortKey
    2. Sort according to the newly added key
    3. Map and remove the key

    Time complexity: O(nlog(n))
    Space complexity : O(n)
*/

const shuffleTilesArray = tilesArray =>{
    return tilesArray.map(eachTile => ({eachTile, sortKey:Math.random()}))
              .sort((a,b) => a.sortKey-b.sortKey)
              .map(({eachTile}) => eachTile);
}

export default shuffleTilesArray;