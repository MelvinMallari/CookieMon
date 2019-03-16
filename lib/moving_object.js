class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.dir = options.dir;
    this.vel = options.vel;
    // this.maze = options.maze;
  }

  willCollide() {
    // TODO: Figure out logic
  }

  move() {
    this.pos = [
      this.pos[0] + this.dir[0] * this.vel,
      this.pos[1] + this.dir[1] * this.vel
    ];
  }
}

module.exports = MovingObject;