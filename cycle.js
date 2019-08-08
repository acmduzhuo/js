// var x = 0;
// var i;
// for(i=1; i<=10000; i++){
//     x = x + i;
// }
// console.log(x);
// var x = 1;
// var i;
// for(i=1; i<=10; i++){
//     x = x * i;
// }
// //console.log(x);
// if(x === 3628800){
//     console.log(`1 x 2 x 3 x ....... x 10 = ` + x);
// }else{
//     console.log(`计算错误`);
// }
// var arr = ['Apple', 'Google', 'Microsoft'];
// var i, x;
// for(i=0; i<arr.length; i++){//循环遍历，注意是以长度来进行限制
//     x = arr[i];
//     console.log(x);
// }
// var x = 0;
// for(;;){
//     if(x > 100){
//         console.log('输出结束');
//         break;
//     }
//     x++;
// }
// var o = {
//     name: 'Jack',
//     age: 20,
//     city: 'Beijing'
// };
// for(var key in o){//和python相似
//     console.log(key);
// }
// var o = {
//     name: 'Jack',
//     age: 20,
//     city: 'Beijing'
// };
// for(var key in o){
//     if (o.hasOwnProperty(key)){
//         console.log(key);
//     }
// }
// var a = ['A', 'B', 'C'];
// for(var i in a){
//     console.log(i);
//     console.log(a[i]);
// }
// var x = 0;
// var n = 99;
// while(n > 0){
//     x = x + n;
//     n = n - 2;
// }
// console.log(x);//先判断，后执行
// var n = 0;
// do{
//     n = n + 1;
// }while(n < 100)//先执行，后判断
// console.log(n);
'use strict';
var arr = ['Bart', 'Lisa', 'Adam'];
// for(var i in arr){
//     console.log(`Hello, ${arr[i]}!`);
// }
// var j = 0;
// while(j < arr.length){
//     console.log(`Hello, ${arr[j]}!`);
//     j++;
// }
while(arr.length){
    console.log(`Hello, ${arr.pop()}!`);
}