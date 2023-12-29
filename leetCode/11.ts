/**
 * 392. Is Subsequence
 * https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=top-interview-150
 */

/* Not opti
function isSubsequence(s: string, t: string): boolean {
  let subString: string[] = s.split("");
  let mainString: string[] = t.split("");
  let filteredString: string[] = mainString.filter((element) =>
    subString.includes(element)
  );

  for (let i: number = 0; i < filteredString.length; i++) {
    for (let j: number = 0; j < subString.length; i++) {
      if (
        subString[j] === filteredString[i] &&
        subString[j + 1] === filteredString[i + 1]
      ) {
        return true;
      }
    }
  }

  console.log(subString, filteredString);

  return false;
}*/

function isSubsequence(s: string, t: string): boolean {
  let sIndex: number = 0;
  let tIndex: number = 0;

  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
    tIndex++;
  }

  return sIndex === s.length;
}

const s: string = "ab",
  t: string = "baab";

console.log(isSubsequence(s, t));
/**
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 */
