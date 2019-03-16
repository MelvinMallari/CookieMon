const Loader = require("./loader");
const CookieMon = require("./cookie_mon");

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.cookieMon = this.game.addCookieMon();
  }

  bindKeyHandlers() {
    // const cookieMon = this.cookieMon;
    // Object.keys(GameView.MOVES).forEach(k => {
    //   const move = GameView.moves[k];
    //   key(k, () => );
    // })
  }

  animate() {
    this.game.render();
    requestAnimationFrame(this.animate.bind(this));
  }

  start() {
    this.bindKeyHandlers();
    requestAnimationFrame(this.animate.bind(this));
  }

}

GameView.MOVES = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
};

module.exports = GameView;