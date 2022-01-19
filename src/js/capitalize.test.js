capitalize = require("../js/capitalize.js");

test("receive string to return it capitalized", () => {
  expect(capitalize("dog")).toBe("Dog");
});

test("receive string to return it capitalized", () => {
  expect(capitalize("pizza")).toBe("Pizza");
});

test("receive string to return it capitalized", () => {
  expect(capitalize("cheese")).toBe("Cheese");
});
