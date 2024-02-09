/**
 * 2704. To Be Or Not To Be
 * https://leetcode.com/problems/to-be-or-not-to-be/
 */

type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (expectedVal: any) => {
      if (val === expectedVal) return true;
      else throw new Error("Not Equal");
    },
    notToBe: (expectedVal: any) => {
      if (val === expectedVal) throw new Error("Equal");
      else return true;
    },
  };
}

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
