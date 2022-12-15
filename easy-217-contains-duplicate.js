var containsDuplicate = function(nums) {
    let lib = {}
    for (let i = 0; i < nums.length; i++) {
      if (lib[nums[i]]) {
        return true
      } else {
        lib[nums[i]] = true
      }
      
    }
};