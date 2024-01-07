/**
 * 151. Reverse Words in a String
 * https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=top-interview-150
 */

function reverseWords(s: string): string {
  let obj: string[] = s.split(" ").filter((item) => item != "");
  console.log(obj);
  let res: string = "";

  for (let i: number = obj.length - 1; i > 0; i--) {
    res += obj[i] + " ";
  }

  res += obj[0];

  return res;
}

const s = "  hello   world  ";
console.log(reverseWords(s));

/**
 * Input: s = "  hello world  "
 * Output: "world hello"
 * Explanation: Your reversed string should not contain leading or trailing spaces.
 */
