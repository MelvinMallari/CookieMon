const Loader = require('./loader');

class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.dir = options.dir;
    this.vel = options.vel;
    // this.maze = options.maze;
  }

  willCollide() {
    // TODO: Figure out logic
    let blockSize = Loader.BLOCK_SIZE
    let borderOffset = blockSize*0.5;
    let x1 = Math.floor((this.pos[0] + this.dir[0] * 0.5 * blockSize) / blockSize);
    let y1 = Math.floor((this.pos[1] + this.dir[1] * 0.5 * blockSize) / blockSize);
    // let x2 = Math.ceil((this.pos[0] + this.dir[0] * 0.5 * blockSize) / blockSize);
    // let y2 = Math.ceil((this.pos[1] + this.dir[1] * 0.5 * blockSize) / blockSize);
    // let y2 = Math.floor((this.pos[1] + borderOffset + this.dir[1]) / Loader.BLOCK_SIZE);
    console.log(this.pos[0], this.pos[1]);
    let map = Loader.MAP;
    if (map[y1][x1] === 0) {
      return true;
    }
    false;
  }
  

  turn(dir) {
    // if (!this.willCollide()) {}
    this.dir = dir;
  }

  move() {
    if (!this.willCollide()) {
      this.pos = [
        this.pos[0] + this.dir[0] * this.vel,
        this.pos[1] + this.dir[1] * this.vel
      ];
    }
  }
}

module.exports = MovingObject;