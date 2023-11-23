const Gameboard = require("../src/classes/gameboardClass.js");

describe("createBoard function on gameboard creation", () => {
  test("should create a nested object with outer keys and inner keys", () => {
    const testGameboard = new Gameboard();

    expect(testGameboard.board).toEqual({
      A: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
      },
      B: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
      },
      C: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
      },
      D: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
      },
      E: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
      },
      F: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
      },
      G: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
      },
      H: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
      },
      I: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
      },
      J: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
      },
    });
  });
});

describe("placeShip function tests", () => {
  test("Gameboards place ships across a y axis", () => {
    const testGameboard = new Gameboard();
    testGameboard.placeShip(2, "A1", "horizontal");
    // console.log(testGameboard.board);
    const testShip = testGameboard.board["A"]["1"];
    expect(testGameboard.board["A"]["1"]).toEqual(testShip);
    expect(testGameboard.board["A"]["2"]).toEqual(testShip);
  });

  test("Gameboards place ships across a x axis", () => {
    const testGameboard = new Gameboard();
    testGameboard.placeShip(5, "B2", "vertical");
    const testShip = testGameboard.board["B"]["2"];
    expect(testGameboard.board["B"]["2"]).toEqual(testShip);
    expect(testGameboard.board["C"]["2"]).toEqual(testShip);
    expect(testGameboard.board["D"]["2"]).toEqual(testShip);
    expect(testGameboard.board["E"]["2"]).toEqual(testShip);
    expect(testGameboard.board["F"]["2"]).toEqual(testShip);
  });

  test("can handle multiple ships on one gameboard", () => {
    const testGameboard = new Gameboard();
    testGameboard.placeShip(2, "A1", "horizontal");
    testGameboard.placeShip(5, "B2", "vertical");
    const testShipOne = testGameboard.board["A"]["1"];
    const testShipTwo = testGameboard.board["B"]["2"];
    console.log(testGameboard.board);
    expect(testGameboard.board["A"]["1"]).toEqual(testShipOne);
    expect(testGameboard.board["A"]["2"]).toEqual(testShipOne);
    expect(testGameboard.board["B"]["2"]).toEqual(testShipTwo);
    expect(testGameboard.board["C"]["2"]).toEqual(testShipTwo);
    expect(testGameboard.board["D"]["2"]).toEqual(testShipTwo);
    expect(testGameboard.board["E"]["2"]).toEqual(testShipTwo);
    expect(testGameboard.board["F"]["2"]).toEqual(testShipTwo);
  });
});
