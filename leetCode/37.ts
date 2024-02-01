/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/description/?envType=study-plan-v2&envId=top-interview-150
 */

function isAnagram(s: string, t: string): boolean {
  return t.split("").sort().join("") == s.split("").sort().join("");
}

const s: string = "anagram",
  t: string = "nagaram";

console.log(isAnagram(s, t));

/**
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 */
