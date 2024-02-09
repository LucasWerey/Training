/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/?envType=study-plan-v2&envId=top-interview-150
 * 209. Minimum Size Subarray Sum
 */

function minSubArrayLen(target: number, nums: number[]): number {
  let count: number = 0,
    total: number = 0,
    res: number = Infinity;
  if (nums.includes(target)) return 1;
  if (nums.reduce((acc, current) => acc + current, 0) < target) return 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    while (total >= target) {
      res = Math.min(i - count + 1, res);
      total -= nums[count];
      count++;
    }
  }
  return res === Infinity ? 0 : res;
}

const target: number = 7,
  nums: number[] = [2, 3, 1, 2, 4, 3];

console.log(minSubArrayLen(target, nums));

/**
 * Input: target = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 */
