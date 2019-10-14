// var arr = [1, 2, 3, 4, 5, 6, 9, 10, 15];
// var r = arr.filter(function (x) {
//     return x % 2 !== 0;//filter函数用于保留符合条件的元素
// });
// console.log(r);
// var arr = ['A', '', 'B', null, undefined, 'C', ' '];
// var r = arr.filter(function (s) {
//     return s && s.trim();
// })
// console.log(r);
// var str = '  abs ';
// console.log(str.trim());//trim去掉字符串的 头 和 尾 的空格
// var arr = ['java', 'python', 'PHP', 'c++', 'html'];
// var r = arr.filter(function (x) {
//     return x !== 'java';
// })
// console.log(r);
// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// var r = arr.filter(function (x) {
//         var i = 2;
//         for(i=2; i<x; i++){
//             return x % i === 0;
//         }
// })
// console.log(r);
// var arr = ['A', 'B', 'C', 'D'];
// var r = arr.filter(function (element, index, self) {
//     console.log(element);//各个元素
//     console.log(index);//各个元素序号
//     console.log(self);//整个元组
//     return true;
// })
//console.log(r);
// var arr = ['A', 'B', 'C'];
// var r = arr.filter(function (element, index, self) {
//     console.log(element);
//     console.log(index);
//     console.log(self);
//     //console.log(last);
//     return true;
// })
// console.log(r);
`use strict`
var
    r,
    arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry', 'apple'];
r = arr.filter(function (element, index, self) {
    return self.indexOf(element) === index;//去除重复元素依靠的是indexOf总是返回第一个元素的位置，后续的重复元素位置与indexOf返回的位置不相等，因此被filter滤掉了。
});
console.log(r.toString());