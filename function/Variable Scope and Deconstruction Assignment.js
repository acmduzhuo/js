//'use strict'
// function foo() {
//     var x = 1;
//     x = x + 1;
// }
// x = x + 2;//报错，无法在函数外引用函数内声明的变量
// function foo() {
//     var x = 1;
//     x = x + 1;
// }
// function foo() {
//     var x = 'A';
//     x = x + 'B';
// }//两个函数内的变量，即使名称相同也互不影响
// function foo() {
//     var x = 1;
//     function bar() {
//         var y =  x + 1;
//         console.log(y);
//     }
//     bar();
//     console.log(x);
// }
// foo();
// function foo() {
//     var x = 1;
//     function bar() {
//         var x = 'A';
//         console.log(`x in bar() = ${x}`);
//     }
//     console.log(`x in foo() = ${x}`);
//     bar();
// }
// foo();
// function foo() {
//     var y;
//     var x = 'Hello, ' + y;
//     console.log(x);
//     y = 'Bob';
// }
// foo();//在函数内部 首先 申明所有变量
// function foo() {
//     var
//         x = 1,
//         y = x + 1,
//         z, i;//声明所有变量
//     for(i=0; i<100; i++){
//
//     }
// }
// var course = 'Learn JavaScript';
// console.log(course);
// alert(window.course);//alert显示完全等同于前者，但是console.log却不同
// function foo() {
//     console.log('foo');
// }
// foo();
//window.alert('调用window.alert()');
// var old_alert = window.alert;
// window.alert = function(){
//     alert('无法用alert()显示了!');
// }
// //window.alert = old_alert;
// alert(window.alert());
// //alert('又可以用alert()了!');//alert()也是window的一个分量
// var MYAPP = {};
// MYAPP.name = 'myapp';
// MYAPP.version = 1.0;
// MYAPP.foo = function () {
//     return 'foo';
// };//将全部代码放入唯一的名字空间MYAPP中，以减少全局变量冲突的可能。
// function foo() {
//     for(var i=0; i<100; i++){
//
//     }
//     i += 1;//对i的操作依然成立，因为该变量作用于函数内部
// }
// function foo() {
//     var sum = 0;
//     for(var i=0; i<100; i++){//可以用let
//         sum += i;
//     }
//     i += 1;//当引用是let报错
//     console.log(sum);
// }
// foo();
// const PI = 3.14;
// PI = 3.11;//用const会报错，但是var却不会报错
// console.log(PI);
// var array = ['hello', 'JavaScript', 'ES6'];
// var x = array[0];
// var y = array[1];
// var z = array[2];
// console.log(`x = ${x}, y = ${y}, z = ${z}`);
// var [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
// console.log(`x = ${x}, y = ${y}, z = ${z}`);//注意嵌套一致
// let [, , z] = ['hello', 'JavaScript', 'ES6'];
// console.log(z);
// var person = {
//     name: '小明',
//     age: 20,
//     gender: 'male',
//     passport: 'G-123456789',
//     school: 'SDUT',
//     adress: {
//         city: 'Beijing',
//         street: 'No.1',
//         zipcode: '10001'
//     }
// };
// var {name, adress:{city}} = person;
// console.log(name);//解构赋值时，只需要将赋值的变量名称引用即可，注意嵌套对应
// var {name, age, adress:{city, street}, single = true} = person;
// console.log(name, age, single);//引用不存在变量
// var x, y;
// //{x, y} = {name, age};//当{开头，=失去了作用
// ({x, y} = {name:'小明', x: 20, y:10});//必须加上（）
// console.log(x, y);
// var x=1, y=2;
// [x, y] = [y, x];
// console.log(x, y);//交换值
//var{hostname: domain, pathname:path} = location;
//console.log(location);//获取当前域名和页面路径，输入到console控制台
// function buildDate({year, month, day, hour=0, minute=0, second=0}) {
//     return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
// }
// console.log(buildDate({year: 2020, month: 1, day: 1, hour:20, minute:15, second:10}));//正确输出，注意分隔符：-
function buildDate({year,month,day,hour=0,minute=0,second=0}){
    return new Date(year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second);
}
var time = {};
time.year = 2018;
time.month = 1;
time.day = 1;
time.hour = 23;
time.minute = 45;
time.second = 18;
console.log(buildDate(time));//Mon Jan 01 2018 23:45:18 GMT+0800 (中国标准时间)
