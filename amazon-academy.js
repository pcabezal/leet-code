let rank = [4,1,2,5,6,10,12,15,16]

//sort [rank] ascending
let sorted_rank = rank.sort((a,b) => a-b)

// split [sorted_rank] into subarrays of length size
let size = 3
let arrArr = []
for (let i = 0; i < sorted_rank.length; i+=size) {
    arrArr.push(sorted_rank.slice(i, i+size))  
}
console.log(arrArr);

// iterate through each subarray to increment imbalance count
let imbalance = 0
arrArr.forEach((e,i) => {
    for (let j = 0; j < e.length; j++) {
        if (e[j+1] > e[j]+1) imbalance++
    }
})
console.log(imbalance);