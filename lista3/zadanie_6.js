function createGenerator(n) {
    var _state = 0;
    return function () {
        return {
            next: function () {
                return {
                    value: _state,
                    done: _state++ >= n
                }
            }
        }
    }
}
var foo = {
    [Symbol.iterator]: createGenerator(20)
};
for (var f of foo)
    console.log(f);