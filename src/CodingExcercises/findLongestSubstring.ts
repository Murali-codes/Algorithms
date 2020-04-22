/* 
  write a function findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

*/

export const findLongestSubstring = (str) => {
  if (!str.length) {
    return 0;
  }

  let distinctCharecters: string[] = [str[0]];
  let i = 1;
  while (distinctCharecters.indexOf(str[i]) === -1 && i < str.length) {
    distinctCharecters.push(str[i]);
    i++;
  }
  if (i === str.length) {
    return distinctCharecters.length;
  }
  let maxLen = distinctCharecters.length;
  let index;
  while (i < str.length) {
    index = distinctCharecters.indexOf(str[i]);
    if (index > -1) {
      distinctCharecters = distinctCharecters.slice(index + 1);
      distinctCharecters.push(str[i]);
    } else {
      distinctCharecters.push(str[i]);
      if (distinctCharecters.length > maxLen) {
        maxLen = distinctCharecters.length;
      }
    }
    i++;
  }
  return maxLen;
};

console.log(findLongestSubstring(""));
console.log(findLongestSubstring("longestsubstring"));
