/*
                ANAGRAMS
Given 2 strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word,phrase, or name formed by rearranging the letters of another.

Example: Cinema  -> iceman

*/

export const validAnagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  const frequnecyCounter1 = {};
  for (let index in string1) {
    frequnecyCounter1[string1[index]] =
      (frequnecyCounter1[string1[index]] || 0) + 1;
    frequnecyCounter1[string2[index]] =
      (frequnecyCounter1[string2[index]] || 0) + 1;
  }

  for (let key in frequnecyCounter1) {
    if (frequnecyCounter1[key] % 2 !== 0) {
      return false;
    }
  }
  return true;
};

const str1 = [
  ["", ""],
  ["aaz", "zza"],
  ["anagram", "nagaram"],
  ["rat", "car"],
  ["awesome", "awesom"],
  ["qwerty", "qeywrt"],
  ["texttwisttime", "timetwisttext"],
];

str1.forEach((i) => {
  console.log(i[0], i[1], validAnagram(i[0], i[1]));
});
