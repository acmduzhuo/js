//
// \d
// //匹配数字
// \w
// //匹配字母或者数字
// \s
//     //匹配一个空格或一个Tab
// .
// //匹配任意字符
// *
//     //任意个字符（包括0个）
// +
//     //至少一个字符
// ?
//     //0或1个字符
// {n} {n,m}
// //n个字符，n到m个字符
// \d{3}\s+\d{3,8}//3个数字至少一个空格或者Tab 3到8个数字
// \d{3}\-d{3,8}//'010-12345'
//
// [0-9a-zA-Z\_] \\匹配一个数字、字母、或者下划线
// [0-9a-zA-Z\_]+ \\匹配至少由一个数字、字母 或 下划线组成的字符串，如‘a100’
// [a-zA-Z\_\$][0-9a-zA-Z\_\$]{0,19} //匹配至少一个字母或者下划线、$开头，后接一个数字、字母或者下划线、%$组成的字符串
// ^
// //表示行开头
// $
// //表示行结束
`use strict`;
//建立正则表达式两种方法
// var re1 = /ABC\-001/;
// var re2 = new RegExp('ABC\\-001');
// console.log(re1);
// console.log(re2);
// var re = /^\d{3}\-\d{3,8}$/;
// console.log(re.test('010-12345'));
// var re1 = /[0-9a-zA-Z\_]/;
// console.log(re1.test('2aaa'));
//切分字符串
// var arr = 'a b  c';
// console.log(arr.split(' '));//一般分割
// console.log(arr.split(/\s+/));//正则匹配分割
// var arr1 = 'a ,b,c d';
// console.log(arr1.split(/[\s\,]+/));
// console.log(arr1.split(/[\s\,]/));//入坑，无+表示字符，带+表示字符串
// var arr2 = 'a,b;; c   d';
// console.log(arr2.split(/[\s\,\;]+/));//貌似这边转义与否无所谓
//正则表达式分组
// var re = /^(\d{3})-(\d{3,8})$/;
// console.log(re.exec('010-12345'));//匹配结果：'010-12345','010', '12345',
// console.log(re.exec('010 12345'));
// var re = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/;
// console.log(re.exec('19:05:30')); // ['19:05:30', '19', '05', '30']
// console.log(re.exec('9:5:0'));//鬼知道为啥要多出来这个[0-9]
//贪婪匹配
// var re = /^(\d+)(0*)$/;
// console.log(re.exec('1023000'));
// var re1 = /^(\d+?)(0*)$/;//?消除贪婪匹配
// console.log(re1.exec('1023000'));// '1023000','1023', '000', index: 0, input: '1023000',groups: undefined
//全局匹配
var r1 = /test/g;
var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re=/[a-zA-Z]+Script/g;
console.log(re.exec(s)); // ['JavaScript']
console.log(re.lastIndex);//10当我们指定g标志后，每次运行exec()，正则表达式本身会更新lastIndex属性，表示上次匹配到的最后索引：
console.log(re.exec(s)); // [ 'VBScript']
console.log(re.lastIndex);//全局匹配类似搜索，因此不能使用/^...$/，那样只会最多匹配一次。