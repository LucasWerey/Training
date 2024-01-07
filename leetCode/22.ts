/**
 * 6. Zigzag Conversion
 * https://leetcode.com/problems/zigzag-conversion/?envType=study-plan-v2&envId=top-interview-150
 * other solution : https://www.youtube.com/watch?v=XGHmpYcvNn0
 */

function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  let resTab: string[][] = Array(numRows)
    .fill(null)
    .map(() => []);

  let direction = -1;
  let row = 0;

  for (let i = 0; i < s.length; i++) {
    resTab[row].push(s[i]);

    if (row === 0 || row === numRows - 1) {
      direction *= -1;
    }

    row += direction;
  }

  let result = resTab.flat().join("");

  return result;
}

const s: string = "PAYPALISHIRING",
  numRows: number = 3;
console.log(convert(s, numRows));

/**
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * Explaination :
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 */
