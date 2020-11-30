console.log( (![]+[])[+[]]+(![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]] ); //"fail"
//połączenie "f" + "a" + "i" + "l"

//"f"
console.log( ![] );//false
console.log( (![]+[]) );//"false"
console.log( +[] );//0
console.log( (![]+[])[+[]] );//"false"[0] -> "f"


//"a"
console.log( (![]+[]) );//"false"
console.log( +[] );//0
console.log( !+[] );//true
console.log( +!+[] );//1
console.log( (![]+[])[+!+[]] )//"false"[1] -> "a"

//"i"
console.log( [![]] )//[false]
console.log( [].toString )//undefined
console.log( [][[]] )//undefined
console.log( ([![]]+[][[]]) )//"falseundefined"
console.log( +[] )//0
console.log( +!+[] )//1
console.log( +!+[]+[+[]] )//"10"
console.log( ([![]]+[][[]])[+!+[]+[+[]]] )//"falseundefined"[10] -> 1

//"l"
console.log( (![]+[]) );//"false"
console.log( !+[]+!+[] );//1+1 -> 2
console.log( (![]+[])[!+[]+!+[]] )//"false"[2]