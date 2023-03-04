const sumAll = function(...args) {
    var sum = 0;
    // Check if any argument is not a number type or negative number
    for (item of args) {
        if (typeof item != 'number' || item < 0) {
            sum = 'ERROR';
        } else {
            continue;
        }
    }

    // Set min and max between the args and proceed with sum
    if (sum != 'ERROR') {
        const lower = Math.min(...args);
        const upper = Math.max(...args);
        for (let i = lower; i <= upper; i++) {
            sum += i;
        }
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
