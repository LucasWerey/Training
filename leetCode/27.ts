/**
 * 50. Pow(x, n)
 * https://leetcode.com/problems/powx-n/?envType=study-plan-v2&envId=top-interview-150
 */

function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);

  let result: number = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      result *= x;
      n--;
    }
    x *= x;
    n /= 2;
  }

  return result;
}

const x: number = 2,
  n: number = 8;

console.log(myPow(x, n));

/**
 * Input: x = 2.00000, n = 10
 * Output: 1024.00000
 */
