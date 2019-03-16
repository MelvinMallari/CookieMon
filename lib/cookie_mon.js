const MovingObject = require('./moving_object');

const DEFAULTS = {
  dir: [1, 0],
  pos: [425, 425],
  vel: 3
};

class CookieMon extends MovingObject {
  constructor(options) {
    options.pos = DEFAULTS.pos;
    options.dir = DEFAULTS.dir;
    options.vel = DEFAULTS.vel;
    super(options);
    // debugger;
    this.ctx = options.ctx;
    this.headRadius = 20;
    this.eyeRadius = 4;
    this.pupilRadius = 1;
    this.ctx.fillStyle = "#00adef";
    this.ctx.strokeStyle = "#00adef";
    this.eyeOffsets = [
      [7, 22],
      [-3, 22]
    ];
    this.pupilOffsets = [
      [7, 23.5],
      [-3, 20.5],
    ];
  }

  renderHead() {
    this.ctx.fillStyle = "#00adef";
    this.ctx.strokeStyle = "#00adef";
    this.ctx.beginPath();
    this.ctx.arc(
      this.pos[0], 
      this.pos[1], 
      this.headRadius, 
      Math.PI / 4,
      2 * Math.PI - Math.PI / 4,
    );
    this.ctx.lineTo(this.pos[0], this.pos[1]);
    this.ctx.fill();
    this.ctx.stroke();
  }

  renderEye(x, y) {
    this.ctx.fillStyle = "#fff";
    this.ctx.strokeStyle = "#fff";
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.eyeRadius, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
  }

  renderEyes() {
    this.renderEye(
      this.pos[0] + this.eyeOffsets[0][0], 
      this.pos[1] - this.eyeOffsets[0][1]
    );
    this.renderEye(
      this.pos[0] + this.eyeOffsets[1][0], 
      this.pos[1] - this.eyeOffsets[1][1]
    );
  }

  renderPupil(x, y) {
    this.ctx.fillStyle = "#000";
    this.ctx.strokeStyle = "#000";
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.pupilRadius, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
  }

  renderPupils() {
    this.renderPupil(
      this.pos[0] + this.pupilOffsets[0][0],
      this.pos[1] - this.pupilOffsets[0][1]
    );
    this.renderPupil(
      this.pos[0] + this.pupilOffsets[1][0],
      this.pos[1] - this.pupilOffsets[1][1]
    );
  }

  render() {
    this.renderHead();
    this.renderEyes();
    this.renderPupils();
  }
}

module.exports = CookieMon;