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
'use strict'
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this;
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth;
        }
        return getAgeFromBirth();
    }
};
console.log(xiaoming.age());