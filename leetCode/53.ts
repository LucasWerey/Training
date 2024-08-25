/**
 * 70. Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/description/
 */

function climbStairs(n: number): number {
  if (n <= 1) return 1;
  var a = 1,
    b = 1;
  for (let i = 1; i < n; i++) [a, b] = [b, a + b];
  return b;
}

const n = 2;
const result = climbStairs(n);
console.log(result);

/**
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 */
