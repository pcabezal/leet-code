// i know this is not optimal but I don't know hash tables yet

var canConstruct = function(ransomNote, magazine) {
    let ransomArr = ransomNote.split('');
    let magArr = magazine.split('');
    let truth = true;

    ransomArr.forEach(element => {
        let ind = magArr.indexOf(element);
        if (ind > -1) {
            magArr.splice(ind, 1)
        } else {
            truth = false
        }
    });

    return truth;
};

console.log(canConstruct('abc', 'adcbef'));

console.log(canConstruct('abcd', 'abefg'));