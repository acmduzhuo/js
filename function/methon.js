// var xiaoming = {
//     name: '小明',
//     birth: 1900,
//     age:function () {
//         var y = new Date().getFullYear();
//         return y - this.birth;
//     }
// };
// console.log(xiaoming.age);//显示[Function: age]
// console.log(xiaoming.age());//显示119
// function getAge() {
//     var y = new Date().getFullYear();
//     return y - this.year;
// }
//
// var xiaoming = {
//     name: '小明',
//     birth: 1900,
//     age:getAge
// };
// console.log(xiaoming.age());//this指向的是window显示NaN
// console.log(getAge());//显示NaN
// 'use strict';
// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         var y = new Date().getFullYear();
//         return y - this.year;
//     }
// };
// var fn = xiaoming.age;
// console.log(fn());//报错，在非strict模式下，它重新指向全局对象windows
// 'use strict'
// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         var that = this;
//         function getAgeFromBirth() {
//             var y = new Date().getFullYear();
//             return y - that.birth;
//         }
//         return getAgeFromBirth();
//     }
// };
// console.log(xiaoming.age());
// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: getAge
// };
// function getAge() {
//     var y = 2018;
//     return y - this.birth;
// }//顺序倒置也可以
// console.log(xiaoming.age());
// console.log(getAge.apply(xiaoming, []));
// var ccd = {
//     name: '独酌',
//     birth: 2000,
//     age: getAge
// };
// function getAge() {
//     var y = '101112';
//     return y + this.name;
// }
// console.log(ccd.age());
// console.log(getAge.apply(ccd, []));//实现字符串和
// console.log(Math.max.apply(null, [3, 5, 4]));
// console.log(Math.max.call(null, 3, 5, 4));//apply()把参数打包成Array再传入，call()把参数按顺序传入。
'use strict';
var count = 0;

var oldParseInt = parseInt;

window.parseInt = function(){
    count += 1;
    return oldParseInt.apply(null, arguments);
};
parseInt('10');
parseInt('20');
parseInt('30');
console.log('count = ' + count);