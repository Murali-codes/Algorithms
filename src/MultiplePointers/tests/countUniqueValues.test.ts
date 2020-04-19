import { countUniqueValues } from "../countUniqueValues";

describe("CountUniqueValues tests", () => {
  it("returns 0 if input has no elements", () => {
    const a = [];
    expect(countUniqueValues(a)).toBe(0);
  });

  it("returns number of unique values", () => {
    const a = [1, 2, 3, 4, 5, 5, 5, 5, 6];
    expect(countUniqueValues(a)).toBe(6);
  });
});
