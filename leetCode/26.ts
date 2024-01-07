/**
 * 69. Sqrt(x)
 * https://leetcode.com/problems/sqrtx/?envType=study-plan-v2&envId=top-interview-150
 */
function mySqrt(x: number): number {
  for (let i = 0; true; i++) {
    if ((i + 1) ** 2 > x || i ** 2 === x) return i;
  }
}

const x: number = 4;
console.log(mySqrt(x));

/**
 * Input: x = 4
 * Output: 2
 * Explanation: The square root of 4 is 2, so we return 2.
 */
