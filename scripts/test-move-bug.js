function createGrid(tiles) {
  let grid = document.getElementById("game-grid");

  const bugStart = 18;
  const playerStart = 20;
  
  for (let i = 0; i < tiles; i++) {
    const tile = document.createElement("div");
    const textNode = document.createTextNode(i);
    tile.appendChild(textNode);

    tile.classList.add("tile");
    tile.id = `${i}`

    if (i == bugStart) {
      tile.classList.add("bug");
    }
    
    if (i == playerStart) {
      tile.classList.add("player");
    }

    grid.appendChild(tile);
  }
}

function move(object, direction) {
  const currentTile = document.querySelector(`.${object}`);
  let position = parseInt(currentTile.id);
  console.log(position);
  
  if (direction == 'up') {
    position -= 6;
  }
  
  if (direction == 'down') {
    position += 6;
  }
  
  if (direction == 'left') {
    position -= 1;
  }
  
  if (direction == 'right') {
    position += 1
  }
  console.log(position);

  const newTile = document.getElementById(position);
  currentTile.classList.remove(object)
  newTile.classList.add(object)

}

createGrid(36);