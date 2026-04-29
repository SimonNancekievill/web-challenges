import { add, subtract, divide, multiply } from ".";

// Testing for the Add Function add()
test("add() returns '5' if called with add(2,3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("add() returns a negative value if the greater argument is negative", () => {
  const result = add(-10, 4);
  expect(result).toBeLessThan(0);
});

test("add() returns '0.3' if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});
//

// Testing for the Subract Function subtract()
test("subtract() return '10' if called with subtract(15, 5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("subtract() returns negative value if the greater argument is negativ.", () => {
  const result = subtract(5, 15);
  expect(result).toBeLessThan(0);
});
//

// Testing for the Multiply Function multiply()
test("multiply() returns '8' if called with multiply(2,4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("multiply() returns negative value if only the first argument is negativ.", () => {
  const result = multiply(-5, 5);
  expect(result).toBeLessThan(0);
});

test("multiply() returns negative value if only the second argument is negativ.", () => {
  const result = multiply(5, -5);
  expect(result).toBeLessThan(0);
});

test("multiply() returns positive value if called with two negative arguments.", () => {
  const result = multiply(-5, -5);
  expect(result).toBe(25);
});
//

// Testing for Division Function divide()
test("divide() returns '3' if called with divide(9,3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("divide() returns 'You should not do this!' if called with 0 as second argument", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
//
