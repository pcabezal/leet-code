var removeElement = function(nums, val) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums.unshift(nums[i]);
            i++;
            count++;
        }
    }
    return count;
};

// better
var removeElement = function(nums, val) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[index] = nums[i]
            index++;
        }
    }
    return index;
};
