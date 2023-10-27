class Pongball {
    constructor(x, y, leftPaddle, rightPaddle) {
        this.pos = createVector(x, y);
        
        // Set the initial angle within the range -π/4 to π/4


        
        // Set the initial velocity based on the angle
        // this.vel = p5.Vector.fromAngle(angle);
        
        this.lp = leftPaddle;
        this.rp = rightPaddle;
        this.r = 20;
        const angle = random(-PI/4, PI/4);
        this.vel = p5.Vector.fromAngle(angle);
        if (random() > 0.5) {
          this.vel.x *= -1;
      }
        console.log(degrees(angle))
      }

  update() {
    this.bounceOfPaddle();
    this.bounceOfWall();
    this.vel.setMag(5);
    this.pos.add(this.vel);
  }

  display() {
    push();
    stroke(255);
    noFill();
    translate(this.pos.x, this.pos.y);
    ellipse(0, 0, this.r, this.r);
    pop();
  }

  getPos() {
    return this.pos;
  }

  getVel() {
    return this.vel;
  }

  setVel(vel) {
    this.vel = vel;
  }

  bounceOfPaddle() {
    // Check collision with the left paddle
    if (
      this.pos.x - this.r / 2 <= this.lp.pos.x + this.lp.w / 2 &&
      this.pos.x + this.r / 2 >= this.lp.pos.x - this.lp.w / 2 &&
      this.pos.y >= this.lp.pos.y - this.lp.h / 2 &&
      this.pos.y <= this.lp.pos.y + this.lp.h / 2
    ) {
      // Calculate the relative position where the ball hit the left paddle
      const relativeY = this.pos.y - this.lp.pos.y;
      const normalizedRelativeY = map(relativeY, -this.lp.h / 2, this.lp.h / 2, -1, 1);
      
      // Calculate the angle of reflection based on the relative position
      const angle = map(normalizedRelativeY, -1, 1, -PI/4, PI/4); // Adjust the angle values as needed
      console.log(degrees(angle))
      
      // Set the new velocity based on the calculated angle
      const speed = this.vel.mag();
      this.vel.set(cos(angle), sin(angle)).mult(speed);
  
      // Update the ball's position to prevent it from getting stuck inside the left paddle
      this.pos.x = this.lp.pos.x + this.lp.w / 2 + this.r / 2;
    }
  
    // Check collision with the right paddle
    if (
      this.pos.x + this.r / 2 >= this.rp.pos.x - this.rp.w / 2 &&
      this.pos.x - this.r / 2 <= this.rp.pos.x + this.rp.w / 2 &&
      this.pos.y >= this.rp.pos.y - this.rp.h / 2 &&
      this.pos.y <= this.rp.pos.y + this.rp.h / 2
    ) {
      // Calculate the relative position where the ball hit the right paddle
      const relativeY = this.pos.y - this.rp.pos.y;
      const normalizedRelativeY = map(relativeY, -this.rp.h / 2, this.rp.h / 2, -1, 1);
      
      // Calculate the angle of reflection based on the relative position
      const angle = map(normalizedRelativeY, -1, 1, -PI/4, PI/4); // Adjust the angle values as needed
      console.log(degrees(angle))
      // Set the new velocity based on the calculated angle
      const speed = this.vel.mag();
      this.vel.set(cos(PI - angle), sin(PI - angle)).mult(speed);
  
      // Update the ball's position to prevent it from getting stuck inside the right paddle
      this.pos.x = this.rp.pos.x - this.rp.w / 2 - this.r / 2;
    }
  }
  
  bounceOfWall() {
    if (this.pos.y < this.r / 2+borderThickness/2 || this.pos.y > height - this.r / 2-borderThickness/2) {
      this.vel.y *= -1;
    }
    
    if (this.pos.x < this.r / 2 || this.pos.x > width - this.r / 2) {
        if(this.pos.x < this.r / 2) {
            rightScore += 1;
        } else {
            leftScore += 1;
        }
        this.pos = createVector(width / 2, height / 2);
        const angle = random(-PI/4, PI/4);
        this.vel = p5.Vector.fromAngle(angle);
        if (random() > 0.5) {
            this.vel.x *= -1;
        }
        console.log(degrees(angle))
        //this.vel = p5.Vector.fromAngle(angle);
    }

  }
}