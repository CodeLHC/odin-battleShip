class Ship {
  constructor(length) {
    this.length = length;
    this.hitTimes = 0;
    this.sunkStatus = false;
    //this.position to update if statements for ship placement in gameboard?
  }

  hit() {
    this.hitTimes = this.hitTimes + 1;
    if (this.hitTimes === this.length) {
      this.isSunk();
    }
  }

  isSunk() {
    this.sunkStatus = true;
  }
}

module.exports = Ship;
