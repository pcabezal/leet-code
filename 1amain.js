var removeElement = function(nums, val) {
    let count = 0;
    let ind = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums.unshift(nums[i]);
            i++;
            count++;
        }
    }
    console.log(nums);
    return count;
};

console.log(removeElement([3,2,2,3], 3));