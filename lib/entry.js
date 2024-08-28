const Game = require('./game');
const GameView = require('./game_view');
const Loader = require('./loader');

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  canvas.width = Loader.BLOCK_SIZE * Loader.WIDTH_BLOCKS;
  canvas.height = Loader.BLOCK_SIZE * Loader.HEIGHT_BLOCKS;
  const ctx = canvas.getContext('2d');

  const game = new Game(ctx);
  new GameView(game, ctx).start();
});
