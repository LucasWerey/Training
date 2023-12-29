/** 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  return (
    s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() ===
    s
      .replace(/[^a-zA-Z0-9]/g, "")
      .split("")
      .reverse()
      .join("")
      .toLowerCase()
  );
};


