// function foo(x){
//     return x + x;
// }
//
// var r = foo(1);
// console.log(r);//基本的函数调用
// function* foo(x){
//     yield x + 1;
//     yield x + 2;
//     return x + 3;
// }
// console.log(foo(1));
// function fib(max){
//     var t,
//         a = 0,
//         b = 1,
//         arr = [0, 1];
//     while(arr.length < max){
//         [a, b] = [b, a+b];
//         arr.push(b);
//     }
//     return arr;
// }
// console.log(fib(5));//[ 0, 1, 1, 2, 3 ]
// console.log(fib(10));//[0, 1,  1,  2,  3, 5, 8, 13, 21, 34]
// function* fib(max) {
//     var t,
//         a = 0,
//         b = 1,
//         n = 0;
//     while(n < max){
//         yield a;
//         [a, b] = [b, a+b];
//         n++;
//     }
//     return;
// }
//调用generator的第一种方法，next()返回value和done两种对象
// var f = fib(5);
// console.log(f.next());//{ value: 0, done: false }
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());//{ value: undefined, done: true }
//第二种方法，for...of循环迭代遍历
// for(var x of fib(10)){
//     console.log(x);
// }
//generator具体应用
// var fib = {
//     a: 0,
//     b: 1,
//     n: 0,
//     max: 5,
//     next: function () {
//         var
//             r = this.a;
//             t = this.a + this.b;
//         this.a = this.b;
//         this.b = t;
//         if(this.n < this.max){
//             this.n++;
//             return r;
//         }else{
//             return undefined;
//         }
//     }
// };
// console.log(fib.next());
// var current_id = 0;
// function next_id() {
//     current_id ++;
//     return current_id;
// }
// console.log(next_id());
`use strict`
function* next_id() {
    var current_id = 0;
    while(1){
        yield ++current_id;
    }
    return current_id;
}
console.log(next_id().next());