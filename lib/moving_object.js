const Loader = require('./loader');

class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.dir = options.dir;
    this.vel = options.vel;
    this.queuedDir = undefined;
    // this.maze = options.maze;
  }

  willCollide(pos, dir) {
    // TODO: Figure out logic
    let blockSize = Loader.BLOCK_SIZE;
    // let borderOffset = blockSize*0.5;
    let map = Loader.MAP;
    let x = Math.floor(((pos[0] + dir[0] * 0.4 * blockSize)) / blockSize);
    let y = Math.floor(((pos[1] + dir[1] * 0.4 * blockSize)) / blockSize);
    return (map[y][x] === 0) ? true : false;
  }

  turn(dir) {
    if (!this.willCollide(this.pos, dir)) {
      this.dir = dir;
      this.queuedDir = undefined;
    } else {
      this.queuedDir = dir;
    }
  }

  move() {
    if (this.queuedDir && !this.willCollide(this.pos, this.queuedDir)) {
      this.dir = this.queuedDir;
      this.queuedDir = undefined;
    }

    // console.log(this.pos[0] % Loader.BLOCK_SIZE === 0,
    //             this.pos[1] % Loader.BLOCK_SIZE === 0);

    let nextStep = [
      this.pos[0] + this.dir[0] * this.vel,
      this.pos[1] + this.dir[1] * this.vel
    ];

    if (!this.willCollide(nextStep, this.dir)) {
      this.pos = [
        this.pos[0] + this.dir[0] * this.vel,
        this.pos[1] + this.dir[1] * this.vel
      ];
    }
  }
}

module.exports = MovingObject;