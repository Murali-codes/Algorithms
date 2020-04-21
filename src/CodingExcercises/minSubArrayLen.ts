/*
  Write a function minSubArrayLen which accepts 2 parameters , an array of positive integers and a positive integer

  This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
  if there isn't one return 0 instead.

*/

export const minSubArrayLen = (arr, num) => {
  let sum = 0;
  let i = 0;
  while (sum < num && i < arr.length) {
    sum += arr[i];
    i++;
  }
  if (i === arr.length) {
    return 0;
  }

  let minLen = i;
  let j = 0;
  let temp = 0;
  let len;
  i--;
  while (i < arr.length) {
    temp = sum - arr[j];
    console.log(temp, sum, i, j, minLen);
    if (temp >= num) {
      len = i - j;
      if (len < minLen) {
        minLen = len;
      }
      j++;
      sum = temp;
    } else {
      i++;
      sum = temp + arr[i];

      j++;
    }
  }
  return minLen;
};

let a = [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19];
let n = 52;
console.log(minSubArrayLen(a, n));
