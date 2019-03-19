const MovingObject = require('./moving_object');

const DEFAULTS = {
  dir: [-1, 0],
  pos: [
    [425,425]
  ],
  vel: 4,
  radius: 20, 
};

class Ghost extends MovingObject {
  constructor(options) {
    options.pos = DEFAULTS.pos;
    options.dir = DEFAULTS.dir;
    options.vel = DEFAULTS.vel;
    super(options);
    this.headRadius = DEFAULTS.radius;
    this.ctx = options.ctx;
    this.name = options.name;
    this.color = options.color;
    this.edible = false;
    this.dead = false;
    this.edibleColor = "#1919A6";
  }

  renderBody() {
    this.ctx.fillStyle = this.color;
    this.ctx.strokeStyle = this.color;
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.arc(
      this.pos[0][0], 
      this.pos[0][1],
      this.headRadius,
      0, 
      Math.PI, 
      true
    );

    this.ctx.lineTo(
      this.pos[0][0] - this.headRadius,
      this.pos[0][1] 
    );
    this.ctx.lineTo(
      this.pos[0][0] - this.headRadius, 
      this.pos[0][1] + 20 
    );
    this.ctx.lineTo(
      this.pos[0][0] - this.headRadius + 5, 
      this.pos[0][1] + 15 
    );
    this.ctx.lineTo(
      this.pos[0][0] - this.headRadius + 10, 
      this.pos[0][1] + 20 
    );
    this.ctx.lineTo(
      this.pos[0][0] - this.headRadius + 15, 
      this.pos[0][1] + 15 
    );
    this.ctx.lineTo(
      this.pos[0][0] - this.headRadius + 20, 
      this.pos[0][1] + 20 
    );
    this.ctx.lineTo(
      this.pos[0][0] - this.headRadius + 25, 
      this.pos[0][1] + 15 
    );
    this.ctx.lineTo(
      this.pos[0][0] - this.headRadius + 30, 
      this.pos[0][1] + 20 
    );
    this.ctx.lineTo(
      this.pos[0][0] - this.headRadius + 35, 
      this.pos[0][1] + 15 
    );
    this.ctx.lineTo(
      this.pos[0][0] - this.headRadius + 40, 
      this.pos[0][1] + 20 
    );
    this.ctx.lineTo(
      this.pos[0][0] + this.headRadius,
      this.pos[0][1] 
    );
    this.ctx.fill();
    this.ctx.stroke();
  }

  render() {
    this.renderBody();
  }
}

module.exports = Ghost;