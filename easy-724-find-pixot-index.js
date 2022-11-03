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
