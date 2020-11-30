function Tree(val, left, right) {
    this.left = left;
    this.right = right;
    this.val = val;
}
Tree.prototype[Symbol.iterator] = function* () {
    var Q = [this];
    while (!Q.length == 0) {
        var curr = Q.splice(0, 1)[0];
        yield curr.val;
        if (curr.right) {
            Q.push(curr.right);
        }
        if (curr.left) {
            Q.push(curr.left);
        }

    }
}
var root = new Tree(1,
    new Tree(2, new Tree(3)), new Tree(4));
for (var e of root) {
    console.log(e);
}
    // 1 4 2 3
    //odpoweidź na pytanie niepunktowane: Dostalibyśmy algorytm przechodzenia drzewa w głąb