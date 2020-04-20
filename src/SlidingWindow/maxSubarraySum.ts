/*
 Write a  function called maxSubarraySum which accepts an array of intergers and a number called n.
 The function should calculate the maximum sum of n  consecutive elements in the array
*/

export const maxSubarraySum = (arr, n) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < n) return null;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = n; i < arr.length - n + 1; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
