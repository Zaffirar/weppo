function fibb_rek(n){
    if(n==0) return 0;
    if(n==1) return 1;
    return fibb_rek(n-1)+fibb_rek(n-2);
}
function fibb_iter(n){
    var fib0 = 0;
    var fib1 = 1;
    var temp;
    while(n--){
        temp = fib0;
        fib0 = fib1;
        fib1 = fib1+temp;
    }
    return fib0;
}
console.log(fibb_rek(17));
console.log(fibb_iter(17));
