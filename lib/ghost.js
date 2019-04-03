const MovingObject = require('./moving_object');
const Loader = require('./loader');

const DEFAULTS = {
  dir: [-1, 0],
  vel: 2.5,
  radius: 20, 
  directions: [[-1, 0], [1, 0], [0, 1], [0, -1]]
};

class Ghost extends MovingObject {
  constructor(options) {
    options.dir = DEFAULTS.dir;
    options.vel = DEFAULTS.vel;
    options.pos = options.startingPos;
    super(options);
    this.cookieMon = options.cookieMon;
    this.name = options.name;
    this.color = options.color;
    this.ctx = options.ctx;

    this.headRadius = DEFAULTS.radius;
    this.eyeRadius = 5;
    this.pupilRadius = 1.125;
    this.edible = false;
    this.dead = false;
    this.edibleColor = "#1919A6";
    this.eyeColor = "#fff";
    this.pupilColor = "#111";
    this.animate = true;
    this.numSteps = 0;
    
    this.prevPosition = [];
    this.prevPositionCounter = 0;
    this.moveRandom = false;
    this.stalledPosLimit = 20;

    this.randDirection = [];
    this.randDirCounter = 0;
  }

  animateBody() {
    this.numSteps += 1;
    if (this.numSteps >= 15) {
      this.animate = !this.animate;
      this.numSteps = 0;
    }
    this.renderBody();
  }

  calcDist(pos1, pos2) {
    // optimized by not taking square root
    return (Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2));
  }

  calcPosDiffs(pos1, pos2) {
    return [Math.abs(pos1[0] - pos2[0]), Math.abs(pos1[1] - pos2[1])];
  }

  calcStep(dir) {
    return [this.pos[0] + this.vel * dir[0], this.pos[1] + this.vel * dir[1]];
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

  updatePrevPosition() {
    if (!this.prevPosition.length) {
      this.prevPosition = this.pos;
    } else { 
      if (this.prevPositionCounter === this.stalledPosLimit) {
        this.prevPosition = this.pos;
        this.prevPositionCounter = 0;
        this.moveRandom = false;
      } else {
        this.prevPositionCounter++;
      }
    }
  }

  determineRandPath() {
    // Determines a rand direction for the maxFrameCount
    const maxFrameCount = 40;
    if (this.randDirCounter === 0) {
      this.randDirection = DEFAULTS.directions[Math.floor(4 * Math.random())];
    } 
    this.randDirCounter++;
    if (this.randDirCounter === maxFrameCount) {
      this.randDirCounter = 0;
      this.moveRandom  = false;
    }
  }

  move() {
    if (this.moveRandom) {
      this.determineRandPath();
      let randomStep = this.calcStep(this.randDirection);
      if (!this.willCollide(randomStep, this.randDirection)) {
        this.pos = randomStep;
      }
    } else {
      let targetPos;

      if (this.name === "blinky") {
        targetPos = this.cookieMon.pos;
      }

      if (this.name === "pinky") {
        const cookieMon = this.cookieMon;
        targetPos = [
          cookieMon.pos[0] + 4 * cookieMon.dir[0] * cookieMon.vel,
          cookieMon.pos[1] + 4 * cookieMon.dir[1] * cookieMon.vel
        ];
      }

      if (this.name === "inky") {
        const cookieMon = this.cookieMon;
        targetPos = [
          cookieMon.pos[0] - 4 * cookieMon.dir[0] * cookieMon.vel,
          cookieMon.pos[1] - 4 * cookieMon.dir[1] * cookieMon.vel
        ];
      }

      if (this.name === "clyde") {
        const cookieMon = this.cookieMon;
        const distFromCookieMon = Math.sqrt(
            Math.pow(this.pos[0] - cookieMon.pos[0], 2)
          + Math.pow(this.pos[1] - cookieMon.pos[1], 2)
        );

        if (distFromCookieMon > 100) {
          targetPos = cookieMon.pos;
        } else {
          targetPos = [2*Loader.BLOCK_SIZE, 4*Loader.BLOCK_SIZE];
        }
      }
      debugger;
      this.target(targetPos);
      this.updatePrevPosition();
    }
  }

  moveRandomly() {
    // Move Randomly to prevent corner stalling
    const randomDirection = DEFAULTS.directions[Math.floor(4 * Math.random())];
    const randomStep = this.calcStep(randomDirection);

    if (!this.willCollide(randomStep, randomDirection)) {
      this.pos = randomStep;
    } else {
      this.moveRandomly();
    }
  }

  target(pos) {
    const directions = DEFAULTS.directions;

    if (this.calcDist(this.pos, this.prevPosition) < 100 && this.prevPositionCounter > 5) {
      this.moveRandom = true;
      return;
    }

    const potentialSteps = [
      [this.calcDist(pos, this.calcStep(directions[0])), 0],
      [this.calcDist(pos, this.calcStep(directions[1])), 1],
      [this.calcDist(pos, this.calcStep(directions[2])), 2],
      [this.calcDist(pos, this.calcStep(directions[3])), 3],
    ].sort((a, b) => a[0] > b[0] ? 1 : -1);

    for (let i = 0; i < potentialSteps.length; i++) {
      let currDirection = directions[potentialSteps[i][1]];
      let currNextStep = this.calcStep(currDirection);

      if (!this.willCollide(currNextStep, currDirection)) {
        this.pos = currNextStep;
        return;
      }
    }
  }

  render() {
    this.animateBody();
    this.renderEyes();
    this.renderPupils();
  }
}

module.exports = Ghost;