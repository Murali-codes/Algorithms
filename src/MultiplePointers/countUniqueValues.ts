/*
  Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
  There can be nagative numbers in the array but it will always be sorted.
*/

export const countUniqueValues = (arr) => {
  if (!arr.length) {
    return 0;
  }
  let i = 0;
  let j = i + 1;
  while (j < arr.length) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i + 1;
};

// console.log(countUniqueValues([]));
