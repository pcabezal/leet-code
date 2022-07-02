// Runtime: 63 ms, faster than 94.12% of JavaScript online submissions for Running Sum of 1d Array.
const runningSum = function(nums) {
    let sum = 0;
    return nums.map(function(x){
        let value = x+sum;
        sum += x;
        return value;
    })
};