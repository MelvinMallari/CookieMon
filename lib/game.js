const CookieMon = require('./cookie_mon');
const Maze = require('./maze');
const Loader = require('./loader');

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.cookieMon = [];
    this.ghosts = [];
    this.maze = [];
    this.pellets = [];
    this.blockSize = Loader.BLOCK_SIZE;
    this.addMaze();
  }

  add(object) {
    if (object instanceof CookieMon) {
      this.cookieMon.push(object);
    } else if (object instanceof Maze) {
      this.maze.push(object);
    } else {
      throw new Error("unknown type of object");
    }
  }

  addCookieMon() {
    const cookieMon = new CookieMon({ ctx: this.ctx }); 
    this.add(cookieMon);
    return cookieMon;
  }

  addMaze() {
    const maze = new Maze(this.ctx, this.blockSize);
    this.add(maze);
    return maze;
  }

  allObjects() {
    return [].concat(this.maze, this.cookieMon, this.ghosts);
  }

  moveableObjects() {
    return [].concat(this.cookieMon);
  }

  moveObjects() {
    this.moveableObjects().forEach(object => object.move());
  }

  step() {
    this.moveObjects();
  }

  render() {
    this.ctx.clearRect(
      0,
      0,
      Loader.BLOCK_SIZE * Loader.WIDTH_BLOCKS,
      Loader.BLOCK_SIZE * Loader.HEIGHT_BLOCKS
    );
    // debugger;
    this.allObjects().forEach(object => object.render());
  }
}

module.exports = Game;