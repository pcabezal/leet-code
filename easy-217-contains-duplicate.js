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

// set version
var containsDuplicate = function(nums) {
  let set = new Set(nums);
  return (set.size < nums.length) ? true : false
};