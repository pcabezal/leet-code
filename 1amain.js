var thirdMax = function(nums) {
    let nodupes  = new Set(nums)


    for (let i = 0; i < 3; i++) {
        if (nodupes.size > 1) nodupes.delete(Math.max(...nodupes))
    }

    return Math.max(...nodupes)

};

console.log(thirdMax([2,2,3,1,4,5]));