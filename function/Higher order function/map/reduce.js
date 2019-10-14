'use strict';
// function pow(x) {
//     return x*x;
// };
// var arr = [1, 2, 3, 4, 5];
// var sum = arr.map(pow);//调用平方pow函数
// console.log(sum);
// function jiafa(x) {
//     var y = (x + 2) * 34;
//     return y;
// };
// var a = 2;
// var sum = a.map(jiafa);
// console.log(sum);//map只对数组进行操作
// function f(x) {
//     return x * x;
// };
//  var arr = [1, 2, 3, 4, 5];
// var result = [];
// for(var i=0; i<arr.length; i++){
//     result.push(f(arr[i]));
// }
// console.log(result);
// var arr = [1, 2, 3, 4, 5];
// console.log(arr.map(String));//转化为字符串
// var sum = arr.map(f);
// console.log(sum);
var arr = [1, 2, 3, 4, 5];
// function f(x,y) {
//     return x + y;
// }
// var sum = arr.reduce(f);
// console.log(sum);//输出为15，求和函数。如果是只传送x值，会输出1。
// function f(x, y) {
//     return 10 * x + y;
// }
// var sum = arr.reduce(f);
// console.log(sum);//利用f(f(x1, x2), x3)
// console.log(parseInt("11"));//11
// console.log(parseInt("12", 36));//38第二个数表示基数，介于2~36
// console.log(parseInt("1f",16));//31
// console.log(parseInt("11"));//11
// console.log(parseInt("2f",16));//2*16+15=47
//console.log(parseInt("22", 36));//2*36+2
var arr = ['1', '2', '3'];
var r;
r = arr.map(parseInt);
console.log(r);