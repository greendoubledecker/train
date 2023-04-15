class Track {
  constructor(trackLength, trackWidth) {
    this.trackWidth = trackWidth;
    this.points = [];
    this.trackLength = trackLength;
    for (let i = 0; i < this.trackLength; i++) {
      this.points.push(
        createVector(noise(i * 0.005) * 150, noise((i + 1000) * 0.005) * 125)
      );
    }
    //console.log(this.points);
  }
  display() {
   stroke(100);
    for (let i = 1; i < this.points.length; i++) { 
      strokeWeight(this.trackWidth);
      line(this.points[i-1].x, this.points[i-1].y, this.points[i].x, this.points[i].y);
    }
  }
}
