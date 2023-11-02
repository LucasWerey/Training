/** 169. Majority Element
 * https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function () {
  let nums = [3, 2, 3];
  let maxCount = 0;
  let index = -1;

  for (i = 0; i < nums.length; i++) {
    let count = 0;
    for (j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      index = i;
    }
  }
  if (maxCount > nums.length / 2) return nums[index];
  return -1;
};
console.log(majorityElement());
