const findNumbers = function(nums) {
    let count = 0;
    nums.forEach(element => {
        if ((Math.log(element) * Math.LOG10E + 1 | 0) % 2 === 0) count++;
    });
    return count;
};

