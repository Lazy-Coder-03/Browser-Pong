function initializePongBall() {
    //pongball = new Pongball(WIDTH / 2, HEIGHT / 2, leftPaddle, rightPaddle);
    // Randomly set the initial direction of the pong ball
    //pongball.setInitialDirection(initialDirection);
    pongball = new Pongball(WIDTH / 2, HEIGHT / 2, leftPaddle, rightPaddle);
  }
  function drawScore() {
      fill(255);
      textSize(32);
      textAlign(CENTER, CENTER);
      text(leftScore, 100, 40);
      text(rightScore, width - 100, 40);
  }
  
  function keyPressed() {
    if (key == "w") {
      leftPaddle.move(-paddleSpeed);
    } else if (key == "s") {
      leftPaddle.move(paddleSpeed);
    } else if (keyCode == UP_ARROW) {
      rightPaddle.move(-paddleSpeed);
    } else if (keyCode == DOWN_ARROW) {
      rightPaddle.move(paddleSpeed);
    }
  }
  
  function keyReleased() {
    if ((key == "w" && keyIsDown(83)) || (key == "s" && keyIsDown(87))) {
      // If both 'w' and 's' are pressed simultaneously, keep moving in the last direction.
      return;
    }
    leftPaddle.stop();
    rightPaddle.stop();
  }
  
  
  
  
  function drawDashedLine(x1, y1, x2, y2, dashLength, gapLength) {
    let lineLength = dist(x1, y1, x2, y2);
    const deltaX = (x2 - x1) / lineLength;
    const deltaY = (y2 - y1) / lineLength;
    const dashTotalLength = dashLength + gapLength;
    
    let currentX = x1;
    let currentY = y1;
    let drawDash = true;
    
    while (lineLength >= dashTotalLength) {
      const endX = currentX + deltaX * dashLength;
      const endY = currentY + deltaY * dashLength;
  
      if (drawDash) {
        line(currentX, currentY, endX, endY);
      }
  
      currentX = endX + deltaX * gapLength;
      currentY = endY + deltaY * gapLength;
  
      lineLength -= dashTotalLength;
      drawDash = !drawDash;
    }
  
    if (drawDash && lineLength > 0) {
      line(currentX, currentY, currentX + deltaX * lineLength, currentY + deltaY * lineLength);
    }
  }
  
  