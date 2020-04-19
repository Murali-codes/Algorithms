import { sumZero } from "../multiplePointers";

describe("Multiple Pointer pattern tests", () => {
  it("returns undefined if a pair whose sum is 0 doesnt exists", () => {
    let array1 = [1, 2, 4];
    expect(sumZero(array1)).toBe(undefined);
  });

  it("Returns array includes pair of numbers whose sum is 0", () => {
    let array1 = [-2, 2, 4];
    expect(sumZero(array1)).toEqual([-2, 2]);
  });
  it("Returns first occurance if there are multiple pairs which sum to 0", () => {
    let array1 = [-2, -1, 1, 2, 4];
    expect(sumZero(array1)).toEqual([-2, 2]);
  });
});
