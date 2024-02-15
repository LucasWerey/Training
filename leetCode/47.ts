/**
 * 387. First Unique Character in a String
 * https://leetcode.com/problems/first-unique-character-in-a-string/?envType=daily-question&envId=2024-02-05
 */

function firstUniqChar(s: string): number {
  for (let ele of s) {
    if (s.indexOf(ele) === s.lastIndexOf(ele)) {
      return s.indexOf(ele);
    }
  }
  return -1;
}

const s: string = "leetcode";
console.log(firstUniqChar(s));
