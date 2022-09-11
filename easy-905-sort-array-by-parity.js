const { METHODS } = require("http");

var sortArrayByParity = function(nums) {
    let evenArr = [];
    let oddArr = [];

    for (let i = 0; i < nums.length; i++) {
        nums[i]%2 == 0 ? evenArr.push(nums[i]) : oddArr.push(nums[i]);
    }

    return evenArr.concat(oddArr)
};

// sort method
// var sortArrayByParity = function(nums) {
//     return nums.sort((a, b) => (a & 1) - (b & 1) || a - b);
// }

// pointer method
// var sortArrayByParity = function(nums) {
//     let oddIdx = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0) {
//             [nums[i], nums[oddIdx]] = [nums[oddIdx], nums[i]];
//             oddIdx++;
//         }
//     }
    
//     return nums;
// };