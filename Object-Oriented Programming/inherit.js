// function Student(name) {
//     this.name = name;
// }
// Student.prototype.hello = function () {
//     console.log('Hello, '+this.name+'!');
// };
// class Student {
//     constructor(name){
//         this.name = name;
//     }
//     hello(){
//     console.log('Hello, '+this.name+'!');
//     }
// }
// var xiaoming = new Student('小明');
// xiaoming.hello();
// class PrimaryStudent extends Student{
//     constructor(name, grade){
//         super(name);
//         this.grade = grade;
//     }
//     myGrade(){
//         console.log('I am at grade '+this.grade);
//     }
// }
// var xiaohong = new PrimaryStudent('小红',100);
// xiaohong.myGrade();
`use strict`;
class Animal{
    constructor(name){
        this.name = name;
    }
}
class Cat extends Animal{
    constructor(name){
        super(name);
    }
    say(){
        return('Hello, '+this.name+'!');
    }
}
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if ((new Cat('x') instanceof Animal) && kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}
