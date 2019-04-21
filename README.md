# CookieMon

[Live Link](https://melvinmallari.github.io/CookieMon/)

### Overview
A remake of the classic game Pac-Man headlining none other than the Cookie-Monster himself. Users complete the game by consuming all pellets. Power pellets tranform the ghosts into cookies, rendering them edible. Similar to original game, each ghost features its own path-finding strategy, creating an interesting dynamic. Find out if you can get all the pellets before the ghosts get you!

  <p align="center">
    <img src="./assets/CookieMon-Gameplay.gif" align="center">
  </p>

### Technologies
 * HTML Canvas, CSS - To build the visual interface
 * Javascript (ES 6) - To build the game logic

### Features
 * Collision Detection algorithm - Obstacle & Sprite collisions
 * 4 Pathfinding Algorithm - One for each ghost
 * Score System - Players earn poins based on their play 
 * Lives - Each player gets three lives to complete the game

#### Collision Detection
Collision detection anticipates the next possible step, using the graph used to build the maze, determines whether anticipated step is a wall (represented as a '0' in the graph).

```js
  willCollide(pos, dir) {
    let blockSize = Loader.BLOCK_SIZE;
    let map = Loader.MAP;
    let x = Math.floor(((pos[0] + dir[0] * 0.5 * blockSize)) / blockSize);
    let y = Math.floor(((pos[1] + dir[1] * 0.5 * blockSize)) / blockSize);
    return (map[y][x] === 0) ? true : false;
  }
```

#### Pathfinding Algorithm
  The path-finding algorithm considers each possible direction, and selects the one that brings the ghost closest to the target. 

  ```js
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
        this.dir = currDirection;
        return;
      }
    }
  ```

  #### Future Improvements 
  * Incorporate djikstra / BFS path finding
  * Refine wall detection algo
  * Incorporate Audio

