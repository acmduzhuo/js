// console.log(['Google', 'Apple', 'Micro'].sort());//[ 'Apple', 'Google', 'Micro' ]
// console.log(['Google', 'apple', 'Microsoft'].sort());//[ 'Google', 'Microsoft', 'apple' ]
// console.log([10, 20, 1, 2].sort());//[ 1, 10, 2, 20 ]sort函数默认排序规则，依据阿斯克码排列
// 'use strict';//接受函数自定义排序
// var arr = [10, 20, 1, 2];
// arr.sort(function (x, y) {
//     if(x < y){
//         return -1;
//     }
//     if(x > y){
//         return 1;
//     }
//     return 0;
// });
// arr.sort(function (x, y) {
//     return -(x - y);//倒序排列
// })
// console.log(arr);
// var arr = ['Google', 'apple', 'Microsoft'];
// arr.sort(function (s1, s2) {
//     x1 = s1.toLowerCase();
//     x2 = s2.toLowerCase();
//     if(x1 < x2){
//         return -1;
//     }
//     if(x1 > x2){
//         return 1;
//     }
//     return 0;
// });
// console.log(arr);
var arr = [10, 3, 5, 6];
arr.sort(function (x, y) {
    if(x > y){
        return -1;
    }
    else if(x < y){
        return 1;
    }
    else{
        return 0;
    }
})
console.log(arr);