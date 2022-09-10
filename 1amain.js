var moveZeroes = function(nums) {
    let newNums = [];


    for (let i = nums.length-1; i >= 0; i--) {
        (nums[i] == 0) ? newNums.push(0) : newNums.unshift(nums[i]);  
    }


        


    return newNums;
};

console.log(moveZeroes([0,1,0,3,12]));