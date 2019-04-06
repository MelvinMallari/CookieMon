const Loader = require('./loader');
// const PowerPellet = require('./power_pellet');

class Maze {
  constructor(ctx, map) {
    this.map = map;
    this.blockSize = Loader.BLOCK_SIZE;
    this.ctx = ctx;
    this.ctx.lineWidth = 5;
    this.ctx.lineCap = "butt";
    this.pelletRadius = 1.25;
    this.borderOffset = 0.5;
    this.minPowerPelletRadius = 2;
    this.maxPowerPelletRadius = 7;
    this.radians = 0;
    this.dr = Math.PI / 256;
    this.powerPelletRadius = this.minPowerPelletRadius 
      + ((this.maxPowerPelletRadius - this.minPowerPelletRadius) 
      * (Math.abs(Math.cos(this.radians))));
  }

  hasNoPellets() {
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[0].length; j++) {
        if (this.map[i][j] === 2 || this.map[i][j] === 3) return false;
      }
    }
    return true;
  }
  
  renderContent() {
    this.ctx.strokeStyle = "#51999b";
    this.ctx.fillStyle = "#51999b";
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map.length; j++) {
        let tile = this.map[j][i];
        let legend = Loader.LEGEND;
        if (tile === legend.pellet) {
          this.renderPellet(
            (i + this.borderOffset) * this.blockSize,
            (j + this.borderOffset) * this.blockSize,
            this.pelletRadius
          );
        } else if (tile === legend.powerPellet) {
          this.updatePowerPellet();
          this.renderPowerPellet(
            (i + this.borderOffset) * this.blockSize,
            (j + this.borderOffset) * this.blockSize,
            this.powerPelletRadius
          );
        }
      }
    } 
  }

  renderInnerWalls() {
    this.ctx.strokeStyle = "#51999b";
    this.ctx.fillStyle = "#51999b";
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
    this.ctx.strokeStyle = "#51999b";
    this.ctx.fillStyle = "#51999b";
    for (let i = 0; i < Loader.OUTTER_WALLS.length; i++) {
      let line = Loader.OUTTER_WALLS[i];
      this.ctx.beginPath();
      for (let j = 0; j < line.length; j++) {
        let draw = line[j];
        if (draw.move) {
          this.ctx.moveTo(
            draw.move[0] * this.blockSize, 
            draw.move[1] * this.blockSize
          );
        } else if (draw.line) {
          this.ctx.lineTo(
            draw.line[0] * this.blockSize, 
            draw.line[1] * this.blockSize
          );
        } else if (draw.corner) {
          this.ctx.arc(
            draw.corner[0] * this.blockSize,
            draw.corner[1] * this.blockSize,
            draw.corner[2] * this.blockSize,
            draw.corner[3],
            draw.corner[4],
            draw.corner[5]
          );
        }
      }
      this.ctx.stroke();
    }
  }

  renderPellet(x, y, radius) {
    this.ctx.fillStyle = "#f0d99d";
    this.ctx.strokeStyle = "#f0d99d";
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.arc(x, y, radius, 0, 2*Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
  }

  renderPowerPellet(x, y, radius) {
    this.ctx.fillStyle = "#f0d99d";
    this.ctx.strokeStyle = "#f0d99d";
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, 2*Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
  }

  updatePowerPellet() {
    this.radians += this.dr;
    this.powerPelletRadius = this.minPowerPelletRadius 
      + ((this.maxPowerPelletRadius - this.minPowerPelletRadius) 
      * (Math.abs(Math.cos(this.radians))));
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
    this.ctx.beginPath();
    this.ctx.moveTo(x + radius.tl, y);
    this.ctx.lineTo(x + width - radius.tr, y);
    this.ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    this.ctx.lineTo(x + width, y + height - radius.br);
    this.ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    this.ctx.lineTo(x + radius.bl, y + height);
    this.ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    this.ctx.lineTo(x, y + radius.tl);
    this.ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    this.ctx.closePath();
    if (fill) {
      this.ctx.fill();
    }
    if (stroke) {
      this.ctx.stroke();
    }
  }

  render() {
    this.renderOutterWalls();
    this.renderInnerWalls();
    this.renderContent();
  }
}

module.exports = Maze;