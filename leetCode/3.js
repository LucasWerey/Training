/** 26. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function () {
  let nums = [1, 1, 2];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

console.log(removeDuplicates());
