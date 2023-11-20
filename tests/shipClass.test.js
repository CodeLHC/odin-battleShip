const { Ship } = require("../src/classes/shipClass");

describe("tests ship properties", () => {
  const testShip = new Ship(3);
  test("has length property", () => {
    expect(testShip.length).toBe(3);
  });

  test("starts with a hit amount of 0", () => {
    expect(testShip.hitTimes).toBe(0);
  });

  test("starts with sunkStatus as false", () => {
    expect(testShip.sunkStatus).toBe(false);
  });
});

describe("tests hit function", () => {
  const testShip = new Ship(3);
  test("hit times increase by 1 when function runs", () => {
    testShip.hit();
    expect(testShip.hitTimes).toBe(1);
  });
});

describe("tests isSunk function", () => {
  test("isSunk function changes sunk status to true", () => {
    const testShip = new Ship(3);
    testShip.isSunk();
    expect(testShip.sunkStatus).toBe(true);
  });

  test("sunk status becomes true with equal hits to length", () => {
    const testShip = new Ship(3);
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.sunkStatus).toBe(true);
  });
});
