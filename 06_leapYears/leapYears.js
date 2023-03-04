const leapYears = function(year) {
    // Wrote following the diagram algorithm, can be shrink to match solution
    if (year % 4 == 0 && year % 100 != 0 || year % 100 == 0 && year % 400 ==  0) {
        return true;

    } else {
        return false;
    }
}
// Do not edit below this line
module.exports = leapYears;