var pivotIndex = function(nums) {

  let totalsum = nums.reduce((p,c) => p + c, 0);
  let leftsum = 0;

  for (let i = 0; i < nums.length; i++) {
      totalsum -= nums[i]

      if (totalsum == leftsum) return i

      leftsum += nums[i];
  }

  return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));
// console.log(pivotIndex([1,2,3]));
// console.log(pivotIndex([2,1,-1]));