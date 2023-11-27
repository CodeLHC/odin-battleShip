// const Gameboard = require("../src/classes/gameboardClass.js");

class Player {
  constructor(board) {
    this.board = board;
  }

  attack(x, y) {
    this.board.receiveAttack(x, y);
  }
}

module.exports = Player;
