class Train{
  constructor(tracks, speed, length, startingIndex){
    //this.cars = [];
    this.tracks = tracks;
    this.speed = speed;
    this.index = startingIndex;
    this.length = length;
  }
  update(){
    if (this.index < this.tracks.length - (this.length + 1) && this.index >= 0){
      this.index += this.speed;
    }
    if (this.index == this.tracks.length - (this.length + 2) || this.index == 0){
      this.speed *= -1;
    }
  }
  display(){
    stroke(0, 255, 0);
    strokeWeight(1);
    line(this.tracks[this.index].x, this.tracks[this.index].y, this.tracks[this.index + this.length].x, this.tracks[this.index + this.length].y);
  }
}