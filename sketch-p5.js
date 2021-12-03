let theta;
let r = 100;

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder')
  
  angleMode(RADIANS)
  background(220);
  translate(width / 2, height / 2)
  sketchDisplay()
}

function sketchDisplay() {
  background(220)

  fill(0)
  circle(0, 0, r * 2)
  
  theta = map(secsLeft, 0, totalSecs, 0, TWO_PI)
  // rule of three:
  // totalSecs ---- TWO_PI (full circle)
  // secsLeft  ---- theta

  fill('red')
  strokeWeight(2)
  push()
  rotate(-HALF_PI)
  stroke(255)
  arc(0,0, r * 2, r * 2, 0, theta, PIE)
  pop()
}