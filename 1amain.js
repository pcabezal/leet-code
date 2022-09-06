var removeDuplicates = function(nums) {
    let pointer = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i+1]) {
            pointer++;
            nums[pointer] = nums[i + 1];
        } 

    return pointer;
};

console.log(removeDuplicates([1,1,2]));

// [0,0,1,1,1,2,2,3,3,4]