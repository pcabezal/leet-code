var checkIfExist = function(arr) {
    const hashTable = {};
    
    for(let i = 0; i < arr.length; i ++) {
      const currValue = arr[i];
      
      if(hashTable[currValue] !== undefined) {
        return true
      }
      hashTable[currValue / 2] = 'poo';
      hashTable[currValue * 2] = 'poo';
    }
  
  return false;
};

// way faster!
// var checkIfExist = function(array) {
//     while (array.length) { // While the array has items
//       const n = array.pop() // Get an item and remove it from the array
//        // If the double or the half is found stop looking
//       if (array.includes(n*2) || array.includes(n/2)) return true
//     }
//     return false // If we get here we've gone through the whole array without finding a match
//   }