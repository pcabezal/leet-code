var ransomNote = function(note, mag) {
  let noteSplit = note.split(' ')
  let magSplit = mag.split(' ')
  let hashmap = {}

  magSplit.forEach(el => {
    hashmap[el] ? hashmap[el]++ : hashmap[el] = 1
  });

  for (let i = 0; i < noteSplit.length; i++) {
    let word = noteSplit[i]
    if (hashmap[word] > 0) {
      hashmap[word]--
    } else {
      return false
    }
  }

  return true
};



const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

console.log(ransomNote("sit ad est sint", magazine));

console.log(ransomNote("sit ad est love", magazine));

console.log(ransomNote("sit ad est sint in in", magazine));
