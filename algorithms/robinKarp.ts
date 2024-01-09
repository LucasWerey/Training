/**
 * Robin Karp algorithm for string matching in O(n+m) time complexity
 * using rolling hash technique and prime number for hashing
 */
function RobinKarp(str: string, pattern: string): string[] {
  const prime = 101;
  const m = pattern.length;
  const n = str.length;
  let patternHash = 0;
  let strHash = 0;
  let h = 1;
  let result: string[] = [];

  for (let i = 0; i < m - 1; i++) {
    h = (h * prime) % n;
  }

  for (let i = 0; i < m; i++) {
    patternHash = (prime * patternHash + pattern.charCodeAt(i)) % n;
    strHash = (prime * strHash + str.charCodeAt(i)) % n;
  }

  for (let i = 0; i <= n - m; i++) {
    if (patternHash === strHash) {
      let j;
      for (j = 0; j < m; j++) {
        if (str[i + j] !== pattern[j]) break;
      }

      if (j === m) result.push(`Pattern found at index ${i}`);
    }

    if (i < n - m) {
      strHash =
        (prime * (strHash - str.charCodeAt(i) * h) + str.charCodeAt(i + m)) % n;

      if (strHash < 0) strHash = strHash + n;
    }
  }

  return result;
}

const str: string = "ababbaezaba";
const pattern: string = "aba";
console.log(RobinKarp(str, pattern));
