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
    let x = Math.floor(((pos[0] + dir[0] * 0.5 * blockSize)) / blockSize);
    let y = Math.floor(((pos[1] + dir[1] * 0.5 * blockSize)) / blockSize);

    const notCentered = (pos[0] % blockSize !== 0 || pos[1] % blockSize !== 0);
    return (map[y][x] === 0 && notCentered) ? true : false;
  }

  turn(dir) {
    const nextNextStep = [
      [this.pos[0] + dir*this.vel],
      [this.pos[1] + dir*this.vel],
    ];

    if (!this.willCollide(this.pos, dir)){
      this.dir = dir;
      this.queuedDir = undefined;
    } else {
      this.queuedDir = dir;
    }
  }

  wrap() {
    const borderOffset = Loader.BLOCK_SIZE * 0.5;
    const gameWidth = Loader.WIDTH_BLOCKS * Loader.BLOCK_SIZE;
    const gameHalfHeight = Loader.BLOCK_SIZE * 14 + borderOffset;
    console.log(gameHalfHeight);

    if (this.pos[0] > gameWidth && this.dir[0] === 1) {
      this.pos = [0, gameHalfHeight];
    } else if (this.pos[0] < 0 && this.dir[0] === -1) {
      this.pos = [gameWidth, gameHalfHeight];
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

    // let nextNextStep = [
    //   this.pos[0] + 4 * this.dir[0] * this.vel,
    //   this.pos[1] + 4 * this.dir[1] * this.vel
    // ];

    if (!this.willCollide(nextStep, this.dir)) {
      this.pos = [
        this.pos[0] + this.dir[0] * this.vel,
        this.pos[1] + this.dir[1] * this.vel
      ];
    }
    this.wrap();
  }
}

module.exports = MovingObject;