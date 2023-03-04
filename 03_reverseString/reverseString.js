const reverseString = function(string) {
        var splitString = string.split('');
        var reversedWord = splitString.reverse();
        var newString = reversedWord.join('');
        return newString;
};

// Do not edit below this line
module.exports = reverseString;
