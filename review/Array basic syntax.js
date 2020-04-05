//数组
// var arr = [1, 2, 3.14, 'Hello', null, true];
// console.log(arr.length);
// arr.length = 3;
// console.log(arr);//从尾递减
// arr.length = 10;
// console.log(arr);//[ 1, 2, 3.14, <7 empty items> ]
// arr = [1, 2, 3];
// arr[5] = 'x';
// console.log(arr);//通过索引赋值，如果超了范围，会引起数组大小的变化
// var arr = [10, 20, '30', 'xyz'];
// console.log(arr.indexOf(10));//0
// console.log(arr.indexOf(30));//无30，返回-1
// console.log(arr.indexOf('30'));//2
// var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
// arr.slice(0,3);
// console.log(arr);
// console.log(arr.slice(0,3));//从序号开始切片
// console.log(arr.slice(4,10));//[ 'E', 'F', 'G' ]
// console.log(arr.slice(3))//只有一个元素，则从该序号向后
// console.log(arr.slice());
// var aCopy = arr.slice();
// console.log(arr === aCopy);//false
// var arr = [1,2];
// arr.push(3);
// console.log(arr.push(2));//返回长度 4
// var arr = [1,3];
// console.log(arr.pop());//3
// arr.pop();
// console.log(arr);//空[]
// var arr = [1, 2];
// arr.unshift('A', 'B');
// console.log(arr);//从头添加元素[ 'A', 'B', 1, 2 ]
// console.log(arr.unshift('C'));//返回长度 5
// var arr = [1, 3];
// arr.shift();
// console.log(arr);//去掉第一个元素，3
// console.log(arr.shift());//返回去掉的元素 3
// console.log(arr.shift());//undefined
// var arr = ['B', 'C', 'A'];
// arr.sort();
// console.log(arr.sort());//同上
// var arr = ['one', 'two', 'three'];
// arr.reverse();
// console.log(arr.reverse());//反转 同上
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
arr.splice('Google', 'Facebook');
console.log(arr);
//arr.splice(2, 3, 'Google', 'Facebook');
//arr.splice(2);//从序号为2开始到后全删
//arr.splice(2, 3);//删除后不会补充
//arr.splice(2, 'Google');//不会进行操作
//console.log(arr);//从序号为2的元素开始删除3个元素，然后在该位置增加后面的元素
//console.log(arr.splice(2, 3, 'Google', 'Facebook'));//删除的几个元素
console.log(arr.splice(2,0,'Google'));//[]没有删除的元素
var arr = ['A', 'B', 'C'];
var added = arr.concat([1,2,3]);
console.log(added);//合并两个数组,原数组不会受到影响
var brr = [1, 2, 3];
var added1 = arr + brr;
console.log(added1);
var arr = ['A', 'B', 'C'];
console.log(arr.concat(1, 2, [3, 4]));//[ 'A', 'B', 'C', 1, 2, 3, 4 ]
console.log(arr);//无影响
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-');
console.log(arr);
console.log(arr.join('-'));//返回连接的字符串