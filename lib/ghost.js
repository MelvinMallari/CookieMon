const MovingObject = require('./moving_object');
const Loader = require('./loader');

const DEFAULTS = {
  dir: [-1, 0],
  pos: [ 14*Loader.BLOCK_SIZE, 11.5*Loader.BLOCK_SIZE ],
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
    this.eyeRadius = 5;
    this.pupilRadius = 1.125;
    this.ctx = options.ctx;
    this.name = options.name;
    this.color = options.color;
    this.edible = false;
    this.dead = false;
    this.edibleColor = "#1919A6";
    this.eyeColor = "#fff";
    this.pupilColor = "#111";
    this.animate = true;
    this.numSteps = 0;
  }

  renderBody() {
    this.ctx.fillStyle = this.color;
    this.ctx.strokeStyle = this.color;
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;

    let [outterOffset, offset1, offset2] = 
      this.animate ? [18, 15, 20] : [15, 20, 15];

    this.ctx.arc(
      this.pos[0], 
      this.pos[1],
      this.headRadius,
      0, 
      Math.PI, 
      true
    );
    this.ctx.lineTo(
      this.pos[0] - this.headRadius,
      this.pos[1] 
    );
    this.ctx.lineTo(
      this.pos[0] - this.headRadius, 
      this.pos[1] + outterOffset
    );
    this.ctx.lineTo(
      this.pos[0] - this.headRadius + 5, 
      this.pos[1] + offset1
    );
    this.ctx.lineTo(
      this.pos[0] - this.headRadius + 10, 
      this.pos[1] + offset2
    );
    this.ctx.lineTo(
      this.pos[0] - this.headRadius + 15, 
      this.pos[1] + offset1 
    );
    this.ctx.lineTo(
      this.pos[0] - this.headRadius + 20, 
      this.pos[1] + offset2
    );
    this.ctx.lineTo(
      this.pos[0] - this.headRadius + 25, 
      this.pos[1] + offset1 
    );
    this.ctx.lineTo(
      this.pos[0] - this.headRadius + 30, 
      this.pos[1] + offset2
    );
    this.ctx.lineTo(
      this.pos[0] - this.headRadius + 35, 
      this.pos[1] + offset1
    );
    this.ctx.lineTo(
      this.pos[0] - this.headRadius + 40, 
      this.pos[1] + outterOffset
    );
    this.ctx.lineTo(
      this.pos[0] + this.headRadius,
      this.pos[1] 
    );
    this.ctx.fill();
    this.ctx.stroke();
  }

  renderEyes() {
    this.ctx.fillStyle = this.eyeColor;
    this.ctx.strokeStyle = this.eyeColor;
    this.ctx.beginPath();
    this.ctx.arc(
      this.pos[0] - 8, 
      this.pos[1] - 5,
      this.eyeRadius,
      0, 
      2*Math.PI, 
    );
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(
      this.pos[0] + 8, 
      this.pos[1] - 5,
      this.eyeRadius,
      0, 
      2*Math.PI, 
    );
    this.ctx.fill();
    this.ctx.stroke();
  }

  renderEyes() {
    this.ctx.fillStyle = this.eyeColor
    this.ctx.strokeStyle = this.eyeColor;
    this.ctx.beginPath();
    this.ctx.arc(
      this.pos[0] - 8, 
      this.pos[1] - 5,
      this.eyeRadius,
      0, 
      2*Math.PI
    );
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(
      this.pos[0] + 8, 
      this.pos[1] - 5,
      this.eyeRadius,
      0, 
      2*Math.PI 
    );
    this.ctx.fill();
    this.ctx.stroke();
  }

  renderPupils() {
    this.ctx.fillStyle = this.pupilColor;
    this.ctx.strokeStyle = this.pupilColor;
    this.ctx.beginPath();
    this.ctx.arc(
      this.pos[0] - 5, 
      this.pos[1] - 5,
      this.pupilRadius,
      0, 
      2*Math.PI, 
    );
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(
      this.pos[0] + 11, 
      this.pos[1] - 5,
      this.pupilRadius,
      0, 
      2*Math.PI, 
    );
    this.ctx.fill();
    this.ctx.stroke(); 
  }

  animateBody() {
    this.numSteps += 1;
    if (this.numSteps >= 15) {
      this.animate = !this.animate;
      this.numSteps = 0;
    }
    this.renderBody();
  }

  move() {
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

  render() {
    this.animateBody();
    this.renderEyes();
    this.renderPupils();
  }
}

module.exports = Ghost;