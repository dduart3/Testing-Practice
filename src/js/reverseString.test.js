reverseString = require("../js/reverseString.js");

test("input string should be returned reversed", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("input string should be returned reversed", () => {
  expect(reverseString("Dynamo")).toBe("omanyD");
});
