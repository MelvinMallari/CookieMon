const MovingObject = require('./moving_object');
const Loader = require('./loader');

const DEFAULTS = {
  dir: [1, 0],
  pos: [13.5*Loader.BLOCK_SIZE, 23.5*Loader.BLOCK_SIZE],
  vel: 4,
};

class CookieMon extends MovingObject {
  constructor(options) {
    options.pos = DEFAULTS.pos;
    options.dir = DEFAULTS.dir;
    options.vel = DEFAULTS.vel;
    super(options);
    this.ctx = options.ctx;
    this.headRadius = 20;
    this.eyeRadius = 4;
    this.pupilRadius = 1;
    this.ctx.fillStyle = "#00adef";
    this.ctx.strokeStyle = "#00adef";
    this.mouthOpen = true;
    this.numSteps = 0;
    this.eyeOffsets = [
      [7, 22, -3, 22],
      [22, 7, 22, -3],
      [7, 22, -3, 22],
      [-22, 7, -22, -3, 22],
    ];
    this.pupilOffsets = [
      [7, 23.5, -3, 20.5],
      [23.5, 7, 20.5, -3],
      [7, 20.5, -3, 23.5],
      [-23.5, 7, -20.5, -3],
    ];
    this.mouthOpenAngles = [
      [Math.PI / 4, 2 * Math.PI - Math.PI / 4 ],
      [Math.PI / 2 + Math.PI / 4, Math.PI / 2 - Math.PI / 4 ],
      [Math.PI + Math.PI / 4, Math.PI - Math.PI / 4 ],
      [3 * Math.PI / 2 + Math.PI / 4, 3 * Math.PI / 2 - Math.PI / 4 ],
    ];
    this.mouthClosedAngles = [
      [Math.PI / 8, 2 * Math.PI - Math.PI / 8 ],
      [Math.PI / 2 + Math.PI / 8, Math.PI / 2 - Math.PI / 8 ],
      [Math.PI + Math.PI / 8, Math.PI - Math.PI / 8 ],
      [3 * Math.PI / 2 + Math.PI / 8, 3 * Math.PI / 2 - Math.PI / 8 ],
    ];
  }

  renderHead(state) {
    this.ctx.fillStyle = "#00adef";
    this.ctx.strokeStyle = "#00adef";
    this.ctx.beginPath();

    let angles;
    if (this.mouthOpen) {
      angles = [
        this.mouthOpenAngles[state][0],
        this.mouthOpenAngles[state][1],
     ];
    } else {
      angles = [
        this.mouthClosedAngles[state][0],
        this.mouthClosedAngles[state][1],
     ];
    }

    this.ctx.arc(
      this.pos[0], 
      this.pos[1], 
      this.headRadius,
      angles[0],
      angles[1]
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

  renderEyes(state) {
    this.renderEye(
      this.pos[0] + this.eyeOffsets[state][0], 
      this.pos[1] - this.eyeOffsets[state][1]
    );
    this.renderEye(
      this.pos[0] + this.eyeOffsets[state][2], 
      this.pos[1] - this.eyeOffsets[state][3]
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

  renderPupils(state) {
    this.renderPupil(
      this.pos[0] + this.pupilOffsets[state][0],
      this.pos[1] - this.pupilOffsets[state][1]
    );
    this.renderPupil(
      this.pos[0] + this.pupilOffsets[state][2],
      this.pos[1] - this.pupilOffsets[state][3]
    );
  }

  animateMouth() {
    this.numSteps += 1;
    if (this.numSteps >= 12) {
      this.mouthOpen = !this.mouthOpen;
      this.numSteps = 0;
    }
  }

  arrayCompare(a, b) {
    return JSON.stringify(this.dir) === JSON.stringify(b);
  }

  render() {
    let state;
    if (this.arrayCompare(this.dir, [1, 0])) {
      state = 0; 
    } else if (this.arrayCompare(this.dir, [0, 1])) {
      state = 1;
    } else if (this.arrayCompare(this.dir, [-1, 0])) {
      state = 2;
    } else {
      state = 3;
    }

    this.animateMouth();
    this.renderHead(state);
    this.renderEyes(state);
    this.renderPupils(state);
  }
}

module.exports = CookieMon;