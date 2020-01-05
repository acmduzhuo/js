// function sum(arr) {
//     return arr.reduce(function (x, y) {
//         return x + y;
//     });
// }
// console.log(sum([1, 2, 3, 4, 5]));//基本求和
// function lazy_sum(arr) {
//     var sum = function () {
//         return arr.reduce(function (x, y) {
//             return x + y;
//         });
//     }
//     return sum;
// }
// console.log(lazy_sum([1, 2, 3, 4, 5]));//返回求和函数
// var f = lazy_sum([1, 2, 3, 4, 5]);
// console.log(f());//返回求和结果
// var f1 = lazy_sum([1, 2, 3, 4, 5]);
// var f2 = lazy_sum([1, 2, 3, 4, 5]);
// console.log(f1===f2);//调用互不影响
// function count() {
//     var arr = [];
//     for(var i=1; i<=3; i++){
//         arr.push(function () {
//             return i*i;
//         });
//     }
//     return arr;
// }
// var results = count();
// var f1 = results[0];
// var f2 = results[1];
// var f3 = results[2];
// console.log(f1());
// console.log(f2());
// console.log(f3());//输出均为16,原因：返回f函数并没有马上执行，而是等待调用f才会执行，等待循环结束，执行i*i
// function count() {
//     var arr = [];
//     for(var i=1; i<=3; i++){
//         arr.push((function (n) {
//             return function () {
//                 return n*n;
//             }
//         })(i));
//     }
//     return arr;
// }
// var results = count();
// var f1 = results[0];
// var f2 = results[1];
// var f3 = results[2];
// console.log(f1());
// console.log(f2());
// console.log(f3());
// // (function (x) {
// //     return x*x
// // })(3);//立即执行函数
`use strict`
// function create_counter(initial) {
//     var x = initial || 0;
//     return {
//         inc: function () {
//             x += 1;
//             return x;
//         }
//     }
// }
// var c1 = create_counter();
// console.log(c1.inc());
// console.log(c1.inc());
// console.log(c1.inc());
function Time(n) {
    var x = n || 0;
    return {
        inc:function () {
            x += 1;
            return x;
        }
    }
}
var c1 = Time();
console.log(c1.inc());
console.log(c1.inc());
console.log(c1.inc());