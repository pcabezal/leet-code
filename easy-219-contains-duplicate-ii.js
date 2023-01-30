var containsNearbyDuplicate = function(nums, k) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map.hasOwnProperty(nums[i])) {
      if (Math.abs(map[nums[i]] - i) <= k) return true
    }
    map[nums[i]] = i
  }
  return false
};

console.log(containsNearbyDuplicate([1,0,1,1], 1));