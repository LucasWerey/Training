/**
 * 17. Letter Combinations of a Phone Number
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/?envType=study-plan-v2&envId=top-100-liked
 */

const values: { [key: number]: string[] } = {
  0: [" "],
  1: [""],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];
  let result: string[] = [""];
  for (let digit of digits) {
    let temp: string[] = [];
    for (let res of result) {
      for (let char of values[parseInt(digit)]) {
        temp.push(res + char);
      }
    }
    result = temp;
  }
  return result;
}

const digits: string = "23";

console.log(letterCombinations(digits));
