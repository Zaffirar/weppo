var p = {
    a: 7,
    f: function (n) {
        return n + p.a;
    },
    get boo() {
        return p.a;
    },
    set boo(value) {
        p.a = value;
    }
}


console.log(p.a, p.f(7), p.boo);
p.boo = 6;
console.log(p.boo);

//można na oba sposoby
p.b = 4;
console.log(p.b);
p.f2 = (t, z) => t + (z * p.b);
console.log(p.f2(3, 2));

//trzeba użyć Object.defineProperty
Object.defineProperty(p, 'boo2', {
    get: function () {
        return p.b;
    },
    set: function (value) {
        p.b = value + 7;
    }
})
console.log(p.boo2);
p.boo2 = 20;
console.log(p.boo2);