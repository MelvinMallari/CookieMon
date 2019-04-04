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
    this.pellets = [];
    this.moveableObjects = [];
    this.blockSize = Loader.BLOCK_SIZE;
    this.score = 0;
    this.dscore = 10;
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
    const maze = new Maze(this.ctx, this.map, this.blockSize);
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
      this.score += this.dscore;
    } else if (this.map[y][x] === 3) {
      this.map[y][x] = 1;
    }
  }

  moveObjects() {
    this.moveableObjects.forEach(object => {
      this.eatPellet(); 
      object.move();
    });
  }


  render() {
    this.ctx.clearRect(
      0,
      0,
      Loader.BLOCK_SIZE * Loader.WIDTH_BLOCKS,
      Loader.BLOCK_SIZE * Loader.HEIGHT_BLOCKS
    );
    const cookieMon = this.cookieMon[0];

    this.allObjects().forEach(object => {
      object.render();
      if (object instanceof Ghost) {
        if (this.checkSpriteCollision(cookieMon.pos, object.pos)) {
          window.location.reload(false);
        }
      }
    }); 
  }

  step() {
    this.moveObjects();
  }
}

module.exports = Game;