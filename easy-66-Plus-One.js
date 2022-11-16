var plusOne = function(digits) {
  let joined = digits.join('')
  let inc = BigInt(joined) + BigInt(1)
  return inc.toString().split('')
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));