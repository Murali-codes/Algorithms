/*
  Write a function called sumZero which accepts a sorted array of integers.
  The function should find the first pair where the sum is 0.
  Return an array that includes both the values that sum to 0 or undefined if such pair doesnt exists.
*/

export const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let sum;
  while (left < right) {
    sum = arr[left] + arr[right];
    if (!sum) {
      return [arr[left], arr[right]];
    } else if (sum >= arr[right]) {
      return;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

// console.log(sumZero([-4, 0, 1, 2, 3, 10]));
