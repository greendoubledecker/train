// let w;
// let h;
let trackWidth = 10;
let track;
let train;
let trackLength = 200;
let trainLength = 10;
let trainSpeed = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // w = floor(width / trackWidth);
  // h = floor(height / trackWidth);
  track = new Track(trackLength);
  train = new Train(track.points, trainSpeed, trainLength);
}

function draw() {
  scale(trackWidth);
  background(220);
  track.display();
  train.update();
  train.display();
}