import TileMap from "./TileMap.js";

const tileSize = 32;
// entry point for our application
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const tileMap = new TileMap(tileSize);

// define a game loop, it will redraw the screen a certain number of times every one second
function gameLoop() {
  tileMap.draw();
}

setInterval(gameLoop, 1000 / 75);
