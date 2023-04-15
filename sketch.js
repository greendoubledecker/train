let trackWidth = 0.5;
let track;
let trains = [];
let trackLengthSlider;
let trainLength = 10;
let trainSpeed = 1;
let numberOfCars = 2;
function setup() {
  trackLengthSlider = createSlider(100, 2000, 1000, 0);
  trackLengthSlider.position(0,0);
  createCanvas(1700, 1050);
  track = new Track(trackLengthSlider.value(), trackWidth);
  for (let i = 0; i < trainLength * numberOfCars; i += trainLength){
    trains.push(new Train(track.points, trainSpeed, trainLength, i, trackWidth))
    
  }
}

function mousePressed(){
  let fs = fullscreen();
  fullscreen(!fs);
}

function draw() {
  scale(10);
  background(220);
  track.display();
  for (let i = 0; i < trains.length; i++){
    if(trains[i].update()){
      // console.log(1);
      noiseSeed(round(random(10000)));
      track = new Track(trackLengthSlider.value(), trackWidth);
      trains = [];
      for (let i = 0; i < trainLength * numberOfCars; i += trainLength){
    trains.push(new Train(track.points, trainSpeed, trainLength, i, trackWidth))
      }
    }
    if (i > 0){
      trains[i].changeIndex(trains[i-1].endIndex);
    }
    trains[i].display();
  }
}