/**
 * 172. Factorial Trailing Zeroes
 * https://leetcode.com/problems/factorial-trailing-zeroes/?envType=study-plan-v2&envId=top-interview-150
 * See https://www.purplemath.com/modules/factzero.htm
 * the zeroes come from factors of 10 so every 5 there is one more zero
 */

function trailingZeroes(n: number): number {
  let count: number = 0;
  if (n === 0) return 0;
  for (let i: number = n; i > 0; i--) {
    let num = 0;
    if (i % 5 === 0) count++;
    num = i / 5;
    while (num % 5 === 0) {
      num /= 5;
      count++;
    }
  }
  return count;
}

const n: number = 30; // Where we have 25 it's 5x5 so there is two 0
console.log(trailingZeroes(n));

/**
 * Input: n = 3
 * Output: 0
 * Explanation: 3! = 6, no trailing zero.
 */
