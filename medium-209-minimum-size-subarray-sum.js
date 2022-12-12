// mine but slow :(
var minSubArrayLen = function(target, nums) {
    let minLen = 10000000;
    let curLen = 0;
    let sum = 0;
    let start = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i]
      curLen++
      if (sum >= target) {
        if (curLen < minLen) minLen = curLen
        start++
        i = start
        sum = 0
        curLen = 0
      }
    }
    return minLen == 10000000 ? 0 : minLen
};

// better
var minSubArrayLen = function(s, nums) {
    let distance = Infinity;
    let left = 0;
    let sum = 0;
    // left pointer and right pointer defines the window. 
    // the goal is to find the smallest window that has a sum of s or larger.
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]; 
        while (sum >= s) {
            distance = Math.min(distance, right - left + 1);
            sum -= nums[left];
            left += 1;
        }
    }

    return distance === Infinity ? 0 : distance;
};