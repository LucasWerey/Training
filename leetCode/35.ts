/**
 * 135. Candy
 * https://leetcode.com/problems/candy/description/?envType=study-plan-v2&envId=top-interview-150
 */

function candy(ratings: number[]): number {
  const candies: number[] = new Array<number>(ratings.length).fill(1);
  let res: number = 0;
  for (let i: number = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i: number = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      if (candies[i] <= candies[i + 1] + 1) {
        candies[i] = candies[i + 1] + 1;
      }
    }
  }

  for (let i: number = 0; i < candies.length; i++) {
    res += candies[i];
  }

  return res;
}
const ratings: number[] = [1, 2, 87, 87, 87, 2, 1];

console.log(candy(ratings));

/**
 * Input: ratings = [1,0,2]
 * Output: 5
 * Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
 */
