// Runtime: 76 ms, faster than 67.86% of JavaScript online submissions for Richest Customer Wealth.
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let wealth = accounts[i].reduce((p,c) => p + c, 0);
        if (wealth > maxWealth) maxWealth = wealth;
    }
    return maxWealth;
};
