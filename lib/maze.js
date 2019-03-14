const Loader = require('./loader');

class Maze {
  constructor(c, blockSize) {
    this.blockSize = blockSize;
    this.c = c;
  }

  render() {
    
    this.c.strokeStyle = "#5cd2ff";
    this.c.lineWidth = 5;
    this.c.lineCap = 5;
    this.c.fillStyle = "#5cd2ff";
    // c.lineCap = "round";

    // this.roundRect(c, 300, 5, 200, 25, {
    //   tl: 12,
    //   tr: 12,
    //   br: 12,
    //   bl: 12
    // }, true);

    for (let i = 0; i < Loader.WALLS.length; i += 1) {
      
      let line = Loader.WALLS[i];
      this.c.beginPath();
      for (let j = 0; j < line.length; j += 1) {
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

  roundRect(ctx, x, y, width, height, radius, fill, stroke) {
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
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
      ctx.fill();
    }
    if (stroke) {
      ctx.stroke();
    }
  
  }
}

module.exports = Maze;