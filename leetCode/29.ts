/**
 * 45. Jump Game II
 * https://leetcode.com/problems/jump-game-ii/?envType=study-plan-v2&envId=top-interview-150
 */

function jump(nums: number[]): number {
  let jumps: number = 0;
  let leftPos: number = 0,
    rightPos: number = 0;

  while (rightPos < nums.length - 1) {
    let max = 0;
    for (let i: number = leftPos; i <= rightPos; i++) {
      max = Math.max(max, i + nums[i]);
    }
    leftPos = rightPos + 1;
    rightPos = max;
    jumps++;
  }
  return jumps;
}

const nums: number[] = [2, 3, 1, 1, 4];
console.log(jump(nums));

/**
 * Input: nums = [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
 */
