const Loader = require("./loader");
const CookieMon = require("./cookie_mon");

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.cookieMon = this.game.cookieMon[0];
    this.isPaused = false;
    this.fillLivesArray();
    document.addEventListener('keydown', this.bindKeyHandlers.bind(this));
  }

  animate() {
    if (this.isPaused) {
      // no animation if paused
    } else {
      this.game.render();
      this.game.step();
    }
    this.displayLives();
    this.displayScore();
    requestAnimationFrame(this.animate.bind(this));
  }

  bindKeyHandlers(e) {
    const key = e.key;
    if (KEYBINDINGS[key]) this.cookieMon.turn(KEYBINDINGS[key]);
    if (key === "p")  this.isPaused = !this.isPaused;
    if (key === "r")  this.game.reset();
  }
  

  displayLives() {
    this.ctx.font = "30px Fascinate Inline";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "left";
    this.ctx.fillText(
      "Lives: ",
      1*Loader.BLOCK_SIZE,
      32*Loader.BLOCK_SIZE + 8
    );
    this.displayCookieMonLives();
  }

  displayScore() {
    this.ctx.font = "30px Fascinate Inline";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "left";
    this.ctx.fillText(
      "Score: " + this.game.score,
      20*Loader.BLOCK_SIZE,
      32*Loader.BLOCK_SIZE + 8
    );
    this.displayCookieMonLives();
  }

  displayCookieMonLives() {
    for (let i = 0; i < this.game.lives; i++) {
      this.cookieMonLivesArray[i].renderPausedCookieMon();
    }
  }

  fillLivesArray() {
    this.cookieMonLivesArray = [
      new CookieMon({ 
        ctx: this.ctx, 
        vel: 0, 
        pos: [
          5*Loader.BLOCK_SIZE,
          32*Loader.BLOCK_SIZE
        ]
      }),
      new CookieMon({ 
        ctx: this.ctx, 
        vel: 0, 
        pos: [
          6.5*Loader.BLOCK_SIZE,
          32*Loader.BLOCK_SIZE
        ]
      })
    ];
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