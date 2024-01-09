/**
 * 80. Remove Duplicates from Sorted Array II
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150
 * Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice
 * The relative order of the elements should be kept the same.
 */

function removeDuplicates(nums: number[]): number {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === nums[i + 2]) {
      for (let j = i; j < nums.length - 1; j++) {
        // use  nums.splice(i, 1); is faster
        nums[j] = nums[j + 1]; // use  nums.splice(i, 1); is faster
      } // use  nums.splice(i, 1); is faster
      nums.length--; // use  nums.splice(i, 1); is faster
      console.log(nums);
    } else {
      i++;
    }
  }
  return nums.length;
}

let nums: number[] = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums));
/**
 * Input: nums = [1,1,1,2,2,3]
 * Output: 5, nums = [1,1,2,2,3,_]
 * Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.It does not matter what
 * you leave beyond the returned k (hence they are underscores).
 */
