/**
 * 12. Integer to Roman
 * https://leetcode.com/problems/integer-to-roman/?envType=study-plan-v2&envId=top-interview-150
 */

function intToRoman(num: number): string {
  let res: string = "";

  const obj: { [key: number]: string } = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  const keys = Object.keys(obj)
    .map(Number)
    .sort((a, b) => b - a);

  console.log(keys);

  let i = 0;
  while (num > 0) {
    if (num >= keys[i]) {
      res += obj[keys[i]];
      num -= keys[i];
    } else {
      i++;
    }
  }

  return res;
}

const num: number = 1994;
console.log(intToRoman(num));
/**
 * Input: num = 3
 * Output: "III"
 */
