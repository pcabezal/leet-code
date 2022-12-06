var reverseString = function(s) {
  let end = s.length
  let middle = end%2 == 0 ? end / 2 : end / 2 - .5

  for (let i = 0, j = end - 1; i < middle; i++, j--) {
    let first = s[i]
    let last = s[j]
    console.log(first, last);
    s[i] = last
    s[j] = first
  }
  return s
};

// better?
var reverseString = (s) => {
    for (let [a, b] = [0, s.length - 1]; a < b; a++, b--) {
        [s[a], s[b]] = [s[b], s[a]]
    }
};

console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["h","e","l","l","o","!"]));