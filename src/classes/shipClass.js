class Ship {
  constructor(length) {
    this.length = length;
    this.hitTimes = 0;
    this.sunkStatus = false;
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

module.exports = { Ship };
