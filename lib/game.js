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
    this.score = 0;
    this.dscore = 10;
    // Deep dup map
    this.map = JSON.parse(JSON.stringify(Loader.MAP));
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
    const maze = new Maze(this.ctx, this.map, this.blockSize);
    this.add(maze);
    return maze;
  }

  allObjects() {
    return [].concat(this.maze, this.cookieMon, this.ghosts);
  }

  eatPellet() {
    const cookieMon = this.cookieMon[0];
    const blockSize = Loader.BLOCK_SIZE;

    const x = Math.floor(cookieMon.pos[0] / blockSize);
    const y = Math.floor(cookieMon.pos[1] / blockSize);

    if (this.map[y][x] === 2) {
      this.map[y][x] = 1;
      this.score += this.dscore;
    }
  }

  moveableObjects() {
    return [].concat(this.cookieMon);
  }

  moveObjects() {
    this.moveableObjects().forEach(object => {
      this.eatPellet(); 
      object.move()
    });
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
    this.allObjects().forEach(object => object.render());
  }
}

module.exports = Game;