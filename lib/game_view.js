const Loader = require("./loader");
const CookieMon = require("./cookie_mon");

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.cookieMon = this.game.cookieMon[0];
    this.isPaused = false;
    this.startGame = false;
    this.fillLivesArray();
    document.addEventListener('keydown', this.bindKeyHandlers.bind(this));
  }

  animate() {
    if (this.startGame) {
      if (this.isPaused) {
        // no animation if paused
      } else {
        this.game.render();
        this.game.step();
      }
    } else {
      this.game.render();
      this.displayBeginning();
    }
    this.displayLives();
    this.displayScore();
    requestAnimationFrame(this.animate.bind(this));

  }

  bindKeyHandlers(e) {
    const key = e.key;
    if (KEYBINDINGS[key] && this.startGame) this.cookieMon.turn(KEYBINDINGS[key]);
    if (key === "p")  this.isPaused = !this.isPaused;
    if (key === "r")  {
      this.game.reset();
      this.startGame = false;
    }
    if (key === " ") this.startGame = true;
  }
  

  displayLives() {
    this.ctx.font = "30px Pixel Emulator";
    this.ctx.fillStyle = "#eee";
    this.ctx.textAlign = "left";
    this.ctx.fillText(
      "Lives: ",
      1*Loader.BLOCK_SIZE,
      32*Loader.BLOCK_SIZE + 8
    );
    this.displayCookieMonLives();
  }

  displayScore() {
    this.ctx.font = "30px Pixel Emulator";
    this.ctx.fillStyle = "#eee";
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
          5.5*Loader.BLOCK_SIZE,
          32*Loader.BLOCK_SIZE
        ]
      }),
      new CookieMon({ 
        ctx: this.ctx, 
        vel: 0, 
        pos: [
          7*Loader.BLOCK_SIZE,
          32*Loader.BLOCK_SIZE
        ]
      }),
      new CookieMon({ 
        ctx: this.ctx, 
        vel: 0, 
        pos: [
          8.5*Loader.BLOCK_SIZE,
          32*Loader.BLOCK_SIZE
        ]
      }),
      ];
  }

  displayBeginning() {
    this.ctx.font = "30px Pixel Emulator";
    this.ctx.fillStyle = "#eee";
    this.ctx.textAlign = "left";
    this.ctx.fillText(
      "Ready?",
      12*Loader.BLOCK_SIZE,
      14.75*Loader.BLOCK_SIZE
    );
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