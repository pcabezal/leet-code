var thirdMax = function(nums) {
    nums = [...new Set(nums)].sort((a,b) => b-a);
    return (nums.length <= 2) ? nums[0] : nums[2];
};
