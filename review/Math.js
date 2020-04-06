//console.dir(Math);
console.log(Math.abs(-12));//取绝对值
console.log(Math.abs(-1.2));//对于小数也适用
console.log(Math.ceil(12.03));//13先上取整，收尾
console.log(Math.ceil(12.92));//13
console.log(Math.ceil(-12.93));//-12
console.log(Math.floor(12.03));//12向下取整，收尾
console.log(Math.floor(-12.03));//-13
console.log(Math.round(12.1));//12四舍五入
console.log(Math.round(12.9));//13
console.log(Math.round(-12.1));//-12
console.log(Math.round(-12.9));//-13
console.log(Math.random());//获取[0,1)的随机小数
console.log(parseInt(Math.random()*10));//获取[0,10）随机数
console.log(parseInt(Math.random()*10)+1);//获取[0,10]随机数
console.log(Math.round(Math.random()*(9-1)+1));//获取[1,9]之间的随机数
console.log(Math.max(0,1));//获取最大值
console.log(Math.max(0.1, 3));//对于小数也适用
console.log(Math.max(0.1, 0.3));//0.3
console.log(Math.max(-1, 0));//对于负数也可以
console.log(Math.min(0,1));//获取最小值
console.log(Math.min(0.1, 3));//对于小数也适用
console.log(Math.min(0.1, 0.3));//0.1
console.log(Math.min(-1, 0));//对于负数也可以
console.log(Math.PI);//圆周率3.141592653589793
console.log(Math.pow(10,2));//100
console.log(Math.sqrt(100));//10
console.log(Math.exp(1));//e的几次幂
console.log(Math.log(2));//返回2的自然对数
//三角函数
// console.log(Math.sin());//正弦
// console.log(Math.cos());//余弦
// console.log(Math.tan());//正切
// console.log(Math.asin());//反正弦
// console.log(Math.acos());//反余弦
// console.log(Math.atan());//反正切