/*

Write a function same, which accepts two arrays.
The function should return  true if  every value in the array has its corresponding value squared in the second array.
The frequency of values must be the same.

*/

export const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let key of arr1) {
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
  }
  for (let key of arr2) {
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(Number(key) ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[Number(key) ** 2]) {
      return false;
    }
  }
  return true;
};

let arr1 = [1, 2, 3];
let arr2 = [1, 4, 9];
console.log(same(arr1, arr2));
