/**
 * 2665. Counter II
 * https://leetcode.com/problems/counter-ii/
 */

type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let count = init;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => {
      count = init;
      return count;
    },
  };
}

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
