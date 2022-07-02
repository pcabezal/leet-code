var numberOfSteps = function(num) {
    let counter = 0;
    while (num) {
        counter ++;
        (num%2 == 0) ? num = num/2 : num = num - 1;
    }
    return counter;
};