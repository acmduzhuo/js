'use strict'
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
function foo() {
    for(var i=0; i<100; i++){

    }
    i += 1;//对i的操作依然成立，因为该变量作用于函数内部
}