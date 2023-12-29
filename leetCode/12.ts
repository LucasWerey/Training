/**
 * 228. Summary Ranges
 * https://leetcode.com/problems/summary-ranges/?envType=study-plan-v2&envId=top-interview-150
 */

function summaryRanges(nums: number[]): string[] {
  let result: string[] = [];
  let start: number = nums[0];
  let end: number = nums[0];

  for (let i: number = 0; i < nums.length; i++) {
    start = nums[i];
    let j = i;
    if (nums[i] + 1 === nums[i + 1]) {
      while (nums[j] + 1 === nums[j + 1]) {
        j++;
      }
      end = nums[j];
      result.push(`${start}->${end}`);
      i = j;
    } else result.push(`${start}`);
  }

  return result;
}

const nums: number[] = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums));

/**
 * Input: nums = [0,1,2,4,5,7]
 * Output: ["0->2","4->5","7"]
 * Explanation: The ranges are:
 * [0,2] --> "0->2"
 * [4,5] --> "4->5"
 * [7,7] --> "7"
 */
