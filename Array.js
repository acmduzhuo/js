// var arr = [1, 2, 3.14, 'Hello', null, true];
// console.log(arr.length);
// var arr = [1, 2, 3];
// console.log(arr.length);
//arr.length = 6;
//console.log(arr);
// arr.length = 2;
// console.log(arr);
//var arr = ['A', 'B', 'C'];
//console.log(arr[1]);
//arr[0] = 100;
//console.log(arr);
//var arr = [1, 2, 3];
//arr[5] = 'x';
//console.log(arr);
//var arr = [10, 20, '30', 'xyz'];
//console.log(arr.indexOf(10));//根据元素找下标
//console.log(arr.indexOf(30));
//console.log(arr.indexOf('30'));
//var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
// console.log(arr.slice(0, 3));//根据下标范围找元素
//console.log(arr.slice(3));
//console.log(arr);
//console.log(arr.slice());
//var arr1 = arr.slice();
//var arr2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
//console.log(arr === arr1);
//console.log(arr1 === arr2);
// var arr = [1, 2];
// arr.push('A', 'B');//头尾加入元素
//console.log(arr);
//arr.pop();
// console.log(arr);
// arr.pop();//头尾删除元素
// arr.pop();
// arr.pop();
// console.log(arr);
// var arr = [1, 2];
// arr.unshift('A', 'B');//头前加入元素
// console.log(arr);
//arr.shift();//头前删除元素
// console.log(arr);
// arr.shift();
// arr.shift();
// arr.shift();
// console.log(arr);
// var arr = ['B', 'A', 'C'];
// arr.sort();
// console.log(arr);//正序排列
// var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// arr.splice(2, 3, 'Google', 'Facebook');//从索引位置2删除3个元素并在删除位置增加'Google'和'Facebook'
// console.log(arr);
// arr.splice(2, 2);
// console.log(arr);
// var arr = ['A', 'B', 'C'];
// var added = arr.concat([1, 2, 3]);
// console.log(added);//输出[ 'A', 'B', 'C', 1, 2, 3 ]，连接两个数组，本数组在前
// console.log(arr);//输出[ 'A', 'B', 'C' ]
// var arr = ['A', 'B', 'C', 1, 2, 3];
// console.log(arr.join('-'));//输出A-B-C-1-2-3
// console.log(arr.join('*'));///输出A*B*C*1*2*3 ‘-’作为连接符号
// var arr = [[1, 2, 3], [400, 500, 600], '-'];
// console.log(arr[1][1]);
'use strict';
// var arr1 = ['小明', '小红', '大军', '阿黄'];
// var arr = arr1.sort();
// console.log(`欢迎${arr[0]},${arr[1]},${arr[2]}和${arr[3]}同学！`);
// var arr = ['Apple', 'pear', 'orange'];
// console.log(arr.every(function (s) {
//     return s.length > 0;
// }));///每个元素是否长度都大于0
// console.log(arr.every(function (s) {
//     return s.toLowerCase() == s;
// }));//每个元素是否都是小写
// var arr = [1, 2, 3, 4, 6];
// console.log(arr.every(function (s) {
//     return s%2;
// }));
// console.log(arr.find(function (s) {
//     return s%2 == 0;
// }));
var arr = ['Apple', 'pear', 'orange'];
// console.log(arr.findIndex(function (s) {
//     return s.toLowerCase() === s;
// }));//查找第一个符合条件的元素若查找成功，则返回该索引，查找不到返回-1
// console.log(arr.findIndex(function (s) {
//     return s.toUpperCase() === s;
// }));//在这里没有找到全部大写的元素
arr.forEach(console.log);
var arr = [1, 2, 3, 4];
arr.forEach(console.log);
