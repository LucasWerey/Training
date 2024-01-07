/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/?envType=study-plan-v2&envId=top-interview-150
 */

function twoSum(nums: number[], target: number): number[] {
  let res: number[] = [];

  for (let i: number = 0; i < nums.length; i++) {
    for (let j: number = 0; j < nums.length; j++) {
      if (i != j && nums[i] + nums[j] === target) res = [j, i];
    }
  }

  return res;
}

const nums: number[] = [2, 7, 11, 15],
  target: number = 9;

console.log(twoSum(nums, target));
/**
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */
