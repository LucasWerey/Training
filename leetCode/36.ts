/**
 * 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/description/
 */

function isValid(s: string): boolean {
  const stack: string[] = [];
  const bracketMap: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (bracketMap[char]) {
      if (stack.pop() !== bracketMap[char]) return false;
    } else stack.push(char);
  }
  return stack.length === 0;
}

const s: string = "({})";
console.log(isValid(s));

/**
 * Input: s = "()"
 * Output: true
 */