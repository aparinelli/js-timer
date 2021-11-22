let hoursAngle = 0,
  minsAngle = 0,
  secsAngle = 0;
let radius = 100;

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS)

  background(220);
  translate(width / 2, height / 2)
  sketchDisplay()

}

function sketchDisplay() {
  stroke(255)
  fill(0)
  circle(0, 0, radius * 2)

  secsAngle = secs * PI / 30
  minsAngle = mins * PI / 30
  hoursAngle = (hours % 12) * PI / 6

  push()
  strokeWeight(4)
  rotate(hoursAngle);
  line(0, 0, 0, -radius * 0.5)
  pop()

  push()
  strokeWeight(2)
  rotate(minsAngle);
  line(0, 0, 0, -radius * 0.75)
  pop()

  push()
  rotate(secsAngle);
  line(0, 0, 0, -radius)
  pop()
}