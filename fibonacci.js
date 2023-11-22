function fibonacciGenerator(n){
    var n1 = 0;
    var n2 = 1;
    var arr = [];
    for(var i = 0; i < n; i++){
        arr.push(n1);
        var n3 = (n1 + n2);
        n3 = (n1 + n2);
        n1 = n2;
        n2 = n3;
    }
    
    return arr;
}
var ans = fibonacciGenerator(3);
console.log(ans);