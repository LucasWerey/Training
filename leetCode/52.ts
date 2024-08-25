/**
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75
 * 1071. Greatest Common Divisor of Strings
 */

function gcdOfStrings(str1: string, str2: string) {
  if (str1.length < str2.length) return gcdOfStrings(str2, str1);
}

const str1: string = "ABCABCD",
  str2: string = "ABC";

console.log(gcdOfStrings(str1, str2));
/**
 * Input: str1 = "ABCABC", str2 = "ABC"
 * Output: "ABC"
 */
