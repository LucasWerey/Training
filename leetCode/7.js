/**
 * 122. Best Time to Buy and Sell Stock II
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit1 = 0;
  let maxProfit2 = 0;
  let minPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit1) {
      maxProfit1 = prices[i] - minPrice;
    } else if (prices[i] - minPrice > maxProfit2) {
      maxProfit2 = prices[i] - minPrice;
    }
  }
  console.log(maxProfit1, maxProfit2);
  return maxProfit1 + maxProfit2;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
