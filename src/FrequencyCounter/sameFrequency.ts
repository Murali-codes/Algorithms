/*
  Write a function called sameFrequency. Given 2 positive integers , find oyt if the 2 numbers have the same frequency of digits.
*/

export const sameFrequency = (num1, num2) => {
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  while (num1 > 0) {
    const digit1 = num1 % 10;
    const digit2 = num2 % 10;
    frequencyCounter1[digit1] = (frequencyCounter1[digit1] || 0) + 1;
    frequencyCounter2[digit2] = (frequencyCounter2[digit2] || 0) + 1;
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
  }

  if (num1 !== num2) {
    return false;
  }
  for (let key in frequencyCounter1) {
    if (
      !frequencyCounter2[key] ||
      frequencyCounter2[key] !== frequencyCounter1[key]
    ) {
      return false;
    }
  }

  return true;
};

console.log(sameFrequency(182, 281));
