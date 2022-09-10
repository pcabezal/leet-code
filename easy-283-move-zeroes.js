var moveZeroes = function(nums) {
    let newNums = [];

    for (let i = nums.length-1; i >= 0; i--) {
        (nums[i] == 0) ? newNums.push(0) : newNums.unshift(nums[i]);  
    }

    return newNums;
};

// suggested solution
// var moveZeroes = function(nums) {

//     let lastNonZeroFoundAt = 0

//     for (let cur = 0; cur < nums.length; cur++) {
//         if (nums[cur] !== 0) {
//             [nums[lastNonZeroFoundAt], nums[cur]] = [nums[cur], nums[lastNonZeroFoundAt]];
//             lastNonZeroFoundAt++;
//         }
//     }
// }

