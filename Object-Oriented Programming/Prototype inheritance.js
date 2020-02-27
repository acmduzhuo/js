// function Dog(propos) {
//     this.name = propos.name || '大黄';
// }
// Dog.prototype.wang = function () {
//     console.log('Hello, '+this.name + "!");
// };
// function createDog(propos) {
//     return new Dog(propos || {});
// }
// var xiaohuang = createDog({
//     name: '小黄'
// });
// xiaohuang.wang();//回顾
function Student(propos) {
    this.name = propos.name || 'Unnamed';
}
Student.prototype.hello = function () {
    console.log('Hello, '+this.name+'!');
};
function PrimaryStudent(propos) {
    Student.call(this, propos);
    this.grade = propos.grade || 1;
}
function F() {

}
F.prototype = Student.prototype;
PrimaryStudent.prototype = new F();
PrimaryStudent.prototype.constructor = PrimaryStudent;
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

// 创建xiaoming:
var xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 2
});
xiaoming.name; // '小明'
xiaoming.grade; // 2

// 验证原型:
xiaoming.__proto__ === PrimaryStudent.prototype; // true
xiaoming.__proto__.__proto__ === Student.prototype; // true

// 验证继承关系:
xiaoming instanceof PrimaryStudent; // true
xiaoming instanceof Student; // true
//这是我见过最复杂的继承