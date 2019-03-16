const Loader = require("./loader");
const CookieMon = require("./cookie_mon");

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    // this.cookieMon = new CookieMon(this.ctx,)
    // document.addEventListener('keydown', this.bindKeyHandlers.bind(this));
  }

  bindKeyHandlers() {

  }

}

module.exports = GameView;