function allLongestStrings(inputArray) {
    var arr = [];
    var count = 0;
    for (var i=0; i<inputArray.length; i++) {
        if (inputArray[i].length > count) {
            arr.length = 0;
            arr.push(inputArray[i]);
            count = inputArray[i].length;
        }
        else if (inputArray[i].length == count) {
            arr.push(inputArray[i]);
        }
    }
    return arr;
}