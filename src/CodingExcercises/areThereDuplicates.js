/*
 Implement a function called, areThereDuplicates which accepts a variable number of arguments,
  and checks wheather there are aby duplicates among the arguments passed in . 
*/

const areThereDuplicates = function () {
  const frequencyCounter = {};
  for (let i = 0; i < arguments.length; i++) {
    if (frequencyCounter[arguments[i]]) {
      return true;
    }
    frequencyCounter[arguments[i]] = 1;
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3, 4, 5, 1, 7, 8));
