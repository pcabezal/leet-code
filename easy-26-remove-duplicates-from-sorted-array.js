var removeDuplicates = function(nums) {
    let pointer = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i+1]) {
            nums[pointer++] = nums[i + 1];
        } 
    };
    return pointer;
}

// better, more readable
// var removeDuplicates = function(nums) {
//     let writePointer = 1;
//     for (let readPointer = 1; readPointer < nums.length; readPointer++) {
//         if (nums[readPointer] !== nums[readPointer - 1]) {
//             nums[writePointer] = nums[readPointer];
//             writePointer++;
//         } 
//     };
//     return writePointer;
// }