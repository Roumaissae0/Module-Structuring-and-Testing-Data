const getOrdinalNumber = require("./get-ordinal-number");

// Case 1: Identify the ordinal number for 1
test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

// Case 2: Identify ordinal number for 2
test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

// Case 3: Identify ordinal number for 3
test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

// Case 4: Identify ordinal numbers for other values
test("should return '4th' for 4", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
});

test("should return '11th' for 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
});

test("should return '21st' for 21", () => {
  expect(getOrdinalNumber(21)).toEqual("21st");
});