/**
 * 2149. Rearrange Array Elements by Sign
 * https://leetcode.com/problems/rearrange-array-elements-by-sign/description/?envType=daily-question&envId=2024-02-14
 */

function rearrangeArray(nums: number[]): number[] {
  const positivesNums: number[] = [];
  const negativeNums: number[] = [];
  const res: number[] = [];

  for (let ele of nums) {
    if (ele < 0) negativeNums.push(ele);
    if (ele > 0) positivesNums.push(ele);
  }

  let length: number = 0;

  if (negativeNums.length !== positivesNums.length) {
    length =
      negativeNums.length > positivesNums.length
        ? negativeNums.length
        : positivesNums.length;
  } else length = negativeNums.length;

  for (let i = 0; i < length; i++) {
    if (positivesNums[i]) res.push(positivesNums[i]);
    if (negativeNums[i]) res.push(negativeNums[i]);
  }

  return res;
}

const nums: number[] = [3, 1, -2, -5, 2, -4];

console.log(rearrangeArray(nums));
