//użycie operatorów . oraz [] do odwoływania się do składowych obiektu
var p = {};
p.foo = 1; //p.foo==1
p['foo'] = 2; //p.foo==2
//p.fo+o = 3; //błąd
p['fo'+'o'] = 4; // p.foo==4
p['na zwa'] = 5; // przy tej notacji składowe obieku mogą mieć nawet spację w nazwie!


//użycie argumentów innego typu niż string dla operatora [] dostępu do składowej obiektu
console.log(p["foo"]) // 4
console.log(p[0])   // undefined
p[0] = 7
console.log(p[0]) // 7
var q={
    valueOf: function(){
        return "foo"
    }
}
console.log(p[q]) // undefined
var r={
    toString: function(){
        return "foo"
    }
}
console.log(p[r]) // 4
//Jaki wpływ na klucz pod jakim zapisana zostanie wartość ma programista w obu przypadkach?
//Klucz zawsze będzie konwertowany do Stringa, więc programista może zdefiniować wartosć funkcji toString


//użycie argumentów innego typu niż number dla operatora [] dostępu do tablicy
var tab = [1, 2, "napis", -73]
console.log(tab["jeden"]) // undefined
tab["jeden"] = 1;
console.log(tab["jeden"]) // 1
var t1={
    toString: function(){
        return "jeden"
    }
}
console.log(tab[t1]) // 1
var t2={
    valueOf: function(){
        return "jeden"
    }
}
console.log(tab[t2]) // undefined
//Czy i jak zmienia się zawartość tablicy jeśli zostanie do niej dopisana właściwość pod kluczem, który nie jest liczbą?
//Tak:
console.log(tab)//[1, 2, 'napis', -73, jeden: 1]
console.log(tab.length)//4
tab.length=7
console.log(tab.length)//7
tab.length=2
console.log(tab.length)//2
