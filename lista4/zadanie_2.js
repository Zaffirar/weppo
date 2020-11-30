var Foo = (function () {
    function Qux() {
        console.log("Jestem prywatny!");
    }
    function Foo(){

    }
    Foo.prototype.Bar = function () {
        Qux();
    };
    return Foo;
}());
var p1 = new Foo();
p1.Bar();
//p1.Qux(); <---- Nie działa, skaładowa "prywatna"
