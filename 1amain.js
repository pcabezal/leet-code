var duplicateZeros = function(arr) {
    let newArr = [];
    arr.forEach(el => {
        newArr.push(el);
        if (el === 0) newArr.push(0);
    });
    return newArr;
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0]));