const WIDTH = 800;
const HEIGHT = 600;
let leftPaddle;
let rightPaddle;
let pongball;
const paddleSpeed = 5;
let leftScore = 0;
let rightScore = 0;
let borderThickness = 20;
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  colorMode(HSB, 360, 100, 100, 100);
  rectMode(CENTER);
  canvas.parent("canvas-container");
  leftPaddle = new Paddle("left", 20, 100);
  rightPaddle = new Paddle("right", 20, 100);
  initializePongBall();
}

function draw() {
  background(0);
  pongball.display();
  pongball.update();
  leftPaddle.update();
  rightPaddle.update();
  leftPaddle.display();
  rightPaddle.display();
  drawScore();
  drawDashedLine(width / 2, 0, width / 2, height, 10, 5);
  drawBorder();
}

function drawBorder(){
  push();
  noFill();
  stroke(255)
  strokeWeight(borderThickness)
  rectMode(CORNER)
  rect(0,0, WIDTH, HEIGHT);
  pop();
}