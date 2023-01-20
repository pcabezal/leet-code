var twoSum = function(nums, target) {
  let hashmap = {}

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (hashmap[target - num] !== undefined) {
      return [hashmap[target - num], i]
    }
    hashmap[num] = i
  }

  return []
};

// 2.0

var twoSum = function(nums, target) {
  // make map object
  const map = {}
  
  // iterate through nums, adding values and indeces to object and checking if existing values can sum to target
  for (ind in nums) {
      let remainder = target - nums[ind]
      if (map[remainder]) return [map[remainder], ind]
      map[nums[ind]] = ind
  }
  
};