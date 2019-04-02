const MovingObject = require('./moving_object');
const Loader = require('./loader');

const DEFAULTS = {
  dir: [-1, 0],
  pos: [ 14*Loader.BLOCK_SIZE, 11.5*Loader.BLOCK_SIZE ],
  vel: 2,
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
    this.cookieMon = options.cookieMon;
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
    this.target(this.cookieMon.pos);
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

  target(pos) {
    const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    const cookieMonPos = this.cookieMon.pos;
    const potentialSteps = [
      [this.calcDist(cookieMonPos, this.calcStep(directions[0])), 0],
      [this.calcDist(cookieMonPos, this.calcStep(directions[1])), 1],
      [this.calcDist(cookieMonPos, this.calcStep(directions[2])), 2],
      [this.calcDist(cookieMonPos, this.calcStep(directions[3])), 3],
    ].sort((a, b) => a[0] > b[0] ? 1 : -1);


    for (let i = 0; i < potentialSteps.length; i++) {
      let currDirection = directions[potentialSteps[i][1]];
      let currNextStep = this.calcStep(currDirection);
      if (!this.willCollide(currNextStep, currDirection)) {
        this.pos = currNextStep;
        return;
      }
    }

    // const [dx, dy] = this.calcPosDiffs(this.pos, pos);
    // const cookieMonPos = this.cookieMon.pos;
    // if (dx >= dy) {
    //   if (!this.moveX(cookieMonPos)) this.moveY(cookieMonPos);
    // } else {
    //   if (!this.moveY(cookieMonPos)) this.moveX(cookieMonPos);
    // }
  }

  // moveX(pos) {
  //   const xDirections = [[-1, 0], [1, 0]];

  //   const leftStep = [
  //     this.pos[0] + xDirections[0][0]*this.vel,
  //     this.pos[1] + xDirections[0][1]*this.vel
  //   ];

  //   const rightStep = [
  //     this.pos[0] + xDirections[1][0]*this.vel,
  //     this.pos[1] + xDirections[1][1]*this.vel
  //   ];

  //   const leftDiff = this.calcPosDiffs(leftStep, pos);
  //   const rightDiff = this.calcPosDiffs(rightStep, pos);

  //   if (leftDiff[0] < rightDiff[0] && !this.willCollide(leftStep, xDirections[0])) {
  //     this.dir = xDirections[0];
  //     this.pos = [this.pos[0] + this.dir[0] * this.vel, this.pos[1] + this.dir[1] * this.vel];
  //     return true;
  //   } else if (rightDiff[0] <= leftDiff[0] && !this.willCollide(rightStep, xDirections[1])){
  //     this.dir = xDirections[1];
  //     this.pos = [this.pos[0] + this.dir[0] * this.vel, this.pos[1] + this.dir[1] * this.vel];
  //     return true;
  //   }
  //   return false;
  // }

  // moveY(pos) {
  //   const yDirections = [[0, -1], [0, 1]];

  //   const downStep = [
  //     this.pos[0] + yDirections[0][0]*this.vel,
  //     this.pos[1] + yDirections[0][1]*this.vel
  //   ];

  //   const upStep = [
  //     this.pos[0] + yDirections[1][0]*this.vel,
  //     this.pos[1] + yDirections[1][1]*this.vel
  //   ];

  //   const downDiff = this.calcPosDiffs(downStep, pos);
  //   const upDiff = this.calcPosDiffs(upStep, pos);

  //   if (downDiff[1] < upDiff[1] && !this.willCollide(downStep, yDirections[0])) {
  //     this.dir = yDirections[0];
  //     this.pos = [this.pos[0] + this.dir[0] * this.vel, this.pos[1] + this.dir[1] * this.vel];
  //     return true;
  //   } else if (upDiff[1] <= downDiff[1] && !this.willCollide(upStep, yDirections[1])){
  //     this.dir = yDirections[1];
  //     this.pos = [this.pos[0] + this.dir[0] * this.vel, this.pos[1] + this.dir[1] * this.vel];
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    this.animateBody();
    this.renderEyes();
    this.renderPupils();
  }
}

module.exports = Ghost;