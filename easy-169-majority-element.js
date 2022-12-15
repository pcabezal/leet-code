var majorityElement = function(nums) {
  let hashmap = {}
  let half = nums.length/2
  for (let i=0; i < nums.length; i++) {
      let num = nums[i]
      hashmap[num] ? hashmap[num]++ : hashmap[num] = 1
      if (hashmap[num] > half) return num
  }
};