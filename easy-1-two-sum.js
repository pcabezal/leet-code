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