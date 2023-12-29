/**
 * 58. Length of Last Word
 * https://leetcode.com/problems/length-of-last-word/
 */

function lengthOfLastWord(s: string): number {
  let arr: string[] = s.split(" ");
  let i: number = -1;
  while (arr.slice(i)[0].length === 0) {
    i--;
  }
  return arr.slice(i)[0].length;
}

const s: string = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));

/**
 * Example 1:
 * Input: s = "Hello World"
 * Output: 5
 * Explanation: The last word is "World" with length 5.
 */
