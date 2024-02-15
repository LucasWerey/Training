/**
 * https://leetcode.com/problems/sort-characters-by-frequency/description/?envType=daily-question&envId=2024-02-07
 * 451. Sort Characters By Frequency
 */
function frequencySort(s: string): string {
  let result: { [key: string]: number } = {};
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (!result[ch]) {
      result[ch] = 1;
    } else {
      result[ch] += 1;
    }
  }
  let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

  let sortedStr = "";
  for (let [char, freq] of sorted) {
    sortedStr += char.repeat(freq);
  }

  return sortedStr;
}

const s: string = "tree";
console.log(frequencySort(s));
