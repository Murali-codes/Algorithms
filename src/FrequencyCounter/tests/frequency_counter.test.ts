import { same } from "../frequency_counter";

describe("Frequency counter pattern tests", () => {
  it("When input arrays are of different length function should return false", () => {
    let array1 = [1, 2, 4];
    let array2 = [3, 5];
    expect(same(array1, array2)).toBe(false);
  });

  it("Returns true if array2 has squares of all then numbers in array1 in same frequency", () => {
    let array1 = [1, 2, 4];
    let array2 = [1, 4, 16];
    expect(same(array1, array2)).toBe(true);
  });

  it("return false if array2 has squares of all the numbers in array1 but frequency varies", () => {
    let array1 = [1, 2, 2, 4];
    let array2 = [1, 4, 16];
    expect(same(array1, array2)).toBe(false);
  });
  it("returns false if not all squeares of array1 are present in array2", () => {
    let array1 = [1, 2, 3];
    let array2 = [1, 9, 16];
  });
});
