/**
 * 202. Happy Number
 * https://leetcode.com/problems/happy-number/?envType=study-plan-v2&envId=top-interview-150
 */

function isHappy(n: number): boolean {
  let slow: number = n;
  let fast: number = getSumOfSquares(n);
  while (fast !== 1 && slow !== fast) {
    slow = getSumOfSquares(slow);
    fast = getSumOfSquares(getSumOfSquares(fast));
  }

  return fast === 1;
}

function getSumOfSquares(n: number): number {
  let sum: number = 0;

  while (n > 0) {
    let digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }

  return sum;
}

const n: number = 19;

console.log(isHappy(n));

/**
 * Input: n = 19
 * Output: true
 * Explanation:
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 */
