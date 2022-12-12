var arrayPairSum = function(nums) {
    let sorted = nums.sort((a,b) => a - b)
    let sum = 0
    for (let i = sorted.length - 2; i >= 0; i -= 2) {
      sum += sorted[i]
    }
    return sum
};

console.log(arrayPairSum([1,4,3,2]));