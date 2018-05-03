function adjacentElementsProduct(inputArray) {
    var c =inputArray[0]*inputArray[1];
    var p = c;
    for(var i=1;i<inputArray.length;i++){
        console.log(c);
        var c=inputArray[i]*inputArray[i+1];
        if(c > p){
            p=c;
        };
    };
    return p;
};