/**
 * 2621. Sleep
 * https://leetcode.com/problems/sleep/description/
 */

async function sleep(millis: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

const millis: number = 100;

sleep(millis).then(() => console.log(millis));
/**
 * Input: millis = 100
 * Output: 100
 * Explanation: It should return a promise that resolves after 100ms.
 * let t = Date.now();
 * sleep(100).then(() => {
 * console.log(Date.now() - t); // 100
 * });
 */
