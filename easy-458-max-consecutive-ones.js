var findMaxConsecutiveOnes = function(nums) {
    let maxcount = 0;
    let count = 0;
    nums.forEach(el => {
        (el === 1) ? count++ : count = 0;
        if (count > maxcount) maxcount = count;
    });
    return maxcount;
};