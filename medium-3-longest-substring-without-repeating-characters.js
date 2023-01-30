var lengthOfLongestSubstring = function(s) {
  let arr = s.split('')
  let longest = 0
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let j = i
    let long = 0
    while (arr[j] && !map.has(arr[j]))  {
      map.set(arr[j], true)
      j++
      long++
      if (long > longest) longest = long
    }
    long = 0
    map.clear()
  }
  return longest
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));