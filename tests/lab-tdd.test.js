const {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  squareRoot,
  floor,
  ceiling,
} = require("../lab-TDD-starter");
const { describe, test } = require("node:test");
const assert = require("node:assert");

///////Suite
describe("Lab-TDD tests", () => {
  // Add function tests
  describe("Add function tests", () => {
    test("Add function should return 8 when adding 5 and 3", () => {
      assert.strictEqual(add(3, 5), 8);
    });
    test("Add function should return 0 when adding -5 and 5", () => {
      assert.strictEqual(add(-5, 5), 0);
    });
  });
});
// Divide function tests
describe("Divide function tests", () => {
  test("Divide function should return 4 when dividing 32 over 8", () => {
    assert.strictEqual(divide(32, 8), 4);
  });
  test("Zero division should throw an error", () => {
    assert.throws(() => divide(10, 0), Error);
  });
});
// Subtract function tests
describe("Subtract function tests", () => {
  test("Subtract function should return -2 when subtracting 5 from 3", () => {
    assert.strictEqual(subtract(3, 5), -2);
  });
  test("Subtract function should return 10 when subtracting -5 from 5", () => {
    assert.strictEqual(subtract(5, -5), 10);
  });
});

// Multiply function tests
describe("Multiply function tests", () => {
  test("Multiply function should return 108 when multiplying 12 and 9", () => {
    assert.strictEqual(multiply(12, 9), 108);
  });
  test("Multiply function should return 0 when multiplying any number with 0", () => {
    assert.strictEqual(multiply(7, 0), 0);
  });
});


// Modulas function tests
describe("Modulas function tests", () => {
  test("Modulas function should return 1 when 17 is divided by 4", () => {
    assert.strictEqual(modulas(17, 4), 1);
  });
  test("Modulas function should return 0 when 16 is divided by 4", () => {
    assert.strictEqual(modulas(16, 4), 0);
  });
});

// Power function tests
describe("Power function tests", () => {
  test("Power function should return 32 when 2 is raised to 5", () => {
    assert.strictEqual(power(2, 5), 32);
  });
  test("Power function should return 1 when any number is raised to 0", () => {
    assert.strictEqual(power(5, 0), 1);
  });
});

// Square root function tests
describe("SquareRoot function tests", () => {
  test("SquareRoot function should return 5 when the square root of 25 is calculated", () => {
    assert.strictEqual(squareRoot(25), 5);
  });
  test("SquareRoot function should throw an error for negative numbers", () => {
    assert.throws(() => squareRoot(-9), Error);
  });
});

// Floor function tests
describe("Floor function tests", () => {
  test("Floor function should return 15 when given 15.8", () => {
    assert.strictEqual(floor(15.8), 15);
  });
  test("Floor function should return -16 when given -15.2", () => {
    assert.strictEqual(floor(-15.2), -16);
  });
});

// Ceiling function tests
describe("Ceiling function tests", () => {
  test("Ceiling function should return 16 when given 15.3", () => {
    assert.strictEqual(ceiling(15.3), 16);
  });
  test("Ceiling function should return -15 when given -15.8", () => {
    assert.strictEqual(ceiling(-15.8), -15);
  });
});

