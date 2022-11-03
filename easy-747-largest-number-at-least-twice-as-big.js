var dominantIndex = function(nums) {
  let maxIndex = 0;
  let max = 0;
  nums.forEach((e,i) => {
      if (e > max) {
          max = e;
          maxIndex = i;
      }
  })
  
  for (let i = 0; i < nums.length; i++) {
      if (i !== maxIndex && nums[i]*2 > max) return -1
  }
  
  return maxIndex
};