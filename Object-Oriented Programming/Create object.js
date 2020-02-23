// function Student(name) {
//     this.name = name;
//     this.hello = function () {
//         console.log('Hello, '+ this.name + '!');
//     }
// }
// var xiaoming = new Student('小明');
// console.log(xiaoming.name);
// xiaoming.hello();
// var xiaojun = Student('小军');//如果不写new，这就是一个普通函数，它返回undefined。但是，如果写了new，它就变成了一个构造函数，它绑定的this指向新创建的对象，并默认返回this
// console.log(xiaojun.name);
// xiaojun.hello();
// function Student(name) {
//     this.name = name;
// }
// Student.prototype.hello = function () {
//     console.log('Hello, ' + this.name + '!');
// };
// var xiaoming = new Student('小明');
// console.log(xiaoming.name);
// xiaoming.hello();
// var xiaohong = new Student('小红');
// console.log(xiaohong.name);
// xiaohong.hello();
// console.log(xiaoming.hello() === xiaohong.hello());//true根据对象的属性查找原则，我们只要把hello函数移动到xiaoming、xiaohong这些对象共同的原型上就可以了
`use strict`;
// function Student(props) {
//     this.name = props.name || '匿名';
//     this.grade = props.grade || 1;
// }
// Student.prototype.hello = function () {
//     console.log('Hello, ' + this.name + '!');
// };
// function createStudent(propos) {
//     return new Student(propos ||{});//在内部封装所有的new操作
// }
// var xiaoming = createStudent({
//     name: '小明'
// });
// console.log(xiaoming.grade);
// console.log(xiaoming.name);
function Cat(name) {
    this.name = name;
}
Cat.prototype.say = function () {
    return('Hello, '+ this.name + '!');
}
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if (kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}