function sum(...tab) {
    let sum=0;
    for(let i=0; i<tab.length; i++){
        sum+=tab[i];
    }
    return sum;
}
console.log(sum(1, 2, 3));
// 6
console.log(sum(1, 2, 3, 4, 5));
    // 15