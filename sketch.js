// let w;
// let h;
let trackWidth = 10;
let track;
let trains = [];
let trackLength = 1000;
let trainLength = 10;
let trainSpeed = 1;
let numberOfCars = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // w = floor(width / trackWidth);
  // h = floor(height / trackWidth);
  track = new Track(trackLength);
  //train = new Train(track.points, trainSpeed, trainLength, 0);
  for (let i = 0; i < trainLength * numberOfCars; i += trainLength){
    trains.push(new Train(track.points, trainSpeed, trainLength, i))
  }
}

function draw() {
  scale(trackWidth);
  background(220);
  track.display();
  for (let i = 0; i < trains.length; i++){
    trains[i].update();
    trains[i].display();
  }
}