// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// var intersect = function(nums1, nums2) {
//     let map = {}
//     let answer = []

//     nums1.forEach((e, i) => {
//       map[i] = e
//     })

//     console.log(map);

//     nums2.forEach((e,i) => {
//       console.log(map[i], e);
//       if (map[i] == e) answer.push(e)
//     })

//     return answer
// };

var intersect = function(nums1, nums2) {
  obj = {};
  result = [];
  for(let i of nums1){
    console.log('i', i);
      obj[i] = obj[i] ? obj[i]+1 : 1
      console.log('obj i', obj[i]);
  }


  console.log(obj);
  for(let i of nums2){
      if(obj[i]){
          obj[i]--
          result.push(i)
      }
  }
  console.log(obj);
  return result
};


console.log(intersect([1,2], [2,2]));
// console.log(intersect( [9,4,9,8,4], [4,9,5]));