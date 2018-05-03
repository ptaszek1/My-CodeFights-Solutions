function shapeArea(n) {
    var total = 1;
    for(var i = 1; i < n;i++){
        total += 4 * i;
    }
    return total;
}