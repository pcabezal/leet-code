// var numJewelsInStones = function(jewels, stones) {
//   jewelSplit = jewels.split('');
//   let sum = 0;
//   for (let i = 0; i < stones.length; i++) {
//     if (jewelSplit.some(e => e === stones[i])) sum++
//   }    
//   return sum
// };

// way better
// const numJewelsInStones = (J, S) => {
//     const jewels = new Set(J)
//     return S.split('').reduce((res, s) => res + jewels.has(s), 0)
// };

// hash map
var numJewelsInStones = function(jewels, stones) {
    const map = {}
    let count = 0
    
    for (let c of jewels) {
        map[c] = true
    }
    
    for (let c of stones) {
        if (map[c]) {
            count++
        }
    }
    console.log(map[c]);
    return count
    
};

console.log(numJewelsInStones('aA', 'aaAbbbbDa'));