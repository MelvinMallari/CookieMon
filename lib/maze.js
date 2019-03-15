const Loader = require('./loader');

class Maze {
  constructor(c, blockSize) {
    this.blockSize = blockSize;
    this.c = c;
    this.c.strokeStyle = "#5cd2ff";
    this.c.fillStyle = "#5cd2ff";
    this.c.lineWidth = 5;
    this.c.lineCap = 5;
    this.pelletRadius = 3;
    this.borderOffset = 0.5
  }
  
  renderContent() {
    for (let i = 0; i < Loader.MAP.length; i++) {
      for (let j = 0; j < Loader.MAP.length; j++) {
        let tile = Loader.MAP[j][i];
        let legend = Loader.LEGEND;
        if (tile === legend.pellet) {
          this.renderPellet(
            (i + this.borderOffset) * this.blockSize,
            (j + this.borderOffset) * this.blockSize,
            this.pelletRadius
          );
        }
      }
    } 
  }

  renderInnerWalls() {
    for (let i = 0; i < Loader.INNER_WALLS.length; i++) {
      let draw = Loader.INNER_WALLS[i];
      this.roundRect(
        draw.x * this.blockSize,
        draw.y * this.blockSize,
        draw.width * this.blockSize,
        draw.height * this.blockSize,
        draw.radius,
        draw.fill
      );
    }
  }

  renderOutterWalls() {
    for (let i = 0; i < Loader.OUTTER_WALLS.length; i++) {
      let line = Loader.OUTTER_WALLS[i];
      this.c.beginPath();
      for (let j = 0; j < line.length; j++) {
        let draw = line[j];
        if (draw.move) {
          this.c.moveTo(
            draw.move[0] * this.blockSize, 
            draw.move[1] * this.blockSize
          );
        } else if (draw.line) {
          this.c.lineTo(
            draw.line[0] * this.blockSize, 
            draw.line[1] * this.blockSize
          );
        } else if (draw.corner) {
          this.c.arc(
            draw.corner[0] * this.blockSize,
            draw.corner[1] * this.blockSize,
            draw.corner[2] * this.blockSize,
            draw.corner[3],
            draw.corner[4],
            draw.corner[5]
          );
        }
      }
      this.c.stroke();
    }
  }

  renderPellet(x, y, radius) {
    this.c.fillStyle = "#f0d99d";
    this.c.strokeStyle = "#f0d99d";
    this.c.beginPath();
    this.c.moveTo(x, y);
    this.c.arc(x, y, radius, 0, 2*Math.PI);
    this.c.fill();
    this.c.stroke();
  }

  roundRect(x, y, width, height, radius, fill, stroke) {
    // Credits: Juan Mendes from Stack Overflow
    if (typeof stroke == 'undefined') {
      stroke = true;
    }
    if (typeof radius === 'undefined') {
      radius = 5;
    }
    if (typeof radius === 'number') {
      radius = {tl: radius, tr: radius, br: radius, bl: radius};
    } else {
      var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
      for (var side in defaultRadius) {
        radius[side] = radius[side] || defaultRadius[side];
      }
    }
    this.c.beginPath();
    this.c.moveTo(x + radius.tl, y);
    this.c.lineTo(x + width - radius.tr, y);
    this.c.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    this.c.lineTo(x + width, y + height - radius.br);
    this.c.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    this.c.lineTo(x + radius.bl, y + height);
    this.c.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    this.c.lineTo(x, y + radius.tl);
    this.c.quadraticCurveTo(x, y, x + radius.tl, y);
    this.c.closePath();
    if (fill) {
      this.c.fill();
    }
    if (stroke) {
      this.c.stroke();
    }
  }

  render() {
    this.renderOutterWalls();
    this.renderInnerWalls();
    this.renderContent();
  }
}

module.exports = Maze;