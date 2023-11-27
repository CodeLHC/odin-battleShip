const Player = require("../src/classes/playerClass.js");
const Gameboard = require("../src/classes/gameboardClass.js");

describe("player can place attack on board", () => {
  test("should tell the player if they have missed a ship when attacking", () => {
    const testGameboard = new Gameboard();
    const player = new Player(testGameboard);

    player.attack("A", "1");

    expect(testGameboard.board["A"]["1"]).toEqual("missed");
  });

  test("should tell the player if they have hit a ship", () => {
    const testGameboard = new Gameboard();
    testGameboard.placeShip(2, "A1", "horizontal");
    const player = new Player(testGameboard);

    player.attack("A", "1");
    console.log(testGameboard.board);
    expect(testGameboard.board["A"]["1"]).toEqual({
      hitTimes: 1,
      length: 2,
      sunkStatus: false,
    });
  });
});
