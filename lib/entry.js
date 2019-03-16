const Maze = require('./maze');
const CookieMon = require('./cookieMon');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const blockSize = 30;
  canvas.width = blockSize * 28;
  canvas.height = blockSize * 33;
  const ctx = canvas.getContext('2d');
  const maze = new Maze(ctx, blockSize);
  maze.render(ctx);
  const cookieMon = new CookieMon(ctx, 425, 425);
  cookieMon.render();
});