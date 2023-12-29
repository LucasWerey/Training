/**
 * 28. Find the Index of the First Occurrence in a String
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/?envType=study-plan-v2&envId=top-interview-150
 */

function strStr(haystack: string, needle: string): number {
  if (haystack.includes(needle)) return haystack.indexOf(needle);
  return -1;
}

function RabinKarp(haystack: string, needle: string): number {
  for (let i: number = 0; i <= haystack.length - needle.length; i++) {
    let j: number;
    for (j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === needle.length) {
      return i;
    }
  }
  return -1;
}

const haystack: string = "leetcodeleet",
  needle: string = "leeto";
console.log("JS functions", strStr(haystack, needle));
console.log("RabinKarp", RabinKarp(haystack, needle));
/**
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 */
