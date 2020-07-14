// if(2 > 1)
// {
//     x = 1;
//     y = 2;
//     z = 3;
// }
// if(x < y){
//     z = 4;
// }
// if(x > y){
//     z = 5;
// }
// alert(z);
// alert('我不想执行');
// alert('我也不想执行');
// var arr = [0, 1];
// var
//     a = 0;
//     b = 1;
//     max = 5;
//     n = 0;
// while(n < max){
//     n++;
//     [a, b] = [b, a+b];
//     arr.push(b);
// }
// console.log(arr);
setTimeout(() => console.log(1), 0);

new Promise(resolve => {
    console.log(2);
    resolve();
}).then(() => {
    console.log(3);
});
console.log(4);
var a = 99;
console.log(a);
{
    console.log(a);
    var a = 30;
    console.log(a);
}
//let func = value => value;
let func = function (value) {
    return value;

};
var arr = [2, 5, 3, 1, 4];
function Sort(arr) {
    if(arr.length<=1){
        return arr;
    }
    var zhong = Math.floor(arr.length/2);
    var key = arr.splice(zhong, 1)[0];
    var left = [];
    var right = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<key){
            left.push(arr[i]);
        }
        if(arr[i]>key){
            right.push(arr[i]);
        }
    }
    return Sort(left).concat(key, Sort(right));
}
console.log(Sort(arr));