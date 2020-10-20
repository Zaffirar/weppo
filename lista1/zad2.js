var answ = [];
for (let i = 1; i <= 100000; i++) {
    let arr_num = (i+'').split('');
    let sum=0;
    let condition = true;
    for (const digit of arr_num) {
        if(digit==0){
            condition=false;
            break;
        }
        sum+=+digit;
        condition = condition && !(i%digit);
    }
    if(condition && !(i%sum)){
        answ.push(i);
    }
}
console.log(answ);
