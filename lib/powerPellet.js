class PowerPellet {
  constructor(c, x, y) {
    // context
    this.c = c; 
    this.x = x;
    this.y = y;
    this.minRadius = 2;
    this.maxRadius = 10;
    this.radians = 0;
    this.radius = this.minRadius + ((this.maxRadius - this.minRadius) * (Math.abs(Math.cos(this.radians))));
    this.animate = this.animate.bind(this);
  }

  render() {
    this.c.fillStyle = "#f0d99d";
    this.c.strokeStyle = "#f0d99d";
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    this.c.fill();
    this.c.stroke();
  }

  update() {
    this.radians += Math.PI / 64;
    this.radius = this.minRadius + ((this.maxRadius - this.minRadius) * (Math.abs(Math.cos(this.radians))));
    this.render();
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.c.clearRect(
      this.x - this.maxRadius - this.minRadius - 1,
      this.y - this.maxRadius - this.minRadius - 1,
      this.maxRadius * 2 + 3 * this.minRadius,
      this.maxRadius * 2 + 3 * this.minRadius
    )
    this.update();
    console.log(this.radius);
  }
}

module.exports = PowerPellet;