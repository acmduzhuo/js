`use strict`;
// var fn = x => x*x;
// console.log(fn(1));
// var n = x => {
//     if(x > 0) {
//         return 0;
//     }
//     else {
//         return - x*x;
//     }
// }
// console.log(n(1));
// var n = (x, y) => x*x + y*y;//两个参数
// console.log(n(1,2));
// var n = () => 3.14;//无参数
// console.log(n(1));
// var n  =(x, y, ...rest) => {
//     var i, sum = x + y;
//     for(i = 0;i<rest.length;i++){
//         sum += rest[i];
//     }
//     return sum;
// }
// console.log(n(1, 2, 3));
// var n = x => ({foot:x});
// console.log(n(1));//返回一个对象
// var obj = {
//     birth: 1990,
//     getAge:function () {
//         var b = this.birth;
//         var fn = () => new Date().getFullYear()-this.birth;
//         return fn();
//     }
// };
// console.log(obj.getAge());
// var arr = [10, 20, 1, 2];
// arr.sort((x, y) =>{
//     return x < y ? -1 : (x===y ? 1 : 0);
// })
// console.log(arr);
// var obj = {
//     birth:1990,
//     getAge: function (year) {
//         var b = this.birth;
//         var fn = (y) => y-this.birth;
//         return fn.call({birth: 2000}, year);
//     }
// };
// console.log(obj.getAge(2015));
// var Age = {
//     birth: 1990,
//     getAge:function () {
//         var b = this.birth;
//         var fn = () => new Date().getFullYear() - this.birth;
//         return fn();
//     }
// };
// console.log(Age.getAge());
var arr = [10, 20, 1, 2];
arr.sort((x, y) =>{
    return x>y ? 1 : -1;
});
console.log(arr);