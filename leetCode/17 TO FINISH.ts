/**
 * 205. Isomorphic Strings
 * https://leetcode.com/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150
 * Not working to finish
 */

function isIsomorphic(s: string, t: string): boolean {
  let obj: string[] = [];
  if (s.length !== t.length) return false;

  for (let i: number = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = t[i];
    } else {
      if (obj[s[i]] !== t[i]) return false;
    }
  }
  return true;
}

const s: string = "badc",
  t: string = "baba";
console.log(isIsomorphic(s, t));

/**
 * Input: s = "ege", t = "add"
 * Output: true
 */
