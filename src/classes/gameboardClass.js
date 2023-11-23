const Ship = require("./shipClass.js");

class Gameboard {
  constructor() {
    this.xAxisKeys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    this.board = this.createBoard();
  }

  createBoard() {
    const yAxisKeys = Array.from({ length: 10 }, (_, index) =>
      (index + 1).toString()
    );
    const initialValue = "";
    const board = {};
    this.xAxisKeys.forEach((xAxisKey) => {
      board[xAxisKey] = {};
      yAxisKeys.forEach((yAxisKey) => {
        board[xAxisKey][yAxisKey] = initialValue;
      });
    });
    return board;
  }

  placeShip(length, firstPosition, orientation) {
    const ship = new Ship(length);

    const [xAxis, yAxis] = firstPosition.split("");

    for (let i = 0; i < length; i++) {
      let currentX, currentY;

      if (orientation === "vertical") {
        currentX = this.xAxisKeys[this.xAxisKeys.indexOf(xAxis) + i];
        currentY = yAxis;
      } else if (orientation === "horizontal") {
        currentX = xAxis;
        currentY = (parseInt(yAxis) + i).toString();
      } else {
        throw new Error("Invalid orientation. Use 'horizontal' or 'vertical'.");
      }

      if (
        this.board[currentX] &&
        this.board[currentX][currentY] !== undefined
      ) {
        this.board[currentX][currentY] = ship;
      } else {
        throw new Error("Ship placement is outside the board boundaries.");
      }
    }
  }

  receiveAttack() {}
}

module.exports = Gameboard;
