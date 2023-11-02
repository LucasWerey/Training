/** 27. Remove Element
 * https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let nb = 0;
  for (let i of nums) {
    if (i !== val) nums[nb++] = i;
  }
  return nb;
};

const nums = [3, 2, 2, 3];
const val = 3;

console.log(removeElement(nums, val));
