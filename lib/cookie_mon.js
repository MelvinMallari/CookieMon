const MovingObject = require('./moving_object');
const Loader = require('./loader');

const DEFAULTS = {
  dir: [1, 0],
  pos: [13.5*Loader.BLOCK_SIZE, 23.5*Loader.BLOCK_SIZE],
  vel: 4,
};

const PI = Math.PI;

class CookieMon extends MovingObject {
  constructor(options) {
    options.pos = options.pos || DEFAULTS.pos;
    options.dir = DEFAULTS.dir;
    options.vel = options.vel || DEFAULTS.vel;
    options.startingPos = DEFAULTS.pos;
    super(options);
    this.ctx = options.ctx;
    this.ctx.lineCap = 'butt';
    this.headRadius = 15;
    this.eyeRadius = 3;
    this.pupilRadius = 1;
    this.ctx.fillStyle = "#00adef";
    this.ctx.strokeStyle = "#00adef";
    this.mouthOpen = true;
    this.numSteps = 0;
    this.eyeOffsets = [
      [7, 16, -3, 16],
      [16, 7, 16, -3],
      [7, 16, -3, 16],
      [-16, 7, -16, -3, 16]
    ];
    this.pupilOffsets = [
      [7, 17.5, -3, 14.5],
      [17.5, 7, 14.5, -3],
      [7, 14.5, -3, 17.5],
      [-17.5, 7, -14.5, -3]
    ];
    this.mouthOpenAngles = [
      [PI / 4, 2 * PI - PI / 4],
      [PI / 2 + PI / 4, PI / 2 - PI / 4],
      [PI + PI / 4, PI - PI / 4],
      [3 * PI / 2 + PI / 4, 3 * PI / 2 - PI / 4]
    ];
    this.mouthClosedAngles = [
      [PI / 8, 2 * PI - PI / 8],
      [PI / 2 + PI / 8, PI / 2 - PI / 8],
      [PI + PI / 8, PI - PI / 8],
      [3 * PI / 2 + PI / 8, 3 * PI / 2 - PI / 8]
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
    this.ctx.arc(x, y, this.eyeRadius, 0, 2 * PI);
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

  renderCookieMon(state) {
    this.animateMouth();
    this.renderHead(state);
    this.renderEyes(state);
    this.renderPupils(state);
  }

  renderPausedCookieMon() {
    this.vel = 0;
    // this.animateMouth();
    this.renderHead(0);
    this.renderEyes(0);
    this.renderPupils(0);
  }

  renderPupil(x, y) {
    this.ctx.fillStyle = "#000";
    this.ctx.strokeStyle = "#000";
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.pupilRadius, 0, 2 * PI);
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
      }}


  arrayCompare(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
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
    this.renderCookieMon(state);
    // this.renderPausedCookieMon();
  }
}

module.exports = CookieMon;