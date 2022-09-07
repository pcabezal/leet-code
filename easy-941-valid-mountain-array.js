var validMountainArray = function(arr) {
    if (arr.length < 3) return false;
    if (arr[1] < arr[0]) return false;

    let highest = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] == arr[i]) return false;
        if (arr[i-1] > arr[i]) {
            highest = i-1;
            break;
        }
    }

    for (let i = highest; i < arr.length-1; i++) {
        if (arr[i] <= arr[i+1]) return false
    }

    return true;
};