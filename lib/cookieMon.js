class CookieMon {
  constructor(c, x, y) {
    this.c = c;
    this.x = x;
    this.y = y;
    this.headRadius = 20;
    this.eyeRadius = 4;
    this.pupilRadius = 1;
    this.c.fillStyle = "#00adef";
    this.c.strokeStyle = "#00adef";
    this.eyeOffsets = [
      [7, 22],
      [-3, 22]
    ];
    this.pupilOffsets = [
      [7, 23.5],
      [-3, 20.5],
    ];
  }

  renderHead() {
    this.c.beginPath();
    this.c.arc(
      this.x, 
      this.y, 
      this.headRadius, 
      Math.PI / 4,
      2 * Math.PI - Math.PI / 4,
    );
    this.c.lineTo(this.x, this.y);
    this.c.fill();
    this.c.stroke();
  }

  renderEye(x, y) {
    this.c.fillStyle = "#fff";
    this.c.strokeStyle = "#fff";
    this.c.beginPath();
    this.c.arc(x, y, this.eyeRadius, 0, 2 * Math.PI);
    this.c.fill();
    this.c.stroke();
  }

  renderEyes() {
    this.renderEye(
      this.x + this.eyeOffsets[0][0], 
      this.y - this.eyeOffsets[0][1]
    );
    this.renderEye(
      this.x + this.eyeOffsets[1][0], 
      this.y - this.eyeOffsets[1][1]
    );
  }

  renderPupil(x, y) {
    this.c.fillStyle = "#000";
    this.c.strokeStyle = "#000";
    this.c.beginPath();
    this.c.arc(x, y, this.pupilRadius, 0, 2 * Math.PI);
    this.c.fill();
    this.c.stroke();
  }

  renderPupils() {
    this.renderPupil(
      this.x + this.pupilOffsets[0][0],
      this.y - this.pupilOffsets[0][1]
    );
    this.renderPupil(
      this.x + this.pupilOffsets[1][0],
      this.y - this.pupilOffsets[1][1]
    );
  }

  render() {
    this.renderHead();
    this.renderEyes();
    this.renderPupils();
  }
}

module.exports = CookieMon;