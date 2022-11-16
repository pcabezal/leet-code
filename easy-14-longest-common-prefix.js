// first tryyy

var longestCommonPrefix = function(strs) {
  let prefix = '';

  for (let i = 0; i < strs[0].length; i++) {
    let letter = strs[0][i];
    if (strs.every(word => word[i] == letter)) {
      prefix += letter;
    } else {
      break;
    }
  }

  return prefix
};