var isHappy = function(n) {
  const squareSum = function(number) {
      return number.toString().split('').reduce((acc, val) => acc + val**2, 0);
  }

  let curr = n
  let map = {}

  while (curr) {
    curr = squareSum(curr)
    if (curr == 1) return true
    if (map[curr]) return false
    map[curr] = 1
  }

};

console.log(isHappy(19));