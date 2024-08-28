const MovingObject = require('./moving_object');
const Loader = require('./loader');

const DEFAULTS = {
  dir: [-1, 0],
  vel: 2,
  directions: [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ],
};

class Ghost extends MovingObject {
  constructor(options) {
    options.dir = DEFAULTS.dir;
    options.vel = DEFAULTS.vel;
    options.pos = options.startingPos;
    super(options);
    this.startingPos = options.startingPos;
    this.cookieMon = options.cookieMon;
    this.name = options.name;
    this.color = options.color;
    this.ctx = options.ctx;

    this.headRadius = 15;
    this.eyeRadius = 4;
    this.pupilRadius = 1;
    this.eyeColor = '#fff';
    this.pupilColor = '#111';
    this.cookieColor = '#ffdead';
    this.chocolateChipColor = '#52280b';
    this.cookieRadius = 15;
    this.chocolateChipRadius = 1.25;
    this.animate = true;
    this.numSteps = 0;
    this.pupilOffsetLeft = [
      [-4, -5],
      [-7, -2],
      [-10, -5],
      [-7, -8],
    ];
    this.pupilOffsetRight = [
      [10, -5],
      [7, -2],
      [4, -5],
      [7, -8],
    ];
    this.eyeOffsets = [
      [-7, -5],
      [7, -5],
    ];

    this.isEdible = false;
    this.edibleCounter = 0;
    this.edibleCounterLimit = 350;

    this.prevPosition = [];
    this.prevPositionCounter = 0;
    this.moveRandom = false;
    this.stalledPosLimit = 20;

    this.randDirection = [];
    this.randDirCounter = 0;

    this.renderEaten = false;
    this.renderEatenCounter = 0;
    this.renderEatenCounterLimit = 350;

    this.toggleRenderCount = 0;
    this.toggleRenderCountLimit = 15;
    this.toggleRender = false;

    this.toggleChocChips = false;
    this.toggleChocChipsCount = 0;
    this.toggleChocChipsCountLimit = 20;
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
    return Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2);
  }

  calcPosDiffs(pos1, pos2) {
    return [Math.abs(pos1[0] - pos2[0]), Math.abs(pos1[1] - pos2[1])];
  }

  calcStep(dir) {
    return [this.pos[0] + this.vel * dir[0], this.pos[1] + this.vel * dir[1]];
  }

  renderAtBase() {
    if (this.renderEatenCounter === this.renderEatenCounterLimit) {
      this.renderEaten = !this.renderEaten;
      this.renderEatenCounter = 0;
      this.pos = this.startingPos;
      this.isEdible = false;
    } else {
      // Have ghosts watch where cookieMon is pointing
      let state;
      const blockSize = Loader.BLOCK_SIZE;
      if (this.arrayCompare(this.cookieMon.dir, [1, 0])) {
        state = 0;
      } else if (this.arrayCompare(this.cookieMon.dir, [0, 1])) {
        state = 1;
      } else if (this.arrayCompare(this.cookieMon.dir, [-1, 0])) {
        state = 2;
      } else {
        state = 3;
      }

      if (this.name === 'blinky') {
        this.pos = [11.5 * blockSize, 14.5 * blockSize];
      } else if (this.name === 'pinky') {
        this.pos = [13.167 * blockSize, 14.5 * blockSize];
      } else if (this.name === 'inky') {
        this.pos = [14.837 * blockSize, 14.5 * blockSize];
      } else {
        this.pos = [16.5 * blockSize, 14.5 * blockSize];
      }

      this.renderEyes();
      this.renderPupils(state);
      this.renderEatenCounter++;
    }
  }

  renderBody() {
    this.ctx.fillStyle = this.color;
    this.ctx.strokeStyle = this.color;
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;

    let [outterOffset, offset1, offset2] = this.animate
      ? [13, 11, 15]
      : [10, 15, 11];

    this.ctx.arc(this.pos[0], this.pos[1], this.headRadius, 0, Math.PI, true);
    this.ctx.lineTo(this.pos[0] - this.headRadius, this.pos[1]);
    this.ctx.lineTo(this.pos[0] - this.headRadius, this.pos[1] + outterOffset);
    this.ctx.lineTo(this.pos[0] - this.headRadius + 5, this.pos[1] + offset1);
    this.ctx.lineTo(this.pos[0] - this.headRadius + 10, this.pos[1] + offset2);
    this.ctx.lineTo(this.pos[0] - this.headRadius + 15, this.pos[1] + offset1);
    this.ctx.lineTo(this.pos[0] - this.headRadius + 20, this.pos[1] + offset2);
    this.ctx.lineTo(this.pos[0] - this.headRadius + 25, this.pos[1] + offset1);
    this.ctx.lineTo(
      this.pos[0] - this.headRadius + 30,
      this.pos[1] + outterOffset
    );
    this.ctx.lineTo(this.pos[0] + this.headRadius, this.pos[1]);
    this.ctx.fill();
    this.ctx.stroke();
  }

  renderCookie() {
    this.ctx.fillStyle = this.cookieColor;
    this.ctx.strokeStyle = this.cookieColor;
    this.ctx.beginPath();
    this.ctx.arc(this.pos[0], this.pos[1], this.cookieRadius, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
  }

  renderChocolateChips() {
    let chocChipPos;
    if (this.toggleChocChips) {
      chocChipPos = [
        [6, -8],
        [-4, -4],
        [-7, 8],
        [7, 7],
      ];
    } else {
      chocChipPos = [
        [-6, 8],
        [4, 4],
        [7, -8],
        [-7, -7],
      ];
    }

    this.ctx.fillStyle = this.chocolateChipColor;
    this.ctx.strokeStyle = this.chocolateChipColor;
    this.ctx.beginPath();

    for (let i = 0; i < chocChipPos.length; i++) {
      this.ctx.moveTo(
        this.pos[0] + chocChipPos[i][0],
        this.pos[1] + chocChipPos[i][1]
      );
      this.ctx.arc(
        this.pos[0] + chocChipPos[i][0],
        this.pos[1] + chocChipPos[i][1],
        this.chocolateChipRadius,
        0,
        2 * Math.PI
      );
    }

    this.ctx.fill();
    this.ctx.stroke();

    this.toggleChocChipsCount++;
    if (this.toggleChocChipsCount === this.toggleChocChipsCountLimit) {
      this.toggleChocChips = !this.toggleChocChips;
      this.toggleChocChipsCount = 0;
    }
  }

  renderChocolateChipCookie() {
    this.renderCookie();
    this.renderChocolateChips();
  }

  renderEyes() {
    this.ctx.fillStyle = this.eyeColor;
    this.ctx.strokeStyle = this.eyeColor;
    for (let i = 0; i < this.eyeOffsets.length; i++) {
      this.ctx.beginPath();
      this.ctx.arc(
        this.pos[0] + this.eyeOffsets[i][0],
        this.pos[1] + this.eyeOffsets[i][1],
        this.eyeRadius,
        0,
        2 * Math.PI
      );
      this.ctx.fill();
      this.ctx.stroke();
    }
  }

  renderGhost(state) {
    this.animateBody();
    this.renderEyes();
    this.renderPupils(state);
  }

  renderPupils(state) {
    this.ctx.fillStyle = this.pupilColor;
    this.ctx.strokeStyle = this.pupilColor;

    let offset;
    for (let i = 0; i < 2; i++) {
      offset = i === 0 ? this.pupilOffsetLeft : this.pupilOffsetRight;
      this.ctx.beginPath();
      this.ctx.arc(
        this.pos[0] + offset[state][0],
        this.pos[1] + offset[state][1],
        this.pupilRadius,
        0,
        2 * Math.PI
      );
      this.ctx.fill();
      this.ctx.stroke();
    }
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
    const maxFrameCount = 50;
    if (this.randDirCounter === 0) {
      this.randDirection = DEFAULTS.directions[Math.floor(4 * Math.random())];
    }
    this.randDirCounter++;
    if (this.randDirCounter === maxFrameCount) {
      this.randDirCounter = 0;
      this.moveRandom = false;
    }
  }

  move() {
    // TODO: Algo to detect if Pacman is close and Avoid
    if (this.moveRandom) {
      this.determineRandPath();
      let randomStep = this.calcStep(this.randDirection);
      if (!this.willCollide(randomStep, this.randDirection))
        this.pos = randomStep;
    } else {
      let targetPos;
      const blockSize = Loader.BLOCK_SIZE;
      const cookieMon = this.cookieMon;

      if (this.name === 'blinky') {
        targetPos = this.isEdible
          ? [6.5 * blockSize, 1.5 * blockSize]
          : cookieMon.pos;
      }

      if (this.name === 'pinky') {
        targetPos = this.isEdible
          ? [21.5 * blockSize, 1.5 * blockSize]
          : [
              cookieMon.pos[0] + 4 * cookieMon.dir[0] * cookieMon.vel,
              cookieMon.pos[1] + 4 * cookieMon.dir[1] * cookieMon.vel,
            ];
      }

      if (this.name === 'inky') {
        targetPos = this.isEdible
          ? [6.5 * blockSize, 23.5 * blockSize]
          : [
              cookieMon.pos[0] - 4 * cookieMon.dir[0] * cookieMon.vel,
              cookieMon.pos[1] - 4 * cookieMon.dir[1] * cookieMon.vel,
            ];
      }

      if (this.name === 'clyde') {
        if (this.isEdible) {
          targetPos = [21.5 * blockSize, 23.5 * blockSize];
        } else {
          const distFromCookieMon = Math.sqrt(
            Math.pow(this.pos[0] - cookieMon.pos[0], 2) +
              Math.pow(this.pos[1] - cookieMon.pos[1], 2)
          );

          targetPos =
            distFromCookieMon > 100
              ? cookieMon.pos
              : [2 * Loader.BLOCK_SIZE, 4 * Loader.BLOCK_SIZE];
        }
      }
      this.target(targetPos);
      this.updatePrevPosition();
    }
  }

  moveRandomly() {
    // Move Randomly to prevent corner stalling
    const randomDirection = DEFAULTS.directions[Math.floor(4 * Math.random())];
    const randomStep = this.calcStep(randomDirection);

    if (this.willCollide(randomStep, randomDirection)) {
      this.moveRandomly();
    } else {
      this.pos = randomStep;
    }
  }

  target(pos) {
    const directions = DEFAULTS.directions;

    if (
      this.calcDist(this.pos, this.prevPosition) < 100 &&
      this.prevPositionCounter > 5
    ) {
      this.moveRandom = true;
      return;
    }

    const potentialSteps = [
      [this.calcDist(pos, this.calcStep(directions[0])), 0],
      [this.calcDist(pos, this.calcStep(directions[1])), 1],
      [this.calcDist(pos, this.calcStep(directions[2])), 2],
      [this.calcDist(pos, this.calcStep(directions[3])), 3],
    ].sort((a, b) => (a[0] > b[0] ? 1 : -1));

    for (let i = 0; i < potentialSteps.length; i++) {
      let currDirection = directions[potentialSteps[i][1]];
      let currNextStep = this.calcStep(currDirection);

      if (!this.willCollide(currNextStep, currDirection)) {
        this.pos = currNextStep;
        this.dir = currDirection;
        return;
      }
    }
  }

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

    if (this.renderEaten) {
      this.renderAtBase();
    } else if (this.isEdible) {
      this.renderChocolateChipCookie();
      this.edibleCounter++;

      if (this.edibleCounter === this.edibleCounterLimit) {
        this.isEdible = !this.isEdible;
        this.edibleCounter = 0;
      } else if (Math.abs(this.edibleCounter - this.edibleCounterLimit) < 150) {
        this.toggleRender
          ? this.renderGhost(state)
          : this.renderChocolateChipCookie();
        this.toggleRenderCount++;
        if (this.toggleRenderCount === this.toggleRenderCountLimit) {
          this.toggleRender = !this.toggleRender;
          this.toggleRenderCount = 0;
        }
      }
    } else {
      this.renderGhost(state);
    }
  }
}

module.exports = Ghost;
