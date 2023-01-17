var intersection = function(nums1, nums2) {
  let answer = new Set()
  let map = {}

  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = 1
    
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]]) answer.add(nums2[i])
    
  }


console.log(map);
  console.log('map ' + map)
  console.log('answer' + answer)

  return Array.from(answer) 
};

console.log(intersection([1,2,2,1], [2,2]));