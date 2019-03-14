const Maze = require('./maze');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const blockSize = 28;
  canvas.width = blockSize * 21;
  canvas.height = blockSize * 24;
  const ctx = canvas.getContext('2d');
  const maze = new Maze(ctx, blockSize);
  maze.render(ctx);
});