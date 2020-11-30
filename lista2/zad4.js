var ClassFirst = function () {};
var ClassSecond = function () {};
var instance = new ClassFirst();
console.log(typeof instance); // object
console.log(typeof instance == 'ClassFirst'); // false
console.log(instance instanceof Object); // true
console.log(instance instanceof ClassFirst); // true
console.log(instance instanceof ClassSecond); // false 

console.log('example string' instanceof String); // false
console.log(typeof 'example string' == 'string'); // true

console.log('example string' instanceof Object); // false
console.log(typeof 'example string' == 'object'); // false

console.log(true instanceof Boolean); // false
console.log(typeof true == 'boolean'); // true

console.log(99.99 instanceof Number); // false
console.log(typeof 99.99 == 'number'); // true

var a = function() {} 
console.log(a instanceof Function); // true
console.log(typeof a == 'function'); // true

console.log([] instanceof Array); // true
console.log(typeof []); //object

var b = {}
console.log(b instanceof Object); // true
console.log(typeof b); // object
