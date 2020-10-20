var arr=[];
for (let i = 2; i <= 100000; i++) {
    arr.push(i);
}
for (const i of arr) {
   arr=arr.filter(function(value){return (value<=i)||(value%i!=0)});
}
console.log(arr);