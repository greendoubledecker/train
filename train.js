class Train {
  constructor(tracks, speed, length, startingIndex, size) {
    //this.cars = [];
    this.tracks = tracks;
    this.speed = speed;
    this.index = startingIndex;
    this.length = length;
    this.targetLength = this.length;
    this.endIndex = this.index + this.length;
    this.size = size;
  }
  changeIndex(newIndex) {
    this.index = newIndex;
  }
  update() {
    if (
      this.index + this.length + this.speed < this.tracks.length &&
      this.index >= 0
    ) {
      this.index += this.speed;
      //console.log(this.index);
      this.stablizeLength();
      this.endIndex = this.index + this.length;
    }
    if (this.index >= this.tracks.length - (this.length + this.speed)) {
      this.speed *= -1;
      //console.log('is the track number');
    }
    if (this.index <= this.speed * -1 && this.speed < 0) {
      return true;
    }
    return false;
  }
  display() {
    colorMode(RGB);
    stroke(0, 255, 0);
    strokeWeight(this.size);
    if (this.index + this.length < this.tracks.length) {
      line(
        this.tracks[this.index].x,
        this.tracks[this.index].y,
        this.tracks[this.index + this.length].x,
        this.tracks[this.index + this.length].y
      );
    }
  }
  stablizeLength() {
    let currentLength = 0;
    this.length = 0;
    do {
      currentLength += dist(
        this.tracks[this.index + this.length].x,
        this.tracks[this.index + this.length].y,
        this.tracks[this.index + this.length + 1].x,
        this.tracks[this.index + this.length + 1].y
      );
      this.length++;
    } while (
      currentLength < this.targetLength &&
      this.index + this.length < this.tracks.length - 1
    );
    //console.log(this.length);
  }
}
