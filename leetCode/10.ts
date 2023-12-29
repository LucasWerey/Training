/**
 * 55. Jump Game
 * https://leetcode.com/problems/jump-game/
 *
 * Greedy solution I check if it's possible to reach the next index 
 */

function canJump(nums: number[]): boolean {
  let find: number = nums.length - 1;
  for (let i: number = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= find) {
      find = i;
    }
  }
  return find === 0;
}

const nums: number[] = [2, 3, 1, 1, 4];
console.log(canJump(nums));

/**
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 */
