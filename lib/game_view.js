const Loader = require("./loader");
const CookieMon = require("./cookie_mon");

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.cookieMon = this.game.cookieMon[0];
    this.isPaused = false;
    document.addEventListener('keydown', this.bindKeyHandlers.bind(this));
  }

  bindKeyHandlers(e) {
    const key = e.key;
    if (KEYBINDINGS[key]) this.cookieMon.turn(KEYBINDINGS[key]);
    if (key === "p")  this.isPaused = !this.isPaused;
  }

  animate() {
    if (this.isPaused) {
      // no animation if paused
    } else {
      this.game.render();
      this.game.step();
    }

    requestAnimationFrame(this.animate.bind(this));
  }

  start() {
    requestAnimationFrame(this.animate.bind(this));
  }
}

const KEYBINDINGS = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
  ArrowUp: [0, -1],
  ArrowDown: [0, 1],
  ArrowLeft: [-1, 0],
  ArrowRight: [1, 0],
};

module.exports = GameView;