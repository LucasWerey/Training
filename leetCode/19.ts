/**
 * 1431. Kids With the Greatest Number of Candies
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75
 */

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let res: boolean[] = [];
  let greater: number = candies[0];
  for (let i: number = 1; i < candies.length; i++) {
    candies[i] < greater ? (greater = greater) : (greater = candies[i]);
  }
  for (let j: number = 0; j < candies.length; j++) {
    res[j] = candies[j] + extraCandies >= greater;
  }
  return res;
}

/**
 * Could use premade functions :
 function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let maxCandies: number = Math.max(...candies);
  return candies.map(candy => candy + extraCandies >= maxCandies);
}
 */

const candies: number[] = [2, 3, 5, 1, 3],
  extraCandies: number = 3;

console.log(kidsWithCandies(candies, extraCandies));

/**
 * Input: candies = [2,3,5,1,3], extraCandies = 3
 * Output: [true,true,true,false,true]
 */
