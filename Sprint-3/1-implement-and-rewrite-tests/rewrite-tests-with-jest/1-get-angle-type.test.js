const getAngleType = require("../implement/1-get-angle-type");

describe("getAngleType", () => {

  test("should return 'Right angle' for exactly 90 degrees", () => {
    expect(getAngleType(90)).toBe("Right angle");
  });

  test("should return 'Acute angle' for less than 90 degrees", () => {
    expect(getAngleType(45)).toBe("Acute angle");
  });

  test("should return 'Obtuse angle' for angles between 90 and 180 degrees", () => {
    expect(getAngleType(120)).toBe("Obtuse angle");
  });

  test("should return 'Straight angle' for exactly 180 degrees", () => {
    expect(getAngleType(180)).toBe("Straight angle");
  });

  test("should return 'Reflex angle' for angles between 180 and 360 degrees", () => {
    expect(getAngleType(200)).toBe("Reflex angle");
  });

});