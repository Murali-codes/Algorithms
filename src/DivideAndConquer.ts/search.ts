/*

Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located
If the value is not found, return -1

*/
export const search = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] < val) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }
  return -1;
};
console.log(search([1, 2, 3, 4, 5, 6], 9));
