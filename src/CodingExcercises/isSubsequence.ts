/*

Write a function called isSubsequence which takes in 2 strings 
and checks whether the characters in the first string form a subsequence of the characters in the second string, without their order changing;

*/

export const isSubsequence = (str1, str2) => {
  if (str1.length > str2.length) {
    return false;
  }
  let i = 0;
  let j = 0;
  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  if (i === str1.length) {
    return true;
  }
  return false;
};

/*

function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}

*/

console.log(isSubsequence("hello", "hello world"));
