// var age = 20;
// if(age >= 18){
//     console.log('adult');
// }else{
//     console.log('teenager');
// }
// var age = 3;
// if(age >= 18){
//     console.log('adult');
// }else if(age >= 6){
//     console.log('teenager');
// }else{
//     console.log('kid');
// }
// var s = '123';
// if(s.length){
//     console.log('ahhhhh');
// }
'use strict';

var height = parseFloat(prompt('请输入身高(m):'));
var weight = parseFloat(prompt('请输入体重(kg):'));
// var height = parseFloat(prompt('请输入身高(m):'));
// var weight = parseFloat(prompt('请输入体重(kg):'));
var bmi = weight/(height*height);

if(bmi<18.5){

    console.log('过轻');

}else if(bmi>=18.5 && bmi<25){

    console.log('正常');

}else if(bmi>=25 && bmi<28){

    console.log('过重');

}else if(bmi>=28 && bmi<32){

    console.log('肥胖');

}else{

    console.log('严重肥胖');

}