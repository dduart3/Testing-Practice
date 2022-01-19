calculator = require("./calculator");

test("calculator.add should return the result of a sum of 2 numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("calculator.add should return the result of a sum of 2 numbers", () => {
  expect(calculator.add(5, 5)).toBe(10);
});

test("calculator.substract should return the result of a substraction of 2 numbers", () => {
  expect(calculator.substract(2, 2)).toBe(0);
});

test("calculator.substract should return the result of a substraction of 2 numbers", () => {
  expect(calculator.substract(10, 5)).toBe(5);
});

test("calculator.multiply should return the result of a multiplication of 2 numbers", () => {
  expect(calculator.multiply(2, 5)).toBe(10);
});

test("calculator.multiply should return the result of a multiplication of 2 numbers", () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test("calculator.divide should return the result of a divition of 2 numbers", () => {
  expect(calculator.divide(4, 4)).toBe(1);
});

test("calculator.divide should return the result of a divition of 2 numbers", () => {
  expect(calculator.divide(5, 10)).toBe(0.5);
});
