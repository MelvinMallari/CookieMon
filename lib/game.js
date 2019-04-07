const CookieMon = require('./cookie_mon');
const Maze = require('./maze');
const Loader = require('./loader');
const Ghost = require('./ghost');

GHOST_START_POS  = [ 
  [11.5, 11.5],
  [13, 11.5],
  [15.5, 11.5],
  [17, 11.5],
];

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.cookieMon = [];
    this.ghosts = [];
    this.maze = [];
    this.moveableObjects = [];
    this.blockSize = Loader.BLOCK_SIZE;
    this.lives = 3;
    this.score = 0;
    this.pelletScore = 10;
    this.powerPelletScore = 5000;
    this.eatGhostScore = 1000;

    this.gameOver = false;
    this.gameLost = false;
    this.gameWon = false;

    // Deep dup map
    this.map = JSON.parse(JSON.stringify(Loader.MAP));
    this.addMaze();
    this.addCookieMon();
    this.addGhost();
  }

  add(object) {
    if (object instanceof CookieMon) {
      this.cookieMon.push(object);
    } else if (object instanceof Maze) {
      this.maze.push(object);
    } else if (object instanceof Ghost) {
      this.ghosts.push(object);
    } else {
      throw new Error("unknown type of object");
    }
  }

  addCookieMon() {
    const cookieMon = new CookieMon({ ctx: this.ctx }); 
    this.add(cookieMon);
    this.moveableObjects = this.moveableObjects.concat(this.cookieMon);
    return cookieMon;
  }

  addGhost() {
    const blinky = new Ghost({ 
      ctx: this.ctx, 
      name: "blinky", 
      color: "#FF0000", 
      cookieMon: this.cookieMon[0],
      startingPos: [ 
        GHOST_START_POS[0][0]*Loader.BLOCK_SIZE,
        GHOST_START_POS[0][1]*Loader.BLOCK_SIZE,
      ],
    });

    const pinky = new Ghost({ 
      ctx: this.ctx, 
      name: "pinky", 
      color: "#FFB8FF", 
      cookieMon: this.cookieMon[0],
      startingPos: [ 
        GHOST_START_POS[1][0]*Loader.BLOCK_SIZE,
        GHOST_START_POS[1][1]*Loader.BLOCK_SIZE,
      ],
    });

    const inky = new Ghost({ 
      ctx: this.ctx, 
      name: "inky", 
      color: "#00FFFF", 
      cookieMon: this.cookieMon[0],
      startingPos: [ 
        GHOST_START_POS[2][0]*Loader.BLOCK_SIZE,
        GHOST_START_POS[2][1]*Loader.BLOCK_SIZE,
      ],
    });

    const clyde = new Ghost({ 
      ctx: this.ctx, 
      name: "clyde", 
      color: "#FFB852", 
      cookieMon: this.cookieMon[0],
      startingPos: [ 
        GHOST_START_POS[3][0]*Loader.BLOCK_SIZE,
        GHOST_START_POS[3][1]*Loader.BLOCK_SIZE,
      ],
    });

    this.add(blinky);
    this.add(pinky);
    this.add(inky);
    this.add(clyde);
    this.moveableObjects = this.moveableObjects.concat(this.ghosts);
    return this.ghosts;
  }

  addMaze() {
    const maze = new Maze(this.ctx, this.map);
    this.add(maze);
    return maze;
  }

  allObjects() {
    return [].concat(this.maze, this.cookieMon, this.ghosts);
  }

  checkSpriteCollision(pos1, pos2) {
    return (Math.abs(pos1[0] - pos2[0]) <= 35 && Math.abs(pos1[1] - pos2[1]) <= 35);
  }

  eatPellet() {
    const cookieMon = this.cookieMon[0];
    const blockSize = Loader.BLOCK_SIZE;

    const x = Math.floor(cookieMon.pos[0] / blockSize);
    const y = Math.floor(cookieMon.pos[1] / blockSize);

    if (this.map[y][x] === 2) {
      this.map[y][x] = 1;
      this.score += this.pelletScore;
    } else if (this.map[y][x] === 3) {
      this.map[y][x] = 1;
      this.score += this.powerPelletScore;
      this.makeGhostsEdible();
    }
  }

  reset() {
    this.lives = 3;
    this.score = 0;
    this.gameOver = false;
    this.gameWon = false;
    this.gameLost = false;
    this.ghosts.forEach(ghost => {ghost.isEdible = false});
    this.map = JSON.parse(JSON.stringify(Loader.MAP));
    this.maze = [];
    this.addMaze();
    this.cookieMon[0].dir = [1, 0];
    this.resetSprites();
  }

  resetSprites() {
    this.moveableObjects.forEach(moveableObject => {
      moveableObject.pos = moveableObject.startingPos;
    });
  }

  makeGhostsEdible() {
    this.ghosts.forEach(ghost => {
      ghost.isEdible = true;
      ghost.edibleCounter = 0;
    });
  }

  moveObjects() {
    this.moveableObjects.forEach(object => {
      this.eatPellet(); 
      object.move();
    });
  }

  render() {
    // compensate for off by one
    this.gameOver = (this.lives === 1);

    this.gameWon = this.maze[0].hasNoPellets();

    // Check if game is won or lost
    if (this.gameLost || this.gameWon) {
      this.renderGameOver();
      return;
    }

    this.ctx.clearRect(
      0,
      0,
      Loader.BLOCK_SIZE * Loader.WIDTH_BLOCKS,
      Loader.BLOCK_SIZE * Loader.HEIGHT_BLOCKS
    );

    const cookieMon = this.cookieMon[0];

    this.allObjects().forEach(object => {
      object.render();

      if (object instanceof Ghost 
          && this.checkSpriteCollision(cookieMon.pos, object.pos)) {
        let ghost = object;
        if (ghost.isEdible) {
          ghost.renderEaten = true;
          this.score += this.eatGhostScore;
        } else if (!this.gameOver){
          this.lives -= 1;
          this.resetSprites();
        } else {
          this.gameLost = true;
        }
      }
    }); 
  }

  renderGameOver() {
    let endingMessage = (this.gameWon ? 
                          "You Won! Congratulations!" : 
                          "Game Over! You Lost");
    const blockSize = Loader.BLOCK_SIZE;
    const widthBlocks = Loader.WIDTH_BLOCKS;
    const heightBlocks = Loader.HEIGHT_BLOCKS;

    this.ctx.clearRect( 0, 0, blockSize * widthBlocks, blockSize * heightBlocks);
    this.gameOver = true;

    this.ctx.font = "25px Pixel Emulator";
    this.ctx.fillStyle = "#eee";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      endingMessage,
      Math.floor(widthBlocks / 2) * blockSize,
      Math.floor(heightBlocks / 2) * blockSize
    );

    this.ctx.fillText(
      "Press 'Y' to play again.",
      Math.floor(widthBlocks / 2)* blockSize,
      (Math.floor(heightBlocks / 2) + 2) * blockSize
    );

    this.ctx.fillText(
      "Your Score: " + this.score,
      Math.floor(widthBlocks / 2)* blockSize,
      (Math.floor(heightBlocks / 2) + 4) * blockSize
    );
  }

  step() {
    this.moveObjects();
  }
}

module.exports = Game;