class Paddle {
  constructor(side, w, h) {
    this.side = side;
    let buffer = WIDTH * 0.05;
    if (side === "left") {
      this.pos = createVector(buffer, HEIGHT / 2);
    } else {
      this.pos = createVector(WIDTH - buffer, HEIGHT / 2);
    }
    this.vel = createVector(0, 0);
    this.w = w;
    this.h = h;
  }

  move(velocity) {
    this.vel.y = velocity;
  }

  stop() {
    this.vel.y = 0;
  }

  update() {
    this.pos.add(this.vel);

    this.pos.y = constrain(
      this.pos.y,
      this.h / 2 + borderThickness/2,
      height - this.h / 2 - borderThickness/2
    );
  }

  display() {
    //push();
    stroke(255);
    noFill();
    //translate(this.pos.x, this.pos.y);
    rect(this.pos.x, this.pos.y, this.w, this.h, this.w * 0.5);
    //pop();
  }
}
