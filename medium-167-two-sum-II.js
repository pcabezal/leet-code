// brute force, too slow
var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
      let result
      for (let j = i+1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] == target) {
          return [i+1, j+1]
        }
      }
    }
};

// two pointers
const twoSum = (numbers, target) => {
  let p1 = 0
  let p2 = numbers.length - 1
  
  while (numbers[p1] + numbers[p2] !== target) {
      if (numbers[p1] + numbers[p2] > target) {
          p2--
      } else {
          p1++
      }
  }
  
  return [p1 + 1, p2 + 1]
}

// console.log(twoSum([2,7,11,15], 9));

console.log(twoSum([0,0,3,4],  0));

