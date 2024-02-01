/**
 * 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-interview-150
 */

function groupAnagrams(strs: string[]): string[][] {
  const map: { [key: string]: string[] } = {};

  for (let str of strs) {
    const sorted = str.split("").sort().join("");
    if (!map[sorted]) {
      map[sorted] = [];
    }
    map[sorted].push(str);
  }

  return Object.values(map);
}


const strs: string[] = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

/**
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */
