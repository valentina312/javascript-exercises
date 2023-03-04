const removeFromArray = function(array1, ...args) {
    var array2 = Array.from(args);
    for (var element of array2) {
        console.log(array1)
        if (array1.includes(element)) {
            array1.splice(array1.indexOf(element), 1);
        } else {
            continue;
        }
        console.log(array1)
    }
    return array1;
};

// Do not edit below this line
module.exports = removeFromArray;
