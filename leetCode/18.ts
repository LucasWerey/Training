/**
 * 1768. Merge Strings Alternately
 * https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75
 * Could be optimized 
 */

function mergeAlternately(word1: string, word2: string): string {
  let res: string = "";
  let l: number = 0;
  word1.length <= word2.length ? (l = word2.length) : (l = word1.length);
  for (let i: number = 0; i < l; i++) {
    if (word1[i] && word2[i]) {
      res += word1[i] + word2[i];
    } else {
      if (word1.length < word2.length) {
        for (let j: number = i; j < l; j++) {
          res += word2[j];
        }
        return res;
      }
      if (word1.length > word2.length) {
        for (let j: number = i; j < l; j++) {
          res += word1[j];
        }
        return res;
      }
    }
  }
  return res;
}
const word1: string = "ab",
  word2: string = "pqrs";
console.log(mergeAlternately(word1, word2));

/**
 * Input: word1 = "abc", word2 = "pqr"
 * Output: "apbqcr"
 * Explanation: The merged string will be merged as so:
 * word1:  a   b   c
 * word2:    p   q   r
merged: a p b q c r*/
