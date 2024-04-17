/**
 * https://leetcode.com/problems/sort-by/?envType=study-plan-v2&envId=30-days-of-javascript
 * 2724. Sort By
 */

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number;

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  return arr.sort((a, b) => fn(a) - fn(b));
}

const arr: JSONValue[] = [5, 4, 1, 2, 3],
  fn = (x: JSONValue) => (typeof x === "number" ? x : 0);
console.log(sortBy(arr, fn));

/**
 * Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
 * Output: [1, 2, 3, 4, 5]
 * Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.
 */
