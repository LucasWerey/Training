/**
 *
 * 9. Palindrome Number
 * https://leetcode.com/problems/palindrome-number/?envType=study-plan-v2&envId=top-interview-150
 */

/** FIRST WAY
function isPalindrome(x: number): boolean {
  let invertNumber: string = x.toString().split("").reverse().join("");
  return invertNumber === x.toString();
}
*/

/** SECOND WAY  */
function isPalindrome(x: number): boolean {
  let temp: number = x;
  let reverse: number = 0;

  if (x < 0) return false;

  while (temp > 0) {
    const digit: number = temp % 10;
    reverse = reverse * 10 + digit;
    temp = (temp - digit) / 10;
  }

  return reverse === x;
}

const x: number = 123102;

console.log(isPalindrome(x));

/**
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 */
