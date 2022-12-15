var rotate = function(nums, k) {
    let left = nums.slice(k+1)
    let right = nums.slice(0, nums.length - k)
    let conc = left.concat(right)
    return conc
};

// better
var rotate = function (nums, k) {
  k %= nums.length;
  nums.unshift(...nums.splice(nums.length - k));
  return nums;
};

console.log(rotate([1,2,3,4,5,6,7], 3));