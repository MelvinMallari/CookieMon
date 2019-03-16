class PowerPellet {
  constructor(ctx, x, y) {
    // context
    this.ctx = ctx; 
    this.x = x;
    this.y = y;
    this.minRadius = 2;
    this.maxRadius = 10;
    this.radians = 0;
    this.radius = this.minRadius 
      + ((this.maxRadius - this.minRadius) 
      * (Math.abs(Math.cos(this.radians))));
    this.animate = this.animate.bind(this);
  }

  render() {
    this.update()
    this.ctx.fillStyle = "#f0d99d";
    this.ctx.strokeStyle = "#f0d99d";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
  }

  update() {
    this.radians += Math.PI / 64;
    this.radius = this.minRadius 
      + ((this.maxRadius - this.minRadius) 
      * (Math.abs(Math.cos(this.radians))));
    this.render();
  }

  animate() {
    requestAnimationFrame(this.animate);
    // TODO: Figure out math.
    // Guess and checked here. Math doesn't work cleanly atm.
    this.ctx.clearRect(
      this.x - this.maxRadius - this.minRadius - 1,
      this.y - this.maxRadius - this.minRadius - 1,
      this.maxRadius * 2 + 3 * this.minRadius,
      this.maxRadius * 2 + 3 * this.minRadius
    );
    this.update();
  }
}

module.exports = PowerPellet;