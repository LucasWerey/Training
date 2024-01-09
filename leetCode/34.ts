/**
 * 238. Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=top-interview-150
 */

// O(n^2) version not fitting with a test case
/*
function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];

  for (let i: number = 0; i < nums.length; i++) {
    let left: number = 1;
    for (let k: number = i - 1; k >= 0; k--) {
      left *= nums[k];
    }

    let right: number = 1;
    for (let j: number = i + 1; j < nums.length; j++) {
      right *= nums[j];
    }
    result.push(right * left);
  }
  return result;
}
*/
// O(n^1) version fitting with test case
function productExceptSelf(nums: number[]): number[] {
  const result: number[] = new Array<number>(nums.length).fill(1);
  let right: number = 1,
    left: number = 1;

  for (let i: number = 0; i < nums.length; i++) {
    result[i] *= left;
    left *= nums[i];
  }

  for (let i: number = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }
  return result;
}

const nums: number[] = [1, 2, 3, 4];

console.log(productExceptSelf(nums));

/**
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 */
