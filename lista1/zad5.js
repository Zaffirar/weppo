function fibb_rek(n){
    if(n==0) return 0;
    if(n==1) return 1;
    return fibb_rek(n-1)+fibb_rek(n-2);
}
function fibb_iter(n){
    var fib0 = 0;
    var fib1 = 1;
    while(n--){
        fib1 = fib1 + fib0;
        fib0 = fib1 - fib0;
    }
    return fib0;
}
for (let i = 10; i < 46; i++) { //dla n=48 rekurencja liczyła się minutę, zostawiam n<46
    console.log("Dla n="+i);
    console.time("Fibonacci Rekurencyjnie");
    fibb_rek(i);
    console.timeEnd("Fibonacci Rekurencyjnie");
    console.log("");
    console.time("Fibonacci Iteracyjnie");
    fibb_iter(i);
    console.timeEnd("Fibonacci Iteracyjnie");
    console.log(""); 
}
/*
Dla n=45
Node.js:
Fibonacci Rekurencyjnie: 10434.259ms
Fibonacci Iteracyjnie: 0.005ms

Opera:
Fibonacci Rekurencyjnie: 11195.5087890625 ms
Fibonacci Iteracyjnie: 0.00390625 ms

Chrome:
Fibonacci Rekurencyjnie: 11168.624267578125 ms
Fibonacci Iteracyjnie: 0.005126953125 ms

Edge:
Fibonacci Rekurencyjnie: 11166.318115234375 ms
Fibonacci Iteracyjnie: 0.0048828125 ms
Brak znaczących różnic
*/