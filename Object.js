// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     school: 'No.1 Middle School',
//     height: 1.70,
//     weight: 65,
//     score: null
// };
//console.log(xiaoming.name);
// var xiaohong = {
//     name: '小红',
//     'middle-school': 'No.1 Middle School'//包含特殊字符，需要用''
// };
// console.log(xiaohong["middle-school"]);//引用时加上[""]，或者利用webstorm的人性化
'use strict';
// var xiaoming = {
//     name: '小明'
// };
// console.log(xiaoming.name);
// console.log(xiaoming.age);//显示undefined
// var xiaoming = {
//     name: '小明'
// };//js的对象是动态类型，可以自由添加删除属性
//xiaoming.age = 18;//添加对象
//console.log(xiaoming.age);
//delete xiaoming.age;
//delete xiaoming["age"];//和上面代码功能一样
//console.log(xiaoming.age);
//delete xiaoming.school;//删除一个不存在的元素，也不会报错。。。
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
}
//console.log("name" in xiaoming);//检测“name”这一元素是否在“xiaoming”中
//console.log("grade" in xiaoming);
//console.log('toString' in xiaoming);//但是“in”过于笼统，即使是js对象本身具备的元素也可以判断
//console.log(xiaoming.hasOwnProperty("name"));
//console.log(xiaoming.hasOwnProperty("toString"));//更进一步的判断
for(var i in xiaoming){
    console.log(`${i}: ${xiaoming[i]}`);
}//感谢评论区的巨巨