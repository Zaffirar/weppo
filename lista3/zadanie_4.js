function createFs(n) { // tworzy tablicę n funkcji
    var fs = []; // i-ta funkcja z tablicy ma zwrócić i
    var _loop = function _loop(i) {
        fs[i] = function () {
            return i;
        };
    };
    
    for (var i = 0; i < n; i++) {
        _loop(i);
    };
    return fs;
}
var myfs = createFs(10);
console.log(myfs[0]()); // zerowa funkcja miała zwrócić 0
console.log(myfs[2]()); // druga miała zwrócić 2
console.log(myfs[7]()); // 10 10 10
//var sprawia że zmienna i jest globalna dla całej createFs, więc po przejściu fora ma wartość 10
//dopiero w consol logu zwracamy i, które jest cały czas (nic się nie stało) równe 10.
//po zmianie let jest zmienną lokalną tylko dla fora, 
// w związku z tym kiedy przypisujemy ją do zmiennej fs (funkcji) która jest globalna
// jest ona wiązana od razu, w jej obecnej wartości.
