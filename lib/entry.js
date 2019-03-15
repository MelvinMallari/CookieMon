const Maze = require('./maze');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const blockSize = 25;
  canvas.width = blockSize * 28;
  canvas.height = blockSize * 33;
  const ctx = canvas.getContext('2d');
  const maze = new Maze(ctx, blockSize);
  maze.render(ctx);
});