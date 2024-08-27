var maxProfit = function(prices) {
  let maxP = 0;
  let profit = 0;
  let left = 0;
  let right = 1;


  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      profit = prices[right] - prices[left]
      maxP = Math.max(maxP, profit)
    } else {
      left = right
    }
    right++
  }
  return maxP
};