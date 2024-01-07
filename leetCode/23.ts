/**
 * 68. Text Justification
 * https://leetcode.com/problems/text-justification/?envType=study-plan-v2&envId=top-interview-150
 */
function fullJustify(words: string[], maxWidth: number): string[] {
  const res: string[] = [];
  const spaces: string[] = new Array(maxWidth + 1).join(" ").split("");

  let i = 0;
  let j = 0;

  for (i; i < words.length; i = j) {
    let len = -1;
    for (
      j = i;
      j < words.length && len + 1 + words[j].length <= maxWidth;
      j++
    ) {
      len += 1 + words[j].length;
    }

    let diff = maxWidth - len;
    let spacesToAdd = 1;
    let extraSpace = 0;

    if (j !== i + 1 && j !== words.length) {
      spacesToAdd = Math.floor(diff / (j - 1 - i)) + 1;
      extraSpace = diff % (j - 1 - i);
    }

    let row = words[i];
    for (let k: number = i + 1; k < j; k++, extraSpace--) {
      let spaceLength = spacesToAdd + (extraSpace > 0 ? 1 : 0);
      row += spaces.slice(0, spaceLength).join("") + words[k];
    }

    row += spaces.slice(0, maxWidth - row.length).join("");

    res.push(row);
  }

  return res;
}

const words: string[] = [
    "This",
    "is",
    "an",
    "example",
    "of",
    "text",
    "justification.",
  ],
  maxWidth: number = 16;

console.log(fullJustify(words, maxWidth));

/**
 * Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
 * Output:
 * [
 * "This    is    an",
 * "example  of text",
 * "justification.  "
 * ]
 */
