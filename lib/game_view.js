const Loader = require("./loader");
const CookieMon = require("./cookie_mon");

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.cookieMon = this.game.addCookieMon();
    document.addEventListener('keydown', this.bindKeyHandlers.bind(this));
  }

  bindKeyHandlers(e) {
    const key = e.key;
    if (KEYBINDINGS[key]){
      this.cookieMon.turn(KEYBINDINGS[key]);
    }
  }

  animate() {
    this.game.render();
    this.game.step();
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
};

module.exports = GameView;