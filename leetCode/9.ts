/**
122. Best Time to Buy and Sell Stock II
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

We sell every times the profit is positive
 */
function maxProfit(prices: number[]): number {
  let totalProfit: number = 0;

  for (let i = 1; i < prices.length; i++) {
    let current: number = prices[i];
    let previous: number = prices[i - 1];
    if (current > previous) totalProfit += prices[i] - prices[i - 1];
  }
  return totalProfit;
}
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));

/**
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
 */
