'use strict';
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
// var s = JSON.stringify(xiaoming, null, '  ');
// console.log(s);//JSON还定死了字符集必须是UTF-8，表示多语言就没有问题了。为了统一解析，JSON的字符串规定必须用双引号""，Object的键也必须用双引号""。
// {
//     "name": "小明",
//     "age": 14,
//     "gender": true,
//     "height": 1.65,
//     "grade": null,
//     "middle-school": "\"W3C\" Middle School",
//     "skills": [
//     "JavaScript",
//     "Java",
//     "Python",
//     "Lisp"
// ]
// }
// function convert(key, value) {
//     if (typeof value === 'string') {
//         return value.toUpperCase();
//     }
//     if(typeof value === 'number'){
//         return value+1;
//     }
//     return value;
// }
// console.log(JSON.stringify(xiaoming, convert, '  '));
//	作用：将json对象转换成json字符串。
// 		语法：JSON.stringify(value [, replacer] [, space])
// 		参数：value  必须；通常为对象或数组。
// 			replacer 可选，用于转换结果的函数或者数组。
// 			space 可选。向返回值 JSON 文本添加缩进、空格和换行符以使其更易于读取。
// var xiaoming = {
//     name: '小明',
//     age: 14,
//     gender: true,
//     height: 1.65,
//     grade: null,
//     'middle-school': '\"W3C\" Middle School',
//     skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
//     toJSON: function () {
//         return { // 只输出name和age，并且改变了key：
//             'Name': this.name,
//             'Age': this.age
//         };
//     }
// };
// console.log(JSON.stringify(xiaoming, null, '   ')); // '{"Name":"小明","Age":14}'
// console.log(JSON.parse('[1,2,3,true]')) // [1, 2, 3, true]
// console.log(JSON.parse('{"name":"小明","age":14}')); // Object {name: '小明', age: 14}
// console.log(JSON.parse('true')); // true
// console.log(JSON.parse('123.45'));// 123.45
// //parse变成一个JavaScript对象
// var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
//     if (key === 'name') {
//         return value + '同学';
//     }
//     return value;
// });
// console.log(JSON.stringify(obj, null, '   ')); // {name: '小明同学', age: 14}
