import { validAnagram } from "../anagrams";

describe("tests for anagrams", () => {
  it("returns false if strings are of different lengths", () => {
    const a1 = "abc";
    const a2 = "abcd";
    expect(validAnagram(a1, a2)).toBe(false);
  });
  it("returns false if string2 is not an anagram of string1", () => {
    const a1 = "abc";
    const a2 = "abd";
    expect(validAnagram(a1, a2)).toBe(false);
  });
  it("returns true if string2 is  an anagram of string1", () => {
    const a1 = "abc";
    const a2 = "cba";
    expect(validAnagram(a1, a2)).toBe(true);
  });
});
