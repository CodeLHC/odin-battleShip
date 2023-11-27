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

    expect(testGameboard.board["A"]["1"]).toEqual(testShipOne);
    expect(testGameboard.board["A"]["2"]).toEqual(testShipOne);
    expect(testGameboard.board["B"]["2"]).toEqual(testShipTwo);
    expect(testGameboard.board["C"]["2"]).toEqual(testShipTwo);
    expect(testGameboard.board["D"]["2"]).toEqual(testShipTwo);
    expect(testGameboard.board["E"]["2"]).toEqual(testShipTwo);
    expect(testGameboard.board["F"]["2"]).toEqual(testShipTwo);
  });
});

describe("receiveAttack function tests", () => {
  test("records a missed hit", () => {
    const testGameboard = new Gameboard();
    testGameboard.receiveAttack("A", "1");
    expect(testGameboard.board["A"]["1"]).toEqual("missed");
  });
  test("updates hit times on ship instance if a ship is hit", () => {
    const testGameboard = new Gameboard();
    testGameboard.placeShip(2, "A1", "horizontal");
    const testShip = testGameboard.board["A"]["1"];
    testGameboard.receiveAttack("A", "1");
    testGameboard.receiveAttack("A", "2");
    expect(testShip.sunkStatus).toEqual(true);
  });

  test("gameboard is able to tell if all ships have sunk", () => {
    const testGameboard = new Gameboard();
    testGameboard.placeShip(2, "A1", "horizontal");
    testGameboard.placeShip(5, "B2", "vertical");
    testGameboard.placeShip(3, "A3", "horizontal");
    testGameboard.placeShip(4, "H5", "horizontal");
    testGameboard.placeShip(3, "F4", "horizontal");
    // const testShipOne = testGameboard.board["A"]["1"];
    testGameboard.receiveAttack("A", "1");
    testGameboard.receiveAttack("A", "2");
    testGameboard.receiveAttack("B", "2");
    testGameboard.receiveAttack("C", "2");
    testGameboard.receiveAttack("D", "2");
    testGameboard.receiveAttack("E", "2");
    testGameboard.receiveAttack("F", "2");
    testGameboard.receiveAttack("A", "3");
    testGameboard.receiveAttack("A", "4");
    testGameboard.receiveAttack("A", "5");
    testGameboard.receiveAttack("F", "4");
    testGameboard.receiveAttack("F", "5");
    testGameboard.receiveAttack("F", "6");
    testGameboard.receiveAttack("H", "5");
    testGameboard.receiveAttack("H", "6");
    testGameboard.receiveAttack("H", "7");
    testGameboard.receiveAttack("H", "8");

    console.log(testGameboard.board);
    expect(testGameboard.gameOver).toEqual(true);
  });
});
