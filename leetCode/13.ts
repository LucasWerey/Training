/**
 * 13. Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/?envType=study-plan-v2&envId=top-interview-150
 * We check if the previous value is superior to the current one
 * If not we substract the previous value to the current one
 */

function romanToInt(s: string): number {
  let result: number = 0;
  const value: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i: number = s.length - 1; i >= 0; i--) {
    if (value[s[i - 1]] < value[s[i]]) {
      result += value[s[i]] - value[s[i - 1]];
      i--;
    } else result += value[s[i]];
  }
  return result;
}

const s: string = "MCMXCIV";
console.log(romanToInt(s));

/**
 * Example 1:
 * Input: s = "III"
 * Output: 3
 * Explanation: III = 3.
 */
