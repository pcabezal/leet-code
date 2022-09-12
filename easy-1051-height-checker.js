var heightChecker = function(heights) {
    let expected = [...heights];
    expected.sort((a,b) => a - b);
    let count = 0;

    heights.forEach((el, i) => {
        if (el !== expected[i]) count++;
    });

    return count;
};

