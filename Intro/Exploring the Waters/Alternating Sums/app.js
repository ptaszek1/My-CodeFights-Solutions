function alternatingSums(a) {
    var sum = 0;
    var suma = 0;
    var arr1 = [];
    for ( var i = 0; i < a.length; i+=2){
        sum += a[i]
    }
    arr1.push(sum)
    for (var j = 1; j < a.length; j+=2){
        suma += a[j]
    }
    arr1.push(suma)
    console.log(suma);
    return arr1;
}