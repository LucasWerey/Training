/**
 * 290. Word Pattern
 * https://leetcode.com/problems/word-pattern/?envType=study-plan-v2&envId=top-interview-150
 */

function wordPattern(pattern: string, s: string): boolean {
  const patternSplitted: string[] = pattern.split("");
  const stringSplitted: string[] = s.split(" ");
  const mapCharToStr: Map<string, string> = new Map();
  const mapStrToChar: Map<string, string> = new Map();

  if (patternSplitted.length !== stringSplitted.length) return false;

  for (let i = 0; i < patternSplitted.length; i++) {
    const char = patternSplitted[i];
    const str = stringSplitted[i];

    if (mapCharToStr.has(char) && mapCharToStr.get(char) !== str) return false;
    if (mapStrToChar.has(str) && mapStrToChar.get(str) !== char) return false;

    mapCharToStr.set(char, str);
    mapStrToChar.set(str, char);
  }

  return true;
}

const pattern: string = "abba",
  s: string = "dog constructor constructor dog";

// We need to use a map instead of an object bcs contrustor is a property of an object
console.log(wordPattern(pattern, s));

/**
 * Input: pattern = "abba", s = "dog cat cat dog"
 * Output: true
 */
