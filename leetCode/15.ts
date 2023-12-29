/**
 * 14. Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/?envType=study-plan-v2&envId=top-interview-150
 * Precision : every word should have the prefix otherwhise it should returns ""
 */

function longestCommonPrefix(strs: string[]): string {
  let res: string = strs[0];

  for (let i: number = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(res)) res = res.slice(0, -1);
    if (res === "") return res;
  }
  return res;
}

const strs: string[] = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));

/**
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 */
