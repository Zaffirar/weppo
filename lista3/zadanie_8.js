function fib() {
    var toReturn;
    var fib0 = 0;
    var fib1 = 1;
    return {
        next: function () {
        toReturn = fib0;
        fib1 = fib1 + fib0;
        fib0 = fib1 - fib0;
    return {
            value: toReturn,
            done: false
    }
    }
}
    }
function* fib_y() {
    var fib0 = 0;
    var fib1 = 1;
    while (true) {
        yield fib0;
        fib1 = fib1 + fib0;
        fib0 = fib1 - fib0;
    }
}


function* take(it, top) {
    var _it = it;
    for(let i=0; i<top;i++) {
        yield _it.next().value;
    }
}
// zwróć dokładnie 10 wartości z potencjalnie
// "nieskończonego" iteratora/generatora
for (let num of take(fib(), 10)) {
    console.log(num);
}
for (let num of take(fib_y(), 10)) {
    console.log(num);
}