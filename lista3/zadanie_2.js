function fib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}
function memo(fn) {
    var cache = {};

    return function (n) {
        if (n in cache) {
            return cache[n]
        } else {
            var result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}
var fib = memo(fib)
console.log("Dla n=45");
console.time("Fibonacci");
fib(45);
console.timeEnd("Fibonacci")
//czas == 0.114ms
/*
Z pierwszej listy
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