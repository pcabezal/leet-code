var numberOfSteps = function(num) {
    let counter = 0;
    while (num) {
        counter ++;
        (num%2 == 0) ? num /= 2 : num--;
    }
    return counter;
};