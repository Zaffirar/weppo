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
var _it = fib();
for (var _result; _result = _it.next(), !_result.done;) { //można dać i fib() i fib_y()
    console.log(_result.value);
}
for (var i of fib_y()) { //tylko fib_y()
    console.log(i);
}
