const caesarCipher = require("./caesarCipher");

//caesarCipher = require("./caesarCipher");

test("should cipher an string having pass a key as value", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("should cipher an string having pass a key as value", () => {
  expect(caesarCipher("abc", 2)).toBe("cde");
});
