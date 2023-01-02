class Track{
  constructor(trackLength){
    this.points = [];
    this.trackLength = trackLength;
    for (let i = 0; i < this.trackLength; i++){
      this.points.push(createVector(noise(i * 0.01) * 100, noise((i + 1000) * 0.01) * 100));
    }
    //console.log(this.points);
  }
  display(){
    for (let i = 0; i < this.points.length; i++) {
      fill(100);
      noStroke();
      rect(this.points[i].x, this.points[i].y, 1, 1);
    }
  }
}  